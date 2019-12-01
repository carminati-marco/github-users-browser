import React from "react";
import { Provider } from "react-redux";

import store from "../../redux/store";
import UserList from "./index";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

it("renders without crashing", () => {
  const component = renderer.create(
    <Provider store={store}>
      <UserList />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("ListGroupItem must be 3", () => {
  const component = mount(
    <Provider store={store}>
      <UserList />
    </Provider>
  );
  const c = component.find(UserList).find("ListGroupItem").length;
  expect(c).toEqual(3);
});

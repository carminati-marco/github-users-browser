import React from "react";
import { Provider } from "react-redux";

import store from "../../redux/store";
import UserList from "./index";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const component = renderer.create(
    <Provider store={store}>
      <UserList />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

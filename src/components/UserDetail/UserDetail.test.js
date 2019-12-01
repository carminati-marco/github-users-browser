import React from "react";
import { Provider } from "react-redux";

import store from "../../redux/store";
import UserDetail from "./index";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const component = renderer.create(
    <Provider store={store}>
      <UserDetail />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

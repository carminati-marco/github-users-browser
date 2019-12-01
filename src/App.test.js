import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import store from "./redux/store";

it("renders without crashing", () => {
  const component = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

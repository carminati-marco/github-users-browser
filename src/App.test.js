import React from "react";
import App from "./App";
import { Provider } from "react-redux";

import store from "./redux/store";
import { shallow } from "enzyme";

it("shallow without crashing", () => {
  const component = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
  let tree = component.debug();
  expect(tree).toMatchSnapshot();
});

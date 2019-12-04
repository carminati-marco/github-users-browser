import React from "react";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import App from "./App";

import store from "./redux/store";

test("shallow without crashing", () => {
  const component = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(component).toMatchSnapshot();
});

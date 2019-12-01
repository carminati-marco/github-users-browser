import React from "react";
import { Provider } from "react-redux";

import store from "../../redux/store";
import UserDetail from "./index";
import { shallow } from "enzyme";

it("shallow without crashing", () => {
  const component = shallow(
    <Provider store={store}>
      <UserDetail />
    </Provider>
  );
  let tree = component.debug();
  expect(tree).toMatchSnapshot();
});

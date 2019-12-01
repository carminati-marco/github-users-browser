import React from "react";
import { Provider } from "react-redux";

import store from "../../redux/store";
import UserDetail from "./index";

import { mount } from "enzyme";
import App from "../../App";

describe("UserDetail test", () => {
  let component;

  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("renders correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("Cart must be 0", () => {
    expect(component.find(UserDetail).find("Card").length).toEqual(0);
  });

  it("ListGroupItem toggle activate", () => {
    component
      .find("ListGroupItem")
      .first()
      .simulate("click");

    component.update();
    expect(component.find(UserDetail).find("Card").length).toEqual(1);
    expect(component).toMatchSnapshot();

    component
      .find("ListGroupItem")
      .first()
      .simulate("click");

    component.update();
    expect(component.find(UserDetail).find("Card").length).toEqual(0);
  });
});

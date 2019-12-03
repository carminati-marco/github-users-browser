import React from "react";
import { Provider } from "react-redux";

import store from "../../redux/store";
import UserDetail from "./index";

import { mount } from "enzyme";
import App from "../../App";

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

describe("UserDetail test", () => {
  let component;

  beforeEach(async () => {
    component = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await flushPromises();
    component.update();
  });

  it("renders correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("Cart must be 0", () => {
    expect(component.find(UserDetail).find("Card").length).toEqual(0);
  });

  it("ListGroupItem toggle activate", async () => {
    component
      .find("ListGroupItem")
      .first()
      .simulate("click");

    await flushPromises();
    component.update();
    expect(component.find(UserDetail).find("Card").length).toEqual(1);
    expect(component).toMatchSnapshot();

    component
      .find("ListGroupItem")
      .first()
      .simulate("click");

    await flushPromises();
    component.update();
    expect(component.find(UserDetail).find("Card").length).toEqual(0);
  });
});

import React from "react";
import { Provider } from "react-redux";

import store from "../../redux/store";
import UserList from "./index";
import { mount } from "enzyme";

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

describe("UserList test", () => {
  let component;

  beforeEach(async () => {
    component = mount(
      <Provider store={store}>
        <UserList />
      </Provider>
    );
    await flushPromises();
    component.update();
  });

  it("renders correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("ListGroupItem must be 3", async () => {
    component = mount(
      <Provider store={store}>
        <UserList />
      </Provider>
    );
    await flushPromises();
    component.update();

    const c = component.find(UserList).find("ListGroupItem").length;
    expect(c).toEqual(3);
  });

  it("ListGroupItem change using with input", async () => {
    component
      .find("input")
      .first()
      .simulate("change", { target: { value: "tn" } });

    await flushPromises();
    component.update();
    // checks there is only a ListGroupItem with the right id (1455367)
    expect(component.find("ListGroupItem").length).toEqual(1);
    expect(component.find("ListGroupItem div[data-rb-event-key='1455367']").length).toEqual(1);
  });

  it("ListGroupItem change using with input UPPERCASE", async () => {
    component
      .find("input")
      .first()
      .simulate("change", { target: { value: "TN" } });

    await flushPromises();
    component.update();
    // checks there is only a ListGroupItem with the right id (1455367)
    expect(component.find("ListGroupItem").length).toEqual(1);
    expect(component.find("ListGroupItem div[data-rb-event-key='1455367']").length).toEqual(1);
  });

  it("ListGroupItem toggle activate", async () => {
    component
      .find("ListGroupItem")
      .first()
      .simulate("click");

    await flushPromises();
    component.update();
    expect(component.find("ListGroupItem div[className='list-group-item active']").length).toEqual(1);

    component
      .find("ListGroupItem")
      .first()
      .simulate("click");
    expect(component.find("ListGroupItem div[className='list-group-item active']").length).toEqual(0);
  });
});

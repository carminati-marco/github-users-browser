import React from "react";
import { Provider } from "react-redux";

import { mount } from "enzyme";
import store from "../../redux/store";
import UserList from "./index";

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

  it("listGroupItem must be 3", async () => {
    component = mount(
      <Provider store={store}>
        <UserList />
      </Provider>
    );
    await flushPromises();
    component.update();

    const c = component.find(UserList).find("ListGroupItem").length;
    expect(c).toStrictEqual(3);
  });

  it("listGroupItem change using with input", async () => {
    component
      .find("input")
      .first()
      .simulate("change", { target: { value: "tn" } });

    await flushPromises();
    component.update();
    // checks there is only a ListGroupItem with the right id (1455367)
    expect(component.find("ListGroupItem")).toHaveLength(1);
    expect(
      component.find("ListGroupItem div[data-rb-event-key='1455367']")
    ).toHaveLength(1);
  });

  it("listGroupItem change using with input UPPERCASE", async () => {
    component
      .find("input")
      .first()
      .simulate("change", { target: { value: "TN" } });

    await flushPromises();
    component.update();
    // checks there is only a ListGroupItem with the right id (1455367)
    expect(component.find("ListGroupItem")).toHaveLength(1);
    expect(
      component.find("ListGroupItem div[data-rb-event-key='1455367']")
    ).toHaveLength(1);
  });

  it("listGroupItem toggle activate", async () => {
    component
      .find("ListGroupItem")
      .first()
      .simulate("click");

    await flushPromises();
    component.update();
    expect(
      component.find("ListGroupItem div[className='list-group-item active']")
    ).toHaveLength(1);

    component
      .find("ListGroupItem")
      .first()
      .simulate("click");
    expect(
      component.find("ListGroupItem div[className='list-group-item active']")
    ).toHaveLength(0);
  });
});

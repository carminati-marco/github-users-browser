import React from "react";
import { Provider } from "react-redux";

import store from "../../redux/store";
import UserList from "./index";
import { mount } from "enzyme";

describe("UserList test", () => {
  let component;

  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <UserList />
      </Provider>
    );
  });

  it("renders correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("ListGroupItem must be 3", () => {
    const c = component.find(UserList).find("ListGroupItem").length;
    expect(c).toEqual(3);
  });

  it("ListGroupItem change using with input", () => {
    component
      .find("input")
      .first()
      .simulate("change", { target: { value: "tn" } });

    component.update();
    // checks there is only a ListGroupItem with the right id (1455367)
    expect(component.find("ListGroupItem").length).toEqual(1);
    expect(component.find("ListGroupItem div[data-rb-event-key='1455367']").length).toEqual(1);
  });

  it("ListGroupItem change using with input UPPERCASE", () => {
    component
      .find("input")
      .first()
      .simulate("change", { target: { value: "TN" } });

    component.update();
    // checks there is only a ListGroupItem with the right id (1455367)
    expect(component.find("ListGroupItem").length).toEqual(1);
    expect(component.find("ListGroupItem div[data-rb-event-key='1455367']").length).toEqual(1);
  });

  it("ListGroupItem toggle activate", () => {
    component
      .find("ListGroupItem")
      .first()
      .simulate("click");

    component.update();
    expect(component.find("ListGroupItem div[className='list-group-item active']").length).toEqual(1);

    component
      .find("ListGroupItem")
      .first()
      .simulate("click");
    expect(component.find("ListGroupItem div[className='list-group-item active']").length).toEqual(0);
  });
});

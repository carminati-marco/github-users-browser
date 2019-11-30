import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { ListGroup, InputGroup, FormControl } from "react-bootstrap";
import styled from "styled-components";

import { setUser } from "../../redux/actions";
import { getUsers } from "../../services";

const StyledFormControl = styled(FormControl)`
  border-radius: 25px;
`;

class UserList extends Component {
  state = { users: getUsers(), selectedUserId: null, search: null };

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  handleClickListItem(event) {
    const selectedUserId = this.state.selectedUserId === event ? null : event;
    this.setState({ selectedUserId });

    const user = this.state.users.find(user => user.id === selectedUserId);
    this.props.setUser(user || null);
  }

  render() {
    const { users, selectedUserId, search } = this.state;

    const filteredUser = search ? users.filter(user => _.includes(user.login, search)) : users;

    return (
      <div>
        <InputGroup className="mb-3">
          <StyledFormControl
            placeholder="Search.."
            onChange={event => this.handleChange(event)}
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <ListGroup activeKey={selectedUserId}>
          {filteredUser.map(user => (
            <ListGroup.Item onClick={() => this.handleClickListItem(user.id)} key={user.id} eventKey={user.id}>
              {user.login}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default connect(
  null,
  { setUser }
)(UserList);

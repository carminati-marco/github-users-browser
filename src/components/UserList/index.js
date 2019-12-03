import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, InputGroup, FormControl } from "react-bootstrap";
import styled from "styled-components";

import { setUser } from "../../redux/actions";
import { getUsers } from "../../services";

const StyledFormControl = styled(FormControl)`
  border-radius: 25px;
`;

class UserList extends Component {
  state = { users: [], selectedUserId: null, search: null };

  async componentDidMount() {
    const users = await getUsers();
    this.setState({ users });
  }

  async handleChange(event) {
    const search = event.target.value;
    const users = await getUsers(search);
    this.setState({ search, users, selectedUserId: null });
    this.props.setUser(null);
  }

  handleClickListItem(event) {
    const selectedUserId = this.state.selectedUserId === event ? null : event;
    this.setState({ selectedUserId });

    const user = this.state.users.find(user => user.id === selectedUserId);
    this.props.setUser(user || null);
  }

  render() {
    const { users = [], selectedUserId } = this.state;
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
          {users.map(user => (
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

import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, InputGroup, FormControl } from "react-bootstrap";
import styled from "styled-components";

import { setUser, setRepositories } from "../../redux/actions";
import { getUsers, getRepositories } from "../../services";

const StyledFormControl = styled(FormControl)`
  border-radius: 25px;
`;

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], selectedUserId: null };
  }

  async componentDidMount() {
    const users = await getUsers();
    this.setState({ users });
  }

  async handleChange(event) {
    const search = event.target.value;
    const users = await getUsers(search);
    this.setState({ users, selectedUserId: null });
    this.props.setUser(null);
    this.props.setRepositories(null);
  }

  async handleClickListItem(event) {
    let { selectedUserId } = this.state;
    selectedUserId = selectedUserId === event ? null : event;
    this.setState({ selectedUserId });
    this.props.setRepositories(null);

    const user = this.state.users.find(u => u.id === selectedUserId);
    this.props.setUser(user || null);

    const repositories = user ? await getRepositories(user.login) : null;
    this.props.setRepositories(repositories);
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
            <ListGroup.Item
              onClick={() => this.handleClickListItem(user.id)}
              key={user.id}
              eventKey={user.id}
            >
              {user.login}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default connect(null, { setUser, setRepositories })(UserList);

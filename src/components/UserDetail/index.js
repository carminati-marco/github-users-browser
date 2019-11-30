import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Card, ListGroup } from "react-bootstrap";
import { getRepositories } from "../../services";

const StyledCardImg = styled(Card.Img)`
  width: 180px;
  height: 180px;
  border: 1px solid #000;
`;

const StyledCardBody = styled(Card.Body)`
  padding: 10px;
  display: flex;
  align-items: flex-start;

  div {
    margin-left: 5px;
  }
`;

class UserDetail extends Component {
  render() {
    const { selectedUser } = this.props;

    return (
      selectedUser && (
        <Card>
          <StyledCardBody>
            <StyledCardImg variant="top" src={selectedUser.avatar_url} />
            <Card.Body>
              <Card.Title>{selectedUser.login}</Card.Title>
              <Card.Subtitle>
                <div>
                  <span>Type:</span> {selectedUser.type}
                </div>
                <div>
                  <span>Score:</span> {selectedUser.score}
                </div>
              </Card.Subtitle>
            </Card.Body>
          </StyledCardBody>
          <Card.Body>
            <Card.Title>Repositories</Card.Title>
            <ListGroup>
              {getRepositories(selectedUser.id).map(repository => (
                <ListGroup.Item key={repository.id}>{repository.name}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      )
    );
  }
}

const mapStateToProps = state => {
  const { selectedUser } = state;
  return { selectedUser };
};

export default connect(mapStateToProps)(UserDetail);

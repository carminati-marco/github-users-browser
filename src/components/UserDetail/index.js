import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Card, ListGroup, Spinner } from "react-bootstrap";

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

const Repositories = ({ repositories }) => {
  if (!repositories) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
  return (
    <ListGroup>
      {repositories.map(repository => (
        <ListGroup.Item key={repository.id}>{repository.name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

class UserDetail extends Component {
  render() {
    const { selectedUser, selectedRepositories } = this.props;

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
            <Repositories repositories={selectedRepositories} />
          </Card.Body>
        </Card>
      )
    );
  }
}

const mapStateToProps = state => {
  const { selectedUser, selectedRepositories } = state;
  return { selectedUser, selectedRepositories };
};

export default connect(mapStateToProps)(UserDetail);

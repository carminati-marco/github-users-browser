import React from "react";
import styled from "styled-components";
import { Card, ListGroup } from "react-bootstrap";

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

const UserDetail = () => (
  <Card>
    <StyledCardBody>
      <StyledCardImg variant="top" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" />
      <Card.Title>
        Marco<br />Carminati
      </Card.Title>
    </StyledCardBody>
    <Card.Body>
      <Card.Title>Repositories</Card.Title>
      <ListGroup>
        <ListGroup.Item>Linus Torvalds</ListGroup.Item>
        <ListGroup.Item>Marco Carminati</ListGroup.Item>
        <ListGroup.Item>Another developer</ListGroup.Item>
      </ListGroup>
    </Card.Body>
  </Card>
);
export default UserDetail;

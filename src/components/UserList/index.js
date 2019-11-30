import React from "react";
import { ListGroup, InputGroup, FormControl } from "react-bootstrap";
import styled from "styled-components";

const StyledFormControl = styled(FormControl)`
  border-radius: 25px;
`;

const UserList = () => (
  <div>
    <InputGroup className="mb-3">
      <StyledFormControl placeholder="Search.." aria-label="Search" aria-describedby="basic-addon1" />
    </InputGroup>
    <ListGroup>
      <ListGroup.Item>Linus Torvalds</ListGroup.Item>
      <ListGroup.Item>Marco Carminati</ListGroup.Item>
      <ListGroup.Item>Another developer</ListGroup.Item>
    </ListGroup>
  </div>
);
export default UserList;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";
import styled from "styled-components";

import { Container, Row, Col } from "react-bootstrap";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail/index";

const Header = styled.header`
  background-color: #282c34;
  min-height: 72px;
  line-height: 72px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  color: #fff;

  &&&& img {
    padding: 4px;
  }
`;

const StyledContainer = styled(Container)`
  padding: 10px;
`;

function App() {
  return (
    <div>
      <Header>
        <img src={logo} alt="Github" />
      </Header>
      <StyledContainer fluid={true}>
        <Row>
          <Col>
            <UserList />
          </Col>
          <Col>
            <UserDetail />
          </Col>
        </Row>
      </StyledContainer>
    </div>
  );
}

export default App;

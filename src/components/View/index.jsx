import React from "react";
import { Col, Row, Button } from "reactstrap";
import NavBar from "../Navbar/index";
import Users from "./users.jsx";

const Index = () => {
  return (
    <>
      <NavBar />
      <Row >
        <Col md="4">
          <Button color="info">Create User</Button>{' '}
        </Col>
      </Row>
      <Row >
        <Col md="12">
          <Users />
        </Col>
      </Row>

    </>
  );
};

export default Index;

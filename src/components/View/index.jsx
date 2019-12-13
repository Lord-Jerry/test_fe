import React, { useState } from "react";
import { Col, Row, Button } from "reactstrap";
import NavBar from "../Navbar/index";
import Users from "./users.jsx";

import CreateUser from "../Modal/create-user.jsx"

const Index = () => {
  const [create, setCreate] = useState(false);

  const createModal = () => {
    setCreate(true);
  }

  return (
    <>
      <NavBar />

      <CreateUser
        create={create}
        setCreate={setCreate}
      />
      <Row >
        <Col md="4">
          <Button onClick={createModal} color="info">Create User</Button>{' '}
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

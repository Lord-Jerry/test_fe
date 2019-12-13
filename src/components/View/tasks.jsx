import React, { useState } from "react";
import { Col, Row, Button } from "reactstrap";
import NavBar from "../Navbar/index";
import Tasks from "../Layout/tasks.jsx";

import CreateTask from "../Modal/create-task.jsx";

const Task = () => {
  const [create, setCreate] = useState(false);

  const createModal = () => {
    setCreate(true);
  }

  return (
    <>
      <NavBar />

      <CreateTask
        create={create}
        setCreate={setCreate}
      />
      <Row >
        <Col md="4">
          <Button onClick={createModal} color="info">Create New Task</Button>{' '}
        </Col>
      </Row>
      <Row >
        <Col md="12">
          <Tasks />
        </Col>
      </Row>

    </>
  );
};

export default Task;

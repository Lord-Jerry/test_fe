import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button } from "reactstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

import baseUrl from '../../baseUrl';
import NavBar from "../Navbar/index";
import Tasks from "../Layout/tasks.jsx";

import TaskModal from "../Modal/create-task.jsx";

const Task = () => {
  const params = useParams();

  const [create, setCreate] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [state, setState] = useState('');
  const [description, setDescription] = useState('');

  const { userId } = params;

  const createModal = () => {
    setCreate(true);
  }
  useEffect(() => {
    getUserTasks();
  }, []);

  const CreateTask = async (e) => {
    // e.preventDefault();
    try {
      await axios({
        method: 'post',
        url: `${baseUrl}/create-task`,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        data: {
          userId,
          task,
          state,
          description,
        }
      });

      // update tasks table
      getUserTasks();
      setCreate(false);
    } catch (err) {
      console.log(err.response);
    }
  }

  const getUserTasks = async () => {
    try {
      const response = await axios.get(`${baseUrl}/tasks/${userId}`);
      setTasks(response.data.data.tasks);
      console.log(response)
    } catch (err) {

    }
  }

  return (
    <>
      <NavBar />

      <TaskModal
        create={create}
        setCreate={setCreate}
        setState={setState}
        setTask={setTask}
        setDescription={setDescription}
        action={CreateTask}
      />
      <Container>
        <Row className="create">
          <Col md="4">
            <Button onClick={createModal} color="info">Create New Task</Button>{' '}
          </Col>
        </Row>
        <Row >
          <Col md="12">
            <Tasks
              getUserTasks={getUserTasks}
              tasks={tasks} />
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default Task;

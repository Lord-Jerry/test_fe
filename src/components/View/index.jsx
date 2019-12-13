import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button } from "reactstrap";
import axios from "axios";
import NavBar from "../Navbar/index";
import Users from "../Layout/users.jsx";

import CreateUser from "../Modal/create-user.jsx"
import baseUrl from "../../baseUrl";

const Index = () => {
  const [create, setCreate] = useState(false);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(`${baseUrl}/users`);
      setUsers(response.data.data.allUsers);
      console.log(response)
    } catch (err) {

    }
  }

  const createUser = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: 'post',
        url: `${baseUrl}/create-user`,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        data: {
          name,
        }
      });

      // update users table
      getUsers();
      setCreate(false);
    } catch (err) {
      console.log(err.response);
    }
  }

  const createModal = () => {
    setCreate(true);
  }

  return (
    <>
      <NavBar />

      <CreateUser
        create={create}
        setCreate={setCreate}
        action={createUser}
        setName={setName}
      />
      <Container>
        <Row className="create">
          <Col md="4">
            <Button onClick={createModal} color="info">Create User</Button>{' '}
          </Col>
        </Row>
        <Row >
          <Col md="12">
            <Users users={users} getUsers={getUsers} />
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default Index;

import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  Input
} from 'reactstrap';
import axios from "axios";
import baseUrl from "../../baseUrl"

const EditUser = (props) => {
  const [username, setUsername] = useState('');
  const {
    setModal,
    modal,
    name,
    userId,
    getUsers,
  } = props;

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: 'put',
        url: `${baseUrl}/update-user/${userId}`,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        data: {
          name: username || name,
        },
      });

      // update users table
      getUsers();
      setModal(false);
    } catch (err) {
      console.log(err.response);
    }
  }

  const toggle = () => setModal(!modal);



  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Edit User</ModalHeader>
        <ModalBody>
          <InputGroup>
            <Input
              value={username || name}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username" />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={updateUser}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditUser;

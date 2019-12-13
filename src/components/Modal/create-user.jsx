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

const CreateUser = (props) => {
  const {
    action,
    setCreate,
    create,
  } = props;

  const toggle = () => setCreate(!create);

  return (
    <div>
      <Modal isOpen={create} toggle={toggle} >
        <ModalHeader toggle={toggle}>Create User</ModalHeader>
        <ModalBody>
          <InputGroup>
            <Input placeholder="username" />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={action}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CreateUser;

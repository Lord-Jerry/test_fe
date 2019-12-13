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

const EditUser = (props) => {
  const {
    action,
    setModal,
    modal,
  } = props;

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Edit User</ModalHeader>
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

export default EditUser;

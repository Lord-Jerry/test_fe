import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Comfirm = (props) => {
  const {
    message,
    action,
    setComfirm,
    comfirm,
  } = props;

  const toggle = () => setComfirm(!comfirm);

  return (
    <div>
      <Modal isOpen={comfirm} toggle={toggle} >
        <ModalHeader toggle={toggle}>Comfirm</ModalHeader>
        <ModalBody>
          {message}
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={action}>Yes</Button>{' '}
          <Button color="secondary" onClick={toggle}>No</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Comfirm;
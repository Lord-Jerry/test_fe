import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  Input
} from 'reactstrap';

const CreateTask = (props) => {
  const {
    action,
    setCreate,
    create,
  } = props;

  const toggle = () => setCreate(!create);

  return (
    <div>
      <Modal isOpen={create} toggle={toggle} >
        <ModalHeader toggle={toggle}>Create New Task</ModalHeader>
        <ModalBody>
          <InputGroup>
            <label
              className="form-control-label"
              htmlFor="input-old">
              Task
             </label>
            <Input placeholder="task" />
          </InputGroup>

          <InputGroup>
            <label
              className="form-control-label"
              htmlFor="input-old">
              Description
             </label>
            <Input placeholder="description" />
          </InputGroup>

          <InputGroup>
            <label
              className="form-control-label"
              htmlFor="input-old">
              State
             </label>
            <Input placeholder="state" />
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

export default CreateTask;

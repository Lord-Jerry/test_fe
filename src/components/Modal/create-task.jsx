import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

const CreateTask = (props) => {
  const {
    action,
    setCreate,
    create,
    setState,
    setDescription,
  } = props;

  const toggle = () => setCreate(!create);

  return (
    <div>
      <Modal isOpen={create} toggle={toggle} >
        <ModalHeader toggle={toggle}>Create New Task</ModalHeader>
        <ModalBody>

          <FormGroup>
            <Label for="description">Description</Label>
            <Input onChange={(e) => setDescription(e.target.value)} placeholder="description" />
          </FormGroup>

          <FormGroup>
            <Label for="state">State</Label>
            <Input
              onChange={(e) => setState(e.target.value)}
              type="select"
              name="select"
              id="exampleSelect"
            >
              <option selected disabled>State</option>
              <option value="todo">todo</option>
              <option value="done">done</option>
            </Input>
          </FormGroup>
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

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
import axios from "axios";
import baseUrl from "../../baseUrl";

const EditTask = (props) => {
  const {
    setModal,
    modal,
    description,
    setDescription,
    state,
    setState,
    taskId,
    getUserTasks
  } = props;

  const toggle = () => setModal(!modal);

  const updateTask = async (e) => {
    // e.preventDefault();
    try {
      await axios({
        method: 'put',
        url: `${baseUrl}/update-task/${taskId}`,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        data: {
          state,
          description,
        }
      });

      // update tasks table
      getUserTasks();
      setModal(false);
    } catch (err) {
      console.log(err.response);
    }
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label
              for="description">
              Description
             </Label>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)} placeholder="description" />
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
          <Button color="danger" onClick={updateTask}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditTask;

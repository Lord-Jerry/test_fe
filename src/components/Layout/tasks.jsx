import React, { useState } from "react";
import { Table, Button } from 'reactstrap';
import axios from "axios";

import baseUrl from "../../baseUrl";

import Comfirm from "../Modal/comfirmation.jsx";
import EditTask from "../Modal/edit-task.jsx";

const Tasks = (props) => {
  const [comfirm, setComfirm] = useState(false);
  const [modal, setModal] = useState(false);
  const [taskId, setTaskId] = useState(0);
  const [description, setDescription] = useState('')
  const [state, setState] = useState('');

  const { tasks, getUserTasks } = props;


  const editModal = (e) => {
    const { id, value } = e.target;
    const newValue = value.split(',')
    // activate edit user modal
    setModal(true);
    console.log(e.target.value)

    setTaskId(id);
    setDescription(newValue[0]);
    setState(newValue[1]);
  };

  const deleteTask = async (e) => {
    // e.preventDefault();
    try {
      await axios({
        method: 'delete',
        url: `${baseUrl}/delete-task/${taskId}`,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });

      // update tasks table
      getUserTasks();
      setComfirm(false);
    } catch (err) {
      console.log(err.response);
    }
  }

  const deletePropmt = (e) => {
    // activate delete propmpt
    setComfirm(true);

    setTaskId(e.target.id);
  }

  const listTasks = () => {
    const data = tasks || [];

    return data.map((value, key) => {
      return (
        <tr key={value.id}>
          <th scope="row">{key + 1}</th>
          <td>{value.description}</td>
          <td>{value.state}</td>
          <td>
            <Button
              onClick={editModal}
              size="sm"
              id={value.id}
              value={[value.description, value.state]}
              color="primary">
              Update
                </Button>{' '}
          </td>
          <td>
            <Button
              onClick={deletePropmt}
              size="sm"
              id={value.id}
              color="danger">
              Delete
                </Button>{' '}
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="users">
      <Comfirm
        action={deleteTask}
        comfirm={comfirm}
        setComfirm={setComfirm}
        message="Are You Sure You Want To Delete This Task"
      />

      <EditTask
        getUserTasks={getUserTasks}
        modal={modal}
        setModal={setModal}
        taskId={taskId}
        setTaskId={setTaskId}
        description={description}
        setDescription={setDescription}
        state={state}
        setState={setState}
      />

      <Table className="users" responsive striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>State</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {listTasks()}
        </tbody>
      </Table>
    </div>
  );
}
export default Tasks;

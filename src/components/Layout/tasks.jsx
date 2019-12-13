import React, { useState } from "react";
import { Table, Button } from 'reactstrap';

import Comfirm from "../Modal/comfirmation.jsx";
import EditTask from "../Modal/edit-task.jsx";

const Users = (props) => {
  const [comfirm, setComfirm] = useState(false);
  const [modal, setModal] = useState(false);

  const editModal = () => {
    // activate edit user modal
    setModal(true);
  };

  const deletePropmt = () => {
    // activate delete propmpt
    setComfirm(true);
    console.log(comfirm)
  }

  return (
    <div className="users">
      <Comfirm
        comfirm={comfirm}
        setComfirm={setComfirm}
        message="Are You Sure You Want To Delete This Task"
      />

      <EditTask
        modal={modal}
        setModal={setModal}
      />

      <Table className="users" responsive striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>State</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Learn Scala</td>
            <td>Todo</td>
            <td>
              <Button
                onClick={editModal}
                size="sm"
                color="primary">
                Update
                </Button>{' '}
            </td>
            <td>
              <Button
                onClick={deletePropmt}
                size="sm"
                color="danger">
                Delete
                </Button>{' '}
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Learn BLockchain</td>
            <td>Done</td>
            <td>
              <Button
                onClick={editModal}
                size="sm"
                color="primary">
                Update
                </Button>{' '}
            </td>
            <td>
              <Button
                onClick={deletePropmt}
                size="sm"
                color="danger">
                Delete
                </Button>{' '}
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Learn Compilers</td>
            <td>Todo</td>
            <td><Button onClick={editModal} size="sm" color="primary">Update</Button>{' '}</td>
            <td>
              <Button
                onClick={deletePropmt}
                size="sm"
                color="danger">
                Delete
                </Button>{' '}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default Users;

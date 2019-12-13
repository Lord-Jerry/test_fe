import React, { useState } from "react";
import { Table, Button } from 'reactstrap';
import axios from "axios";

import {
  useHistory
} from "react-router-dom";

import Comfirm from "../Modal/comfirmation.jsx";
import EditUser from "../Modal/edit-user.jsx";
import baseUrl from "../../baseUrl";

const Users = (props) => {
  const history = useHistory();
  const [comfirm, setComfirm] = useState(false);
  const [modal, setModal] = useState(false);

  const [name, setName] = useState('');
  const [userId, setUserId] = useState(0);
  // const [spinner, setSpinner] = useState(false);

  const { users, getUsers } = props;


  const editModal = (e) => {
    // activate edit user modal
    setModal(true);
    setName(e.target.name);
    setUserId(e.target.id);
  };

  const deletePropmt = (e) => {
    // activate delete propmpt
    setComfirm(true);
    setUserId(e.target.id);
    console.log(comfirm)
  }

  const deleteUser = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: 'delete',
        url: `${baseUrl}/delete-user/${userId}`,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });

      // update users table
      getUsers();
      setComfirm(false);
    } catch (err) {
      console.log(err.response);
    }
  }

  const listUsers = () => {
    const data = users || [];

    return data.map((value, key) => {
      return (

        <tr
          key={value.id}>
          <th scope="row">{key + 1}</th>
          <td>{value.name}</td>
          <td>
            <Button
              onClick={() => history.push(`tasks/${value.id}`)}
              size="sm"
              id={value.id}
              color="success">
              View User
                </Button>{' '}
          </td>
          <td>
            <Button
              onClick={editModal}
              name={value.name}
              id={value.id}
              size="sm"
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
        comfirm={comfirm}
        setComfirm={setComfirm}
        message="Are You Sure You Want To Delete This User"
        action={deleteUser}
      />

      <EditUser
        modal={modal}
        setModal={setModal}
        name={name}
        userId={userId}
        getUsers={getUsers}
      />

      <Table className="users" responsive striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <td>View</td>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {listUsers()}
        </tbody>
      </Table>
    </div>
  );
}
export default Users;

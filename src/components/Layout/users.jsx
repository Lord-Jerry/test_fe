import React, { useState, useEffect } from "react";
import { Table, Button } from 'reactstrap';
import axios from "axios";

import Comfirm from "../Modal/comfirmation.jsx";
import EditUser from "../Modal/edit-user.jsx";
import baseUrl from "../../baseUrl";

const Users = (props) => {
  const [comfirm, setComfirm] = useState(false);
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    setSpinner(true);
    try {
      const response = await axios.get(`${baseUrl}/users`);
      setUsers(response.data.data.users);
      setSpinner(false);
    } catch (err) {
      setSpinner(false);
    }
  }

  const editModal = () => {
    // activate edit user modal
    setModal(true);
  };

  const deletePropmt = () => {
    // activate delete propmpt
    setComfirm(true);
    console.log(comfirm)
  }

  const listUsers = () => {
    const data = users || [];

    return data.map((value, key) => {
      return (
        <>
          <tr>
            <th scope="row">1</th>
            <td>{value.name}</td>
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
        </>
      );
    });
  }


  return (
    <div className="users">
      <Comfirm
        comfirm={comfirm}
        setComfirm={setComfirm}
        message="Are You Sure You Want To Delete This User"
      />

      <EditUser
        modal={modal}
        setModal={setModal}
      />

      <Table className="users" responsive striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
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

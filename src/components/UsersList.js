import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

import '../styles/Users.css';  // Import the CSS file


const UsersList = () => {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    (
      async () => {
        const response = await axios.get( 'https://jsonplaceholder.typicode.com/users' );
        setUsers( response.data );
      }
    )();
  },[]);

  return (
    <div className="users-container">
    <h1 className="title">Users List</h1>
    <table className="users-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td><Link to={`/users/userDetails/${user.id}`}>{user.name}</Link></td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }
      </tbody>
    </table>   

  </div>
  )
}
export default UsersList;

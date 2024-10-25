import '../styles/Users.css';  // Import the CSS file
import UsersList from '../components/UsersList';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Users = () => {

  return (
    <>
      <UsersList />
      <Outlet />
    </>
  )
}

export default Users;

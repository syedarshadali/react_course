import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom';

// import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
// import Users from '../pages/Users';
import UsersDetails from '../components/UserDetails';
import Page404 from '../pages/Page404';

const Home = lazy( () => import('../pages/Home') );
const Users = lazy( ()=> import('../pages/Users') );

const AppRoutes = () => {
  return (
    <Routes>  
      <Route path="/" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />

      <Route path="/users" element={<Users/>}>
        <Route path="/users/userDetails/:userId" element={<UsersDetails/>} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default AppRoutes;

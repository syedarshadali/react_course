import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

const Dashboard = () => <h2>Dashboard</h2>;
const Home = () => <h2>Home Page</h2>;
const Login = () => <h2>Login Page</h2>;

const PrivateRoute = ({ children, isAuth }) => {
  /* logic to check if the user is logged in */;
  //...
  
  return isAuth ? children : <Navigate to="/login" />;
};

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
          {isAuthenticated ? 'Log out' : 'Log in'}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuth={isAuthenticated}>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default ProtectedRoute;


import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoggedIn(false);
  };

  useEffect(() => {

    if( loggedIn )
    {
      // Programmatic navigation
      navigate("/dashboard");
    }
    else
    {
      navigate("/logout");
    }

  },[loggedIn]);

  return (
    <div>
      {loggedIn ? (
        <p>You are logged in</p>
      ) : (
        <div>
          <h2>Login Page</h2>
          <button onClick={handleLogin}>Log in</button>
        </div>
      )}
    </div>
  );
};

const Dashboard = () => <h2>Dashboard</h2>;
const Home = () => <h2>Home Page</h2>;
const Logout = () => <h2>Plesse login</h2>;

const NavigateProgramatically = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  </Router>
);

export default NavigateProgramatically;

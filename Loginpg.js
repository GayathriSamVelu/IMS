// Loginpg.js

import React, { useState } from 'react';
import './Loginpg.css';
import { Link, useNavigate } from 'react-router-dom';

const Loginpg = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating a basic login check - Replace this with your actual authentication logic
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      setUsername('');
      setPassword('');
      nav('/home');
      // Redirect to dashboard or perform other actions upon successful login
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  let nav=useNavigate();

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Welcome Back!</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-effect"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-effect"
            />
            <Link to='/home'>
            <button type="submit">Login</button>
            </Link>
          </form>
        <div className="signup-link">
          <p>Don't have an account? </p>
          <Link to='/signup'>
            <button type="submit">Sign up</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Loginpg;
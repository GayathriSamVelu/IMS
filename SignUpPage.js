// SignupPage.js

import React, { useState } from 'react';
import { Link} from 'react-router-dom';

import './SignUpPage.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      alert('Signup Successful!');
      // Redirect to login page or perform other actions after successful signup
    } else {
      setPasswordMatchError(true);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMatchError(false); // Reset password match error on password change
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatchError(false); // Reset password match error on confirm password change
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Create an Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={passwordMatchError ? 'input-error' : ''}
          />
          {passwordMatchError && (
            <p className="error-message">Passwords do not match. Please try again.</p>
          )}
          <button type="submit">Sign Up</button>
          
        <Link to='/'> Already have an account?
            <button className='log'>Login</button>
            </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
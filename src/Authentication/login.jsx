import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./login.css";

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Validate credentials (basic example)
    if (username && password) {
      // On successful login, redirect to home page
      navigate('/home');
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div className="login">
      <h4 style={{color:"white"}}>Login</h4>
      <form onSubmit={handleLogin}>
        <div className="text_area">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="text_input"
          />
        </div>
        <div className="text_area">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text_input"
          />
        </div>
        <input
          type="submit"
          value="LOGIN"
          className="btn"
        />
      </form>
      <Link className="link" to="/forget_email">Forgot Password?</Link>
      <Link className="link" to="/signup">Sign Up</Link>
    </div>
  );
}

export default Signin;
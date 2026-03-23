import React from 'react';
import { Link } from 'react-router-dom';
import "./signup.css";

function Signup() {
  return (
    <div className="login">
      <h4 style={{ color: "white" }}>Signup</h4>
      <form>
        <div className="text_area">
          <input
            type="text"
            id="username"
            name="email"
            defaultValue="Input your email"
            className="text_input"
          />
        </div>
        <div className="text_area">
          <input
            type="text"
            id="username"
            name="Fullname"
            defaultValue="Full Name"
            className="text_input"
          />
        </div>
        <div className="text_area">
          <input
            type="password"
            id="password"
            name="npassword"
            defaultValue="Enter new password"
            className="text_input"
          />
        </div>
        <div className="text_area">
          <input
            type="password"
            id="password"
            name="cpassword"
            defaultValue="Confirm new password"
            className="text_input"
          />
        </div>
        <input
          type="submit"
          value="SIGN UP"
          className="btn"
        />
      </form>
      <Link className="link" to="/">Login</Link>
    </div>
  );
}

export default Signup;
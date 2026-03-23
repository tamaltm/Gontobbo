import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./login.css";

class Signin extends Component {
  render() {
    return (
      <div className="login">
        <h4 style={{color:"white"}}>Login</h4>
        <form>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              defaultValue="username"
              className="text_input"

            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              defaultValue="password"
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
    )
  }
}

export default Signin;
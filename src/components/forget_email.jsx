import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./forget_email.css";

function ForgetEmail() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/forget_pass');
  };

  return (
    <div className="forgetEmail">
      <h4 style={{color:"white"}}>Changing Password</h4>
      <form onSubmit={handleSubmit}>
        <div className="text_area">
          <input
            type="text"
            id="username"
            name="username"
            defaultValue=""
            className="text_input"

          />
        </div>
        <input
          type="submit"
          value="Check Email"
          className="btn"

        />
      </form>
    </div>
  )
}

export default ForgetEmail;
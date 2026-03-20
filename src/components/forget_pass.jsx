import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./forget_email.css";

function ForgetPass() {
  const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();

    // const form = event.target;
    // const nPassword = form.n_password.value;
    // const cPassword = form.c_password.value;

    // if (nPassword !== cPassword) {
    //   alert("Passwords do not match.");
    //   return;
    // }

    // // TODO: call API to update password here
    navigate('/');
  };

  return (
    <div className="forgetEmail">
      <h4 style={{ color: "white" }}>Changing Password</h4>
      <form onSubmit={handleChange}>
        <div className="text_area">
          <input
            type="password"
            id="n_password"
            name="n_password"
            defaultValue=""
            className="text_input"
         //   required
          />
        </div>
        <div className="text_area">
          <input
            type="password"
            id="c_password"
            name="c_password"
            defaultValue=""
            className="text_input"
           // required
          />
        </div>
        <input
          type="submit"
          value="Change Password"
          className="btn"
        />
      </form>
    </div>
  );
}

export default ForgetPass;
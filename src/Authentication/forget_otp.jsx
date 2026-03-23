import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./forget_email.css";

function ForgetOtp() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/forget_pass');
  };
    return (
      <div className="forgetEmail">
        <h4 style={{color:"white"}}>Enter Otp</h4>
        <form onSubmit={handleSubmit}>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter the otp sent to your device"
              className="text_input"

            />
          </div>
          <input
            type="submit"
            value="Verify"
            className="btn"

          />
        </form>

      </div>
    )
  }


export default ForgetOtp;
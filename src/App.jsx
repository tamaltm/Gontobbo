import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from './Authentication/login.jsx';
import Signup from './Authentication/signup.jsx';
import ForgetEmail from './Authentication/forget_email.jsx'
import ForgetPass from './Authentication/forget_pass.jsx'
import ForgetOtp from './Authentication/forget_otp.jsx'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/forget_email" element={<ForgetEmail />} />
      <Route path="/forget_pass" element={<ForgetPass />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget_otp" element={<ForgetOtp />} />
    </Routes>
  );
}

export default App;
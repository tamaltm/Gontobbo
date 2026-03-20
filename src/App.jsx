
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from './components/login.jsx';
import Signup from './components/signup.jsx';
import ForgetEmail from './components/forget_email.jsx'
import ForgetPass from './components/forget_pass.jsx'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/forget_email" element={<ForgetEmail />} />
      <Route path="/forget_pass" element={<ForgetPass />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
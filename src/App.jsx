
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from './components/login.jsx';
import Signup from './components/signup.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
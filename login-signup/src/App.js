import React from 'react'
import './App.css';
import {Home}  from './Components/Home/Home';
import {LoginSignup}  from './Components/LoginSignup/LoginSignup';
import {NotFoundPage}  from './Components/NotFoundPage/NotFoundPage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<LoginSignup/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
    </div>
  );
};

export default App;
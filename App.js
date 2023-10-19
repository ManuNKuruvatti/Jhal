import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux'; // Import useSelector
import LoginForm from './LoginForm';
import UserGrid from './UserGrid';
import Navbar from './Navbar'; 
import Signup from './Signup';
import ResetPassword from './ResetPassword';
import ForgotPassword from './ForgotPassword';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><LoginForm /></>} />
        <Route path="/home" element={<><Navbar /><UserGrid /></>} />
        <Route path="/signup" element={<><Signup /></>} />
        <Route path="/reset" element={<><ForgotPassword/></>} />
        <Route path="/resetpass" element={<><ResetPassword/></>} />
       


      </Routes>
    </BrowserRouter>
  );
}

export default App;

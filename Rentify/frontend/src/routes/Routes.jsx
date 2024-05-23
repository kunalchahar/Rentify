import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../modules/authentication/Login'
import Register from '../modules/authentication/Register';
import UserNavBar from '../modules/userHome/UserNavBar';

function App() {
   return (
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/usernavbar" element={<UserNavBar />} />
         </Routes>

   );
}

export default App;
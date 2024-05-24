import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserNavBar from '../modules/userHome/UserNavBar';

function UserRoutes() {
   return (
         <Routes>
            <Route path="/usernavbar" element={<UserNavBar />} />
         </Routes>

   );
}

export default UserRoutes;
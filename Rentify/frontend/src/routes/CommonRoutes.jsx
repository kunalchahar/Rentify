import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../modules/authentication/Login";
import Register from "../modules/authentication/Register";

const CommonRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default CommonRoutes;

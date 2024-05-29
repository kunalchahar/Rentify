import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Login from "../modules/authentication/Login";
import Signup from "../modules/authentication/Register";
import ProtectedSellerRoutes from "../routes/ProtectedSellerRoutes"; // Ensure this is the correct import path
import ProtectedBuyerRoutes from "../routes/ProtectedBuyerRoutes";
import SellerHome from "../modules/Seller/SellerHome";
import HomePage from "../modules/HomePage/HomePage";
import PageNotFound from "../components/PageNotFound";
import AddPropertyForm from "../modules/Seller/AddPropertyForm";
import AllProperties from "../modules/Seller/AllProperties";
import BuyerHomePage from "../modules/Buyer/BuyerHomePage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Common Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Buyer Routes */}
      <Route element={<ProtectedBuyerRoutes />}>
        <Route path="/buyer" element={<BuyerHomePage/>} >

          </Route>
        </Route>
  

      {/* Seller Routes */}
      <Route element={<ProtectedSellerRoutes />}>
        <Route path="/seller" element={<SellerHome />}>
          <Route path="addProperty" element={<AddPropertyForm />} />
          <Route path="properties" element={<AllProperties />} />
          {/* Add other seller-specific routes here */}
        </Route>
      </Route>

      {/* Redirect any unknown paths to a 404 page */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;

import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../modules/authentication/Login";
import Signup from "../modules/authentication/Register";
import BuyerRoutes from "../routes/ProtectedBuyerRoutes";
import ProtectedSellerRoutes from "../routes/ProtectedSellerRoutes"; // Ensure this is the correct import path
import SellerHome from "../modules/Broker/SellerHome";
import HomePage from "../modules/HomePage/HomePage";
import PageNotFound from "../components/PageNotFound";
import AddPropertyForm from "../modules/Broker/AddPropertyForm";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Common Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Buyer Routes */}
      <Route path="/buyer/*" element={<BuyerRoutes />}>
        {/* Add other buyer-specific routes here */}
      </Route>

      {/* Seller Routes */}
      <Route element={<ProtectedSellerRoutes />}>
        <Route path="/seller" element={<SellerHome />}>
          <Route path="addProperty" element={<AddPropertyForm />} />
          {/* <Route path="properties" element={<MyProperties />} /> */}
          {/* Add other seller-specific routes here */}
        </Route>
      </Route>

      {/* Redirect any unknown paths to a 404 page */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;

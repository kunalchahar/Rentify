import React from "react";
import SellerSidebar from "./SellerSidebar";
import { Outlet } from "react-router-dom";

const SellerHome = () => {
  return (
    <div className="flex">
      <div className="w-1/4">
        <SellerSidebar />
      </div>
      <div className="w-3/4 max-h-screen bg-gray-50 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default SellerHome;

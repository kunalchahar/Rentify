import React from "react";
import BrokerSidebar from "./BrokerSidebar";
import DataTable from "../../components/DataTable";
import BrokerRoutes from "../../routes/BrokerRoutes";

const BrokerHomePage = () => {
  return (
    <div className="flex justify-between items-center">
      <BrokerSidebar />
      <div className="w-[calc(100vw-16rem)] max-h-screen bg-gray-50">
        <BrokerRoutes />
      </div>
    </div>
  );
};

export default BrokerHomePage;

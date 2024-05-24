import React, { useState } from "react";
import Routes from "./routes/UserRoutes";
import BrokerSidebar from "./modules/Broker/BrokerSidebar";
import BrokerRoutes from "./routes/BrokerRoutes";
import UserRoutes from "./routes/UserRoutes";
import CommonRoutes from "./routes/CommonRoutes";
import BrokerHomePage from "./modules/Broker/BrokerHomePage";

const App = () => {
  const [userType, setUserType] = useState("common");
  return (
    <div className=" max-h-screen">
      {userType === "seller" && (
        <div className="flex justify-between items-center">
          <BrokerSidebar />
          <div className="w-[calc(100vw-16rem)] max-h-screen bg-gray-50">
            <BrokerRoutes />
          </div>
        </div>
        // <BrokerHomePage/>
      )}
      {
        userType==="buyer" && (
          <UserRoutes/>
        )
      }
      {
        userType==="common" && (
          <CommonRoutes/>
        )
      }
      
    </div>
  );
};

export default App;

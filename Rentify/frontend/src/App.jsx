import React, { useEffect, useState } from "react";
import UserRoutes from "./routes/Routes";
import HomeNavbar from "./modules/HomePage/Navbar";

const App = () => {

  return (
    <div className="h-screen max-h-screen w-screen max-w-screen flex flex-col">
      <HomeNavbar />
      <div className="h-[90vh]">
        <UserRoutes />
      </div>
    </div>
  );
};

export default App;

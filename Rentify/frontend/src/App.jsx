import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserRoutes from "./routes/Routes";

const App = () => {
  const [userType, setUserType] = useState("buyer");
  const {userInfo} = useSelector((state) => state.auth);

  // useEffect(()=>{
  //   setUserType(userInfo.userType);
  // },[userType])


  return (
    <div className=" max-h-screen">
      <UserRoutes/>
      
    </div>
  );
};

export default App;

import React, { useEffect } from "react";
import SellerSidebar from "./SellerSidebar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPropertyBySeller } from "../../StoreSlices/propertiesSlice";
import Loader from "../../components/Loader"

const SellerHome = () => {

  const {loading, properties} = useSelector((state)=>state.property);
  const {userInfo} = useSelector((state)=>state.auth);
  const sellerId = userInfo._id;
  const dispatch = useDispatch();




  useEffect(()=>{
    dispatch(getPropertyBySeller(sellerId));
  }, [])

  if(loading){
    return <Loader/>
  }
  return (
    <div className="flex w-screen max-w-screen">
      <div className="py-4 bg-gray-50">
        <SellerSidebar />
      </div>
      <div className="w-full h-screen max-h-screen bg-gray-50 py-4 pl-4">
        <Outlet />
      </div>
    </div>
  );
};

// w-[calc(100vw-16rem)]

export default SellerHome;

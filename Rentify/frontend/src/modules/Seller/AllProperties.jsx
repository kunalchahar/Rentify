import React from "react";
import DataTable from "../../components/DataTable";
import { useDispatch, useSelector } from "react-redux";

const AllProperties = () => {
  const { properties } = useSelector((state) => state.property);
  
  return (
    <>
      <DataTable properties={properties} />
    </>
  );
};

export default AllProperties;

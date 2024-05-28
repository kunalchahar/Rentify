import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className="loader flex items-center justify-center min-h-screen">
      <ClipLoader size={80} />
    </div>
  );
};

export default Loader;

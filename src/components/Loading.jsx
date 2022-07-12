import React from "react";
import { DotLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center">
      <DotLoader color="#e44232" size={50} speedMultiplier={1} />
    </div>
  );
};

export default Loading;

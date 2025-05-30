/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Handlers from "../../Services/Toolkit/Handlers";

const LineDesign = ({ lineWidth }) => {
  const { darkMode } = Handlers();

  return (
    <div
      className="relative flex items-center justify-center my-[0.2rem]"
      style={{ width: lineWidth }}
    >
      <i
        className={`fa-solid fa-bookmark ${
          darkMode ? "text-[orange]" : "text-[crimson]"
        } text-[2rem]`}
      />
      <div
        className={`h-[1px] w-full ${
          darkMode ? "bg-[orange]" : "bg-[crimson]"
        }`}
      />
      <i
        className={`fa-solid fa-bookmark ${
          darkMode ? "text-[orange]" : "text-[crimson]"
        } text-[2rem]`}
      />
    </div>
  );
};

export default LineDesign;

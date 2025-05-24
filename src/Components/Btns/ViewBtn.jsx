/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Handlers from "../../Services/Toolkit/Handlers";

const ViewBtn = ({ btnTitle, btnFunc, btnClass, btnIcon }) => {
  const { darkMode } = Handlers();

  return (
    <>
      <Link
        to={btnFunc}
        onClick={btnFunc}
        className={`w-auto px-[2rem] ${
          btnClass === "navBtn" ? "py-[0.5rem]" : "py-[1rem]"
        } rounded-xl ${
          darkMode ? "bg-[#414141] text-white" : "bg-[crimson] text-white"
        } text-[2rem] font-normal transition-all duration-[0.2s] ease-in-out 
        cursor-pointer hover:opacity-[0.8]`}
      >
        {btnTitle} &nbsp;{btnIcon}
      </Link>
    </>
  );
};

export default ViewBtn;

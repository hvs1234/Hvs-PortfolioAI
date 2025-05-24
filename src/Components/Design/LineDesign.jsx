/* eslint-disable no-unused-vars */
import React from "react";
import Handlers from "../../Services/Toolkit/Handlers";

const LineDesign = () => {
  const { darkMode } = Handlers();

  return (
    <>
      <div
        className={`w-full relative object-cover flex items-center my-[0.2rem]`}
      >
        <i
          className={`fa-solid fa-bookmark ${
            darkMode ? "text-[orange]" : "text-[crimson]"
          } text-[2rem]`}
        />
        <div
          className={`${
            darkMode ? "bg-[orange]" : "bg-[crimson]"
          } h-[1px] w-full`}
        ></div>
        <i
          className={`fa-solid fa-bookmark ${
            darkMode ? "text-[orange]" : "text-[crimson]"
          } text-[2rem]`}
        />
      </div>
    </>
  );
};

export default LineDesign;

/* eslint-disable no-unused-vars */
import React from "react";
import Handlers from "../../Services/Toolkit/Handlers";
import ProgressCard from "../../Components/Card/ProgressCard";
import progressTechData from "../../Services/Data/progressTechData";
import LineDesign from "../../Components/Design/LineDesign";

const ProgressView = () => {
  const { darkMode, progressColorDark, progressColorLight, getSectionRef } =
    Handlers();

  return (
    <>
      <div
        ref={getSectionRef("techProgress")}
        className={`py-[9rem] px-[20rem] w-full relative object-cover max-xl:px-[5rem] max-md:px-[2rem] flex flex-col gap-[2rem] justify-center items-center text-center ${
          darkMode ? "bg-[#292929]" : "bg-[#f9f9f9]"
        }`}
      >
        <h2
          className={`text-[4rem] max-md:text-[3rem] font-cinzel ${
            darkMode ? "text-[cyan]" : "text-[var(--text-primary)]"
          }`}
        >
          Build Track &nbsp;<i className="fa-solid fa-code"/>
        </h2>
        {/* <LineDesign lineWidth={"60%"}/> */}
        <div
          className={`grid grid-cols-6 gap-[6rem] my-[4rem] justify-center w-full max-lg:grid-cols-4 max-sm:grid-cols-2 overflow-y-auto max-h-[500px] no-scrollbar`}
        >
          <ProgressCard
            progressCardData={progressTechData}
            progressColor={darkMode ? progressColorLight : progressColorDark}
            progressTrailColor={darkMode ? "#212121" : "#f2f2f2"}
            sectionName={"techProgress"}
          />
        </div>
        <h2
          className={`text-[1.6rem] mt-[2rem] font-cinzel ${
            darkMode ? "text-[orange]" : "text-[crimson]"
          }`}
        >
          Scroll here to view more
        </h2>
      </div>
    </>
  );
};

export default ProgressView;

/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import AnimateLogos from "../../Components/Card/AnimateLogos";
import AnimateTechLogoData from "../../Services/Data/AnimateTechLogoData";
import Handlers from "../../Services/Toolkit/Handlers";
import LineDesign from "../../Components/Design/LineDesign";

const TechUsed = () => {
  const { getSectionRef, darkMode } = Handlers();

  return (
    <>
      <div
        ref={getSectionRef("techUsed")}
        className={`py-[9rem] px-[10rem] max-xl:px-[5rem] max-md:px-[2rem] w-full object-cover relative flex flex-col gap-[2rem] justify-center items-center text-center ${
          darkMode ? "bg-[#212121]" : "bg-white"
        }`}
      >
        <h2
          className={`text-[4rem] max-md:text-[3rem] font-cinzel ${
            darkMode ? "text-[cyan]" : "text-[var(--text-primary)]"
          }`}
        >
          Tech Used &nbsp;
          <i className="fa-solid fa-microchip" />
        </h2>
        {/* <LineDesign lineWidth={"60%"} /> */}
        <div
          className={`flex items-center grow-0 shrink-0 w-full my-[4rem] gap-[8rem] overflow-x-auto no-scrollbar px-[10rem] max-xl:px-[5rem] max-md:px-[2rem]`}
        >
          <AnimateLogos
            animateLogoData={AnimateTechLogoData}
            sectionName={"techUsed"}
            logowidth={120}
          />
        </div>
        {/* <div className="flex overflow-hidden w-full gap-[8rem]">
          <div
            aria-hidden="true"
            className={`flex items-center grow-0 shrink-0 w-screen my-[4rem] gap-[8rem] overflow-x-auto no-scrollbar animate-scroll-left`}
          >
            <AnimateLogos
              animateLogoData={AnimateTechLogoData}
              sectionName={"techUsed"}
            />
          </div>
        </div> */}
        <h2
          className={`text-[1.6rem] mt-[2rem] font-cinzel ${
            darkMode ? "text-[orange]" : "text-[crimson]"
          }`}
        >
          Scroll left/right here to view more
        </h2>
      </div>
    </>
  );
};

export default TechUsed;

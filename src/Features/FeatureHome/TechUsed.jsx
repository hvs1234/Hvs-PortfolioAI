/* eslint-disable no-unused-vars */
import React from "react";
import AnimateLogos from "../../Components/Card/AnimateLogos";
import AnimateTechLogoData from "../../Services/Data/AnimateTechLogoData";
import Handlers from "../../Services/Toolkit/Handlers";

const TechUsed = () => {
  const { getSectionRef, darkMode } = Handlers();

  return (
    <>
      <div
        ref={getSectionRef("techUsed")}
        className={`py-[9rem] px-[20rem] max-xl:px-[5rem] max-md:px-[2rem] w-full object-cover relative ${
          darkMode ? "bg-[#212121]" : "bg-white"
        }`}
      >
        <AnimateLogos
          animateLogoData={AnimateTechLogoData}
          sectionName={"techUsed"}
        />
      </div>
    </>
  );
};

export default TechUsed;

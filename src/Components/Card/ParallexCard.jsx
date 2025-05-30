/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Handlers from "../../Services/Toolkit/Handlers";
import ViewBtn from "../Btns/ViewBtn";
import AnimateLogos from "./AnimateLogos";

const ParallexCard = ({
  bgMedia,
  bgVideo,
  videoView,
  title,
  desc,
  btnText,
  viewTo,
  viewName,
  animateViewData,
  sectionName,
}) => {
  const { darkMode, handleNavigation, getSectionRef } = Handlers();

  return (
    <>
      <div
        ref={getSectionRef(sectionName)}
        className={`py-[9rem] px-[20rem] w-full h-[60vh] max-md:h-full relative object-cover bg-fixed bg-center bg-cover max-md:px-[5rem]`}
        style={{ backgroundImage: `url(${bgMedia})` }}
      >
        {videoView === true && (
          <video
            src={bgVideo}
            autoPlay
            muted
            loop
            className={`absolute top-0 left-0 w-full h-full object-cover`}
          ></video>
        )}
        <div
          className={`absolute top-0 left-0 w-full h-full bg-black opacity-[0.7]`}
        ></div>
        <div
          className={`relative w-full h-full flex flex-col gap-[2rem] justify-center items-center text-center`}
        >
          <h2
            className={`text-[4rem] max-md:text-[3rem] font-cinzel text-white`}
          >
            {title}
          </h2>
          <p className={`text-[2rem] font-normal text-[#d2d2d2]`}>{desc}</p>
          <div
            className={`grid grid-cols-4 gap-[12rem] my-[2rem] max-md:gap-[6rem]`}
          >
            <AnimateLogos
              animateLogoData={animateViewData}
              sectionName={sectionName}
              logowidth={100}
            />
          </div>
          <div className={`w-auto flex justify-center items-center mt-[1rem]`}>
            <ViewBtn
              btnTitle={btnText}
              btnView={viewTo}
              btnFunc={() => {
                handleNavigation(viewTo, viewName);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ParallexCard;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Handlers from "../../Services/Toolkit/Handlers";
import ViewBtn from "../Btns/ViewBtn";

const ParallexCard = ({
  bgMedia,
  bgVideo,
  videoView,
  title,
  desc,
  btnText,
  viewTo,
}) => {
  const { darkMode } = Handlers();

  return (
    <>
      <div
        className={`py-[9rem] px-[20rem] w-full relative object-cover bg-fixed bg-[url(${bgMedia})] bg-center bg-cover`}
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
          className={`absolute top-0 left-0 w-full h-full bg-[var(--bg-primary)] opacity-[0.5]`}
        ></div>
        <div
          className={`relative w-full flex flex-col gap-[1rem] justify-center items-center text-center`}
        >
          <h2
            className={`text-[4rem] font-cinzel ${
              darkMode ? "text-[cyan]" : "text-[var(--text-primary)]"
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-[2rem] font-normal ${
              darkMode ? "text-white" : "text-[#212121]"
            }`}
          >
            {desc}
          </p>
          <div className={`w-auto flex justify-center items-center`}>
            <ViewBtn btnTitle={btnText} btnView={viewTo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ParallexCard;

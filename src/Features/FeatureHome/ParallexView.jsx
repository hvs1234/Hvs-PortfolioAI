/* eslint-disable no-unused-vars */
import React from "react";
import ParallexCard from "../../Components/Card/ParallexCard";
import AnimateParallexTechLogoData from "../../Services/Data/AnimateParallexTechLogoData";

const ParallexView = () => {
  return (
    <>
      <ParallexCard
        bgVideo={"/Media/bannerVideo1.mp4"}
        title={"As Engineer Visionary"}
        desc={
          "Designing seamless, scalable, and smart interfaces. Building future-ready apps with precision."
        }
        videoView={true}
        btnText={"View Career"}
        viewTo={"/"}
        viewName={"Career"}
        animateViewData={AnimateParallexTechLogoData}
        sectionName={"homeParallexView"}
      />
    </>
  );
};

export default ParallexView;

/* eslint-disable no-unused-vars */
import React from "react";
import Handlers from "../../Services/Toolkit/Handlers";
import ServiceCard from "../../Components/Card/ServiceCard";
import ServiceHomeData from "../../Services/Data/ServiceHomeData";
import LineDesign from "../../Components/Design/LineDesign";

const ServiceView = () => {
  const { darkMode, getSectionRef } = Handlers();

  return (
    <>
      <div
        className={`py-[9rem] px-[20rem] w-full relative object-cover max-2xl:px-[10rem] max-xl:px-[2rem] ${
          darkMode ? "bg-[#212121]" : "bg-white"
        } flex flex-col justify-center items-center text-center gap-[2rem]`}
      >
        <div
          className={`flex flex-col gap-[1rem] w-full justify-center items-center text-center`}
        >
          <h2
            className={`text-[4rem] max-md:text-[3rem] font-cinzel ${
              darkMode ? "text-[cyan]" : "text-[var(--text-primary)]"
            }`}
          >
            Our Services &nbsp;
            <i className="fa-solid fa-code-compare" />
          </h2>
        </div>
        <LineDesign lineWidth={"70%"} />
        <div
          ref={getSectionRef("serviceViewHome")}
          className={`mt-[3rem] grid grid-cols-3 ml-auto mr-auto gap-[4rem] max-lg:grid-cols-1`}
        >
          <ServiceCard
            serviceCardData={ServiceHomeData}
            sectionName={"serviceViewHome"}
            btnText={"Know More"}
            visitTo={"/"}
            visitName={"Services"}
          />
        </div>
      </div>
    </>
  );
};

export default ServiceView;

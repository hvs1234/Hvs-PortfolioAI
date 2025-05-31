/* eslint-disable no-unused-vars */
import React from "react";
import Handlers from "../../Services/Toolkit/Handlers";
import LineDesign from "../../Components/Design/LineDesign";
import ServiceCard from "../../Components/Card/ServiceCard";
import ServiceMainData from "../../Services/Data/ServiceMainData";

const ServiceMain = () => {
  const { darkMode, getSectionRef } = Handlers();

  return (
    <>
      <div
        className={`pt-[12rem] pb-[9rem] max-lg:pt-[9rem] px-[20rem] max-xl:px-[5rem] max-md:px-[2rem] relative w-full object-cover ${
          darkMode ? "bg-[#212121]" : "bg-white"
        } flex flex-col gap-[2rem] w-full justify-center items-center text-center`}
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
          ref={getSectionRef("serviceViewMain")}
          className={`mt-[3rem] grid grid-cols-3 ml-auto mr-auto gap-[4rem] max-lg:grid-cols-1`}
        >
          <ServiceCard
            serviceCardData={ServiceMainData}
            sectionName={"serviceViewMain"}
            btnText={"Read More"}
            popupView={true}
          />
        </div>
      </div>
    </>
  );
};

export default ServiceMain;

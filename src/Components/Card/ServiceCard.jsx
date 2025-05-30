/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Handlers from "../../Services/Toolkit/Handlers";
import ViewBtn from "../Btns/ViewBtn";

const ServiceCard = ({
  serviceCardData,
  sectionName,
  btnText,
  visitTo,
  visitName,
}) => {
  const { darkMode, animate, handleNavigation } = Handlers();

  return (
    <>
      {serviceCardData.map((ele, index) => {
        return (
          <div
            className={`${
              darkMode ? "bg-[#292929]" : "bg-[#f9f9f9]"
            } flex flex-col w-auto rounded-xl shadow-md border-[1px] ${
              darkMode
                ? "border-transparent shadow-[#414141]"
                : "border-[#d2d2d2]"
            } transition-all 
            duration-[0.5s] ease-in-out transform ${
              animate[sectionName]
                ? "translate-y-0 opacity-100"
                : "translate-y-[100px] opacity-0"
            }`}
            key={ele?.id}
            style={{ transitionDelay: `${index * 0.4}s` }}
          >
            <div
              className={`overflow-hidden w-auto h-[320px] max-lg:h-[250px] rounded-t-xl`}
            >
              <img
                src={ele?.img}
                alt="img"
                loading="lazy"
                className="w-full h-full object-cover rounded-t-xl transition-all duration-[0.5s] ease-in-out hover:scale-[1.5]"
              />
            </div>
            <div
              className={`flex flex-col h-auto w-full gap-[1rem] px-[4rem] py-[4rem] max-lg:px-[2rem] max-lg:py-[2rem] items-center justify-start text-center`}
            >
              <h2
                className={`text-[3rem] font-cinzel ${
                  darkMode ? "text-[cyan]" : "text-[var(--text-primary)]"
                }`}
              >
                {ele?.title}
              </h2>
              <p
                className={`text-[2rem] font-normal ${
                  darkMode ? "text-white" : "text-[#414141]"
                }`}
              >
                {ele?.desc}
              </p>
              <div
                className={`flex justify-center items-center w-auto mt-[2rem]`}
              >
                <ViewBtn
                  btnTitle={btnText}
                  btnFunc={() => {
                    handleNavigation(visitTo, visitName);
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ServiceCard;

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
  popupView,
  serviceBtnFunc,
}) => {
  const {
    darkMode,
    animate,
    isVisible,
    showPopup,
    selectedService,
    handleOpenServicePopup,
    handleCloseServicePopup,
  } = Handlers();

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
            duration-[0.5s] ease-in-out transform relative ${
              animate[sectionName]
                ? "translate-y-0 opacity-100"
                : "translate-y-[100px] opacity-0"
            }`}
            key={ele?.id}
            style={{ transitionDelay: `${index * 0.4}s` }}
          >
            <div
              className={`absolute top-[-1rem] right-[-1rem] rounded-full px-[1.5rem] py-[0.5rem] ${
                darkMode ? "bg-[darkgreen]" : "bg-[crimson]"
              } z-[200]`}
            >
              <p className={`text-[2.2rem] font-normal text-white`}>
                {ele?.id}
              </p>
            </div>
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
                className={`text-[2rem] font-normal line-clamp-3 ${
                  darkMode ? "text-white" : "text-[#414141]"
                }`}
              >
                {ele?.desc}
              </p>
              <div
                className={`flex justify-center items-center w-auto mt-[2rem]`}
              >
                {popupView === true ? (
                  <ViewBtn
                    btnTitle={btnText}
                    btnFunc={() => handleOpenServicePopup(ele)}
                  />
                ) : (
                  <ViewBtn btnTitle={btnText} btnFunc={serviceBtnFunc} />
                )}
              </div>
            </div>
          </div>
        );
      })}

      {showPopup && (
        <div
          className={`fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-transparent z-[200] transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`${
              darkMode
                ? "bg-[#212121] border-[#414141]"
                : "bg-white border-[#d2d2d2]"
            } rounded-2xl px-[4rem] py-[2rem] w-[900px] max-lg:w-full max-w-full border-[1px] transition-transform duration-300 ${
              isVisible ? "scale-100" : "scale-90"
            }`}
          >
            <h2 className="text-[3rem] font-semibold mb-[2rem]">
              {selectedService?.title}
            </h2>
            <ViewBtn btnTitle={"Close"} btnFunc={handleCloseServicePopup} />
          </div>  
        </div>
      )}
    </>
  );
};

export default ServiceCard;

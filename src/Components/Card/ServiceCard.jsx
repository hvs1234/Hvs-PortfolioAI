/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Handlers from "../../Services/Toolkit/Handlers";
import ViewBtn from "../Btns/ViewBtn";
import ProgressCard from "./ProgressCard";
import ProgressServiceTechData from "../../Services/Data/progressServiceTechData";

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
    progressColorDark,
    progressColorLight,
    getSectionRef,
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
          className={`fixed inset-0 flex items-center justify-center backdrop-blur-md bg-transparent z-[999] transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            ref={getSectionRef("serviceProgress")}
            className={`relative ${
              darkMode
                ? "bg-[#212121] border-[#414141]"
                : "bg-white border-[#d2d2d2]"
            } rounded-2xl max-md:rounded-none px-[3rem] py-[3rem] w-[1500px] h-auto max-md:h-full overflow-y-auto no-scrollbar max-lg:w-full max-w-full border-[1px] transition-transform duration-300 max-md:px-[2rem] max-md:py-[2rem] ${
              isVisible ? "scale-100" : "scale-90"
            }`}
          >
            <div
              onClick={handleCloseServicePopup}
              className={`absolute top-[1rem] right-[1rem] cursor-pointer rounded-full border-[1px] 
              px-[1rem] py-[0.8rem] ${
                darkMode
                  ? "bg-[darkgreen] border-[grey]"
                  : "bg-[crimson] border-[#d2d2d2]"
              }`}
            >
              <i className={`fa-solid fa-xmark text-white text-[2rem]`} />
            </div>
            <div
              className={`grid grid-cols-2 gap-[4rem] w-full justify-center max-md:grid-cols-1`}
            >
              <div
                className={`flex flex-col w-auto justify-start items-start gap-[1rem]`}
              >
                <h2
                  className={`text-[2.2rem] font-cinzel ${
                    darkMode ? "text-[cyan]" : "text-[var(--text-primary)]"
                  }`}
                >
                  {selectedService?.title} &nbsp;
                  <i className={`text-[2.5rem] ${selectedService?.icon}`} />
                </h2>
                <p
                  className={`text-[2rem] font-normal text-justify ${
                    darkMode ? "text-white" : "text-[#212121]"
                  }`}
                >
                  {selectedService?.descMore}
                </p>
              </div>
              <div
                className={`flex items-center justify-center w-auto h-auto rounded-xl`}
              >
                <img
                  src={selectedService?.img}
                  alt="img"
                  className="w-full h-[360px] object-cover rounded-xl"
                />
              </div>
            </div>
            <div
              className={`grid grid-cols-4 gap-[4rem] w-full justify-center mt-[4rem] max-sm:grid-cols-2`}
            >
              <ProgressCard
                progressCardData={ProgressServiceTechData}
                progressColor={
                  darkMode ? progressColorLight : progressColorDark
                }
                progressTrailColor={darkMode ? "#212121" : "#f2f2f2"}
                sectionName={sectionName}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;

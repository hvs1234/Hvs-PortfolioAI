/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Handlers from "../../Services/Toolkit/Handlers";

const AnimateLogos = ({ animateLogoData, sectionName }) => {
  const { animate } = Handlers();

  return (
    <>
      {animateLogoData.map((ele, index) => {
        return (
          <img
            key={ele?.id}
            src={ele?.imgSrc}
            className={`ml-auto mr-auto transition-all 
            duration-[0.5s] ease-in-out transform ${
              animate[sectionName]
                ? "translate-y-0 opacity-100"
                : "translate-y-[100px] opacity-0"
            }`}
            alt="logos"
            width={120}
            loading="lazy"
            style={{ transitionDelay: `${index * 0.2}s` }}
          />
        );
      })}
    </>
  );
};

export default AnimateLogos;

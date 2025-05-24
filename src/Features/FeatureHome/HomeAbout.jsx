/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import LineDesign from "../../Components/Design/LineDesign";
import ViewBtn from "../../Components/Btns/ViewBtn";
import Handlers from "../../Services/Toolkit/Handlers";

const HomeAbout = () => {
  const { animate, getSectionRef, darkMode } = Handlers();

  return (
    <>
      <div
        className={`about-section py-[6rem] px-[20rem] w-full object-cover max-xl:px-[5rem] max-md:px-[2rem] ${
          darkMode ? "bg-[#292929]" : "bg-[#f9f9f9]"
        }`}
      >
        <div
          className={`grid grid-cols-2 gap-[6rem] w-full justify-center max-md:grid-cols-1`}
        >
          <div
            ref={getSectionRef("homeAboutData")}
            className={`flex flex-col gap-[1rem] w-full justify-center transform transition-all duration-[2s] ${
              animate["homeAboutData"]
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100px] opacity-0"
            }`}
          >
            <h2
              className={`text-[4rem] max-md:text-center max-md:text-[3rem] font-cinzel ${
                darkMode ? "text-[cyan]" : "text-[var(--text-primary)]"
              }`}
            >
              About Me &nbsp;
              <i
                className={`fa-regular fa-face-laugh-wink ${
                  darkMode ? "text-[cyan]" : "text-[var(--text-primary)]"
                }`}
              ></i>
            </h2>
            <LineDesign />
            <p
              className={`text-[2rem] font-normal ${
                darkMode ? "text-white" : "text-[#212121]"
              } text-justify`}
            >
              My name is Harshvardhan Sharma. I belongs to Uttarakhand, India. I
              have completed my schooling from Kendriya Vidyalaya Ordance
              Factory Dehradun. After that I pursued B.Tech in CSE from Graphic
              Era Hill University Dehradun Campus. If I`m talking about my
              skills and experience, so I have good knowledge in HTML, CSS,
              Javascript, React+VITE, Tailwind CSS, Git, Github, Python,
              POSTMAN. I have 1 Year experience in React
              Development. Currently I am working at PharynxAI Software Tech. as
              a Software Engineer. Talking about my skills, so I love to
              play football and PC games
            </p>
            <div
              className={`w-full flex justify-start max-md:justify-center mr-auto mt-[2rem]`}
            >
              <ViewBtn btnTitle={"Know my projects"} />
            </div>
          </div>
          <div
            ref={getSectionRef("homeAboutImg")}
            className={`flex items-center justify-center w-auto h-auto ml-auto mr-auto rounded-xl transform transition-all duration-[2s] ${
              animate["homeAboutImg"]
                ? "translate-y-0 opacity-100"
                : "translate-y-[100px] opacity-0"
            }`}
          >
            <img
              src="/Media/coder-man1.gif"
              alt="gif"
              loading="lazy"
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;

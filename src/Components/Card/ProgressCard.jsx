/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Progress } from "antd";
import React from "react";
import Handlers from "../../Services/Toolkit/Handlers";

const ProgressCard = ({
  progressCardData,
  progressColor,
  progressTrailColor,
  sectionName,
}) => {
  const { darkMode, animate } = Handlers();

  return (
    <>
      {progressCardData.map((ele, index) => {
        return (
          <div
            className={`flex flex-col gap-[2rem] items-center justify-center text-center ml-auto mr-auto transition-all 
            duration-[0.5s] ease-in-out transform ${
              animate[sectionName]
                ? "translate-y-0 opacity-100"
                : "translate-y-[100px] opacity-0"
            }`}
            key={ele?.id}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <Progress
              key={ele?.id}
              type={ele?.progressType}
              percent={ele?.progressPercent}
              strokeColor={progressColor}
              trailColor={progressTrailColor}
              width={150}
              className={`${
                darkMode ? "percent-text-orange" : "percent-text-crimson"
              }`}
            />
            <h2
              className={`text-[2rem] font-cinzel ${
                darkMode ? "text-[cyan]" : "text-[var(--text-primary)]"
              }`}
            >
              {ele?.progressName}
            </h2>
          </div>
        );
      })}
    </>
  );
};

export default ProgressCard;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { CountUp } from "countup.js";
import PropTypes from "prop-types";
import Handlers from "../../Services/Toolkit/Handlers";

const AnimateCounterCard = ({ animateCounterCardData }) => {
  const { darkMode } = Handlers();

  const AnimatedCounter = ({ id, end }) => {
    const counterRef = useRef(null);
    useEffect(() => {
      const counter = new CountUp(id, end, {
        suffix: "+",
      });
      if (!counter.error) {
        counter.start();
      } else {
        console.error(counter.error);
      }
    }, [id, end]);

    return (
      <h3
        id={id}
        ref={counterRef}
        className={`counter-numbers text-[3rem] ${
          darkMode ? "text-[cyan]" : "text-[var(--text-primary)]"
        }`}
      >
        {end}+
      </h3>
    );
  };
  AnimatedCounter.propTypes = {
    id: PropTypes.string.isRequired,
    end: PropTypes.number.isRequired,
  };

  return (
    <>
      {animateCounterCardData.map((ele) => {
        return (
          <div
            key={ele?.id}
            className="counter-numbers flex flex-col justify-center items-center gap-[0rem]"
          >
            <AnimatedCounter id={ele?.name} end={ele?.counterEnd} />
            <p
              className={`text-[2rem] font-normal ${
                darkMode ? "text-white" : "text-[#212121]"
              }`}
            >
              {ele?.title}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default AnimateCounterCard;

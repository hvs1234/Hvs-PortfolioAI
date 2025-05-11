/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import pic from "/Media/pic1.jpg";
import Typed from "typed.js";
import { CountUp } from "countup.js";
import PropTypes from "prop-types";
import AnimateCounterCard from "../../Components/Card/AnimateCounterCard";
import HeroAnimateCounterData from "../../Services/Data/HeroAnimateCounterData";
import ViewBtn from "../../Components/Btns/ViewBtn";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    var type = new Typed(".auto-type", {
      strings: [
        'Software Engineer `<i class="fa-solid fa-code"></i>`',
        'React Developer `<i class="fa-brands fa-react"></i>`',
        'Python Developer `<i class="fa-brands fa-python"></i>`',
      ],
      typeSpeed: 30,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      type.destroy();
    };
  }, []);

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
        className="counter-numbers text-[3rem] text-[var(--text-primary)]"
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
      <div
        className={`py-[9rem] px-[20rem] w-full h-full relative object-cover max-xl:px-[5rem] max-md:px-[2rem]`}
      >
        <div
          className={`relative w-full h-full grid grid-cols-2 gap-[6rem] max-xl:gap-[2rem] max-md:gap-[4rem] justify-center max-md:grid-cols-1`}
        >
          <div
            className={`flex flex-col gap-[1rem] w-full justify-center transform transition-all duration-[1.5s] max-md:items-center max-md:text-center ${
              animate
                ? "translate-x-0 opacity-100"
                : "translate-x-[-200px] opacity-0"
            }`}
          >
            <h2 className="text-[2rem] font-normal text-[#212121]">
              Hi👋🏼, Welcome To My PORTFOLIO
            </h2>
            <h1 className="text-[5rem] max-xl:text-[4rem] max-md:text-[3.5rem] font-medium text-[var(--text-primary)]">{`I'm Harshvardhan Sharma`}</h1>
            <h2>
              <span className="auto-type text-[3rem] max-md:text-[2.8rem] font-medium text-[crimson]"></span>
            </h2>
            <p className="text-[2rem] font-normal text-[#212121]">
              Hello everyone, I`m Harshvardhan Sharma. Currently I`m working at
              PharynxAI Software Technologies as a Software Engineer. I am well
              known in React, VITE, Tailwindcss and Python.
            </p>
            <div className="flex items-center max-md:justify-center gap-[6rem] mt-[1rem] w-full">
              <AnimateCounterCard
                animateCounterCardData={HeroAnimateCounterData}
              />
            </div>
          </div>
          <div
            className={`flex items-center justify-center h-full w-[600px] max-2xl:w-[500px] max-lg:w-fit ml-auto mr-auto rounded-full object-cover border-[4px] 
            border-[var(--bg-secondary)] px-[1rem] py-[1rem] transform transition-all duration-[2s] ${
              animate
                ? "translate-y-0 opacity-100"
                : "translate-y-[200px] opacity-0"
            }`}
          >
            <img
              src={pic}
              alt="pic"
              className="w-[600px] h-[580px] max-2xl:w-[500px] max-2xl:h-[500px] max-lg:w-[300px] max-lg:h-[300px] max-md:w-[400px] max-md:h-[400px] max-sm:w-[280px] max-sm:h-[280px] border-[1px] border-[var(--bg-primary)] object-cover rounded-full transition-all duration-[0.5s] ease-in-out"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

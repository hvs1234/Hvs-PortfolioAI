/* eslint-disable no-unused-vars */
import React from "react";
import { BiArrowFromTop, BiArrowToTop } from "react-icons/bi";

const ScrollTopBtn = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={handleScrollToTop}
        className="fixed z-[100] bottom-[2rem] right-[3rem] rounded-2xl px-[1rem] py-[1rem] bg-[#543096]"
      >
        <BiArrowToTop size={20} className="text-[white] cursor-pointer" />
      </button>
    </>
  );
};

export default ScrollTopBtn;

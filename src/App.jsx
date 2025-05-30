/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Header/Nav";
import Footer from "./Components/Footer/Footer";
import ScrollTopBtn from "./Components/Btns/ScrollTopBtn";
import Home from "./Pages/Home/Home";
import Project from "./Pages/Projects/Project";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="flex flex-col w-full mt-[6rem]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
          </Routes>
          <ScrollTopBtn />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;

/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Header/Nav";
import Footer from "./Components/Footer/Footer";
import ScrollTopBtn from "./Components/Btns/ScrollTopBtn";
import Home from "./Pages/Home/Home";
import Project from "./Pages/Projects/Project";
import Service from "./Pages/OurService/Service";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="flex flex-col w-full mt-[5.5rem]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/service" element={<Service />} />
          </Routes>
          <ScrollTopBtn />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;

/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "../../Features/FeatureHome/Hero";
import HomeAbout from "../../Features/FeatureHome/HomeAbout";
import TechUsed from "../../Features/FeatureHome/TechUsed";
import ProgressView from "../../Features/FeatureHome/ProgressView";
import ParallexView from "../../Features/FeatureHome/ParallexView";
import ServiceView from "../../Features/FeatureHome/ServiceView";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <TechUsed />
      <ProgressView />
      <ParallexView />
      <ServiceView />
    </>
  );
};

export default Home;

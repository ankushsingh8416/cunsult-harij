import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Focus from "./components/Focus";
import Career from "./components/Career";
import BuildWrapper from "./components/BuildWrapper";

const page = () => {
  return (
    <div className="w-full">
      <Hero />
      <Focus />
      <Career />
      <BuildWrapper />
    </div>
  );
};

export default page;

import React from "react";
import vid from "../assets/test.mov";
import logo from "../assets/sotocsa white.png";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={vid}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/40"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center text-white p-4">
        <img
          src={logo}
          className="w-full max-w-[240px] sm:max-w-[320px] h-auto mb-8 pt-2"
          alt="Logo"
        />
        <h2 className="text-3xl sm:text-5xl lg:text-7xl -mt-4">
          L'avenir agricole
        </h2>
      </div>
    </div>
  );
};

export default Hero;

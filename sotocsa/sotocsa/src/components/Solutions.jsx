// Solutions.js
import React from "react";
import Dap from "../assets/dap.jpeg";
import Semence from "../assets/semence_small.jpg";
import Herbicides from "../assets/iStock-180441082-scaled-hmf.jpg";
import Insect from "../assets/insecticide.jpg";
import Collecte from "../assets/cereales.jpg";

const Solutions = () => {
  return (
    <div
      id="solutions"
      className="max-w-[1240px] mx-auto py-16 px-4 text-center"
    >
      <h1 className="text-green-900">
        Découvrez notre vaste sélection de solutions
      </h1>

      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={Herbicides}
          alt="/"
        />
        <img className="w-full h-full object-cover" src={Dap} alt="/" />
        <img className="w-full h-full object-cover" src={Semence} alt="/" />
        <img className="w-full h-full object-cover" src={Insect} alt="/" />
        <img className="w-full h-full object-cover" src={Collecte} alt="/" />
      </div>
    </div>
  );
};

export default Solutions;

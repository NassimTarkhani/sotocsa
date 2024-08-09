import React from "react";
import { GiChemicalDrop, GiGrain, GiMedicines, GiWheat } from "react-icons/gi";

const Services = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16">
      {/* Header */}
      <h2 className="text-5xl font-bold text-center mb-12 text-green-900">
        Nos Services
      </h2>

      {/* Grid of Cards */}
      <div className="grid sm:grid-cols-2 pl-12 lg:grid-cols-4 gap-12 mb-8">
        <div className="card bg-green-700 hover:bg-green-900 text-neutral-content w-72">
          <div className="card-body items-center text-center gap-4 shadow-2xl shadow-green-700/50">
            <GiGrain className="text-9xl text-white" />
            <h1 className="text-4xl text-white">Vente semences</h1>
          </div>
        </div>
        <div className="card bg-green-700 hover:bg-green-900 text-neutral-content w-72">
          <div className="card-body items-center text-center gap-4 shadow-2xl shadow-green-700/50">
            <GiMedicines className="text-9xl text-white" />
            <h1 className="text-4xl text-white">
              Vente <br />
              engrais
            </h1>
          </div>
        </div>
        <div className="card bg-green-700 hover:bg-green-900 text-white text-neutral-content w-72">
          <div className="card-body items-center text-center gap-4 shadow-2xl shadow-green-700/50">
            <GiChemicalDrop className="text-9xl text-white" />
            <h1 className="text-4xl text-white">Vente P.chimiques</h1>
          </div>
        </div>
        <div className="card bg-green-700 hover:bg-green-900 text-neutral-content w-72 ">
          <div className="card-body items-center text-center gap-4 shadow-2xl shadow-green-700/50">
            <GiWheat className="text-9xl text-white" />
            <h1 className="text-4xl text-white">Collecte Céréales</h1>
          </div>
        </div>
      </div>

      {/* Centered Button */}
      <div className="flex justify-center">
        <button className=" font-bold text-white text-2xl py-2 my-4 px-12  hover:bg-green-900">
          En savoir plus
        </button>
      </div>
    </div>
  );
};

export default Services;

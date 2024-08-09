import React from "react";
import { FaFacebook, FaPhone } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="mx-auto px-4 py-16 bg-green-700">
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-white">
        Contact et demande de devis
      </h2>

      {/* Grid of Cards */}
      <div className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="card bg-white text-neutral-content p-6 rounded-lg shadow-lg">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <MdAlternateEmail className="text-4xl sm:text-5xl mb-4" />
            </h2>
            <p className="text-lg sm:text-xl font-extrabold">
              sotocsatorkhani@gmail.com
            </p>
          </div>
        </div>
        <div className="card bg-white text-neutral-content p-6 rounded-lg shadow-lg">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <FaPhone className="text-4xl sm:text-5xl mb-4" />
            </h2>
            <p className="text-lg sm:text-xl font-extrabold">
              98 336 207 - 52 717 893
            </p>
          </div>
        </div>
        <div className="card bg-white text-neutral-content p-6 rounded-lg shadow-lg">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <FaFacebook className="text-4xl sm:text-5xl mb-4" />
            </h2>
            <p className="text-lg sm:text-xl font-extrabold">SOTOCSA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

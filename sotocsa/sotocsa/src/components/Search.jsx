import React from "react";
import { MdLeaderboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2 className="text-green-800">SOTOCSA</h2>
          <p className="py-4">
            Société Torkhani de Collecte et Services Agricoles est une
            entreprise spécialisée dans la vente et la distribution de produits
            agricoles, ainsi que dans la collecte de céréales. Ses services
            comprennent : <br /> - Vente d'engrais : Offre une variété
            d'engrais, y compris DAP, Ammonitre, et Super 45%. <br /> - Vente de
            semences : Propose des semences ordinaires et sélectionnées pour
            diverses cultures. <br />
            - Vente de produits chimiques : Fournit des produits chimiques
            destinés à l'agriculture. <br /> - Collecte de céréales : Offre des
            services de collecte de diverses céréales auprès des agriculteurs.
            L'entreprise dispose de deux points de vente situés à Oued Zarga,
            Béja, et à Bousalem, Jendouba. Ces emplacements stratégiques
            permettent de desservir efficacement les agriculteurs de la région.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdLeaderboard size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADER EN SERVICES AGRICOLES</h3>
              <p className="py-1">
                UNE ENTREPRISE TOUT-EN-UN AU SERVICE DES AGRICULTEURS
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <GiConfirmed size={50} />
            </button>
            <div>
              <h3 className="py-2 ">VOTRE PARTENAIRE DE CONFIANCE</h3>
              <p className="py-1">
                EXCELLENCE EN VENTE ET COLLECTE DE PRODUITS AGRICOLES
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border  text-center rounded-md">
          <p className="pt-4 text-lg">
            Recevez nos conseils experts <br />
            et les dernières nouvelles du monde agricole directement dans votre
            boîte de réception
          </p>
          <p className="py-4"> </p>
          <p className="bg-green-800 text-lg font-bold text-gray-200 py-2 mb-4">
            INSCRIVEZ VOUS !
          </p>

          <label className="input input-bordered flex border-2 border-green-800 items-center gap-2 mb-4">
            <CgProfile className="text-2xl text-green-800" />
            Email
            <input
              type="text"
              className="grow"
              placeholder="Votre adresse mail"
            />
          </label>
          <label className="  input input-bordered border-2 border-green-800 flex items-center gap-2 mb-4">
            <FaPhoneAlt className=" text-green-800" />
            Numéro tel
            <input type="text" className="grow " placeholder="+216" />
          </label>
          <button className="btn text-white text-">S'inscrire</button>
        </div>
      </div>
    </div>
  );
};

export default Search;

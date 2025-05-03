import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaRobot,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";

import logo from "../../../public/images/logo.png"; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-20 relative min-h-[600px]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 h-full">
        {/* Présentation */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <img src={logo as string} alt="Logo Wovoiture" className="w-44 mb-4" />
            <h2 className="text-[#1DA1F2] text-xl font-semibold mb-4">Chez Loca Voiture ,</h2>
            <p className="text-sm text-gray-300">
              Nous vous offrons la meilleure expérience de location de voitures avec un service client exceptionnel et des tarifs compétitifs.
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-between h-full bg-black p-4">
          <div>
            <h2 className="text-white text-2xl font-bold mb-6 uppercase">Nos Contact Info</h2>
            <ul className="text-base text-white divide-y divide-gray-700">
              <li className="group flex items-start gap-3 py-3 cursor-pointer">
                <FaMapMarkerAlt className="w-6 h-6 text-[color:#1DA1F2] mt-1 transform transition duration-300 group-hover:scale-150" />
                <span className="transition duration-300 group-hover:text-[color:#1DA1F2]">
                  Avenue Abdelkrim Khattabi, 40000, Guéliz - Marrakech
                </span>
              </li>
              <li className="group flex items-center gap-3 py-3 cursor-pointer">
                <FaPhoneAlt className="w-6 h-6 text-[color:#1DA1F2] transform transition duration-300 group-hover:scale-150" />
                <span className="transition duration-300 group-hover:text-[color:#1DA1F2]">
                  +212 6 11 43 65 82
                </span>
              </li>
              <li className="group flex items-center gap-3 py-3 cursor-pointer">
                <FaWhatsapp className="w-6 h-6 text-[#25D366] transform transition duration-300 group-hover:scale-150" />
                <span className="transition duration-300 group-hover:text-[#25D366]">
                  +212 6 12 34 56 78
                </span>
              </li>
              <li className="group flex items-center gap-3 py-3 cursor-pointer">
                <FaEnvelope className="w-6 h-6 text-[color:#1DA1F2] transform transition duration-300 group-hover:scale-150" />
                <span className="transition duration-300 group-hover:text-[color:#1DA1F2]">
                  contact@locavoiture.ma
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Liens rapides */}
        <div className="flex flex-col justify-between h-full bg-black p-4">
          <div>
            <h2 className="text-white text-2xl font-bold mb-6 uppercase">Liens rapides</h2>
            <ul className="text-base text-white divide-y divide-gray-700">
              {[
                "Accueil",
                "Se connecter",
                "S'inscrire",
                "Rechercher une voiture",
                "Liste des voitures",
                "Gerer mes réservations",
              ].map((text, index) => (
                <li key={index} className="group flex items-center gap-2 py-3 cursor-pointer">
                  <IoIosArrowForward className="text-[color:#1DA1F2] text-lg transform transition duration-300 group-hover:scale-150" />
                  <a href="#" className="transition duration-300 group-hover:text-[color:#1DA1F2]">{text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex flex-col justify-between h-full bg-black p-4">
          <div>
            <h2 className="text-white text-2xl font-bold mb-6 uppercase">Social Network</h2>
            <ul className="text-base text-white divide-y divide-gray-700">
              {[
                { icon: <FaFacebookF />, name: "Facebook", color: "#1877F2" },
                { icon: <FaTwitter />, name: "Twitter", color: "#1DA1F2" },
                { icon: <FaLinkedinIn />, name: "LinkedIn", color: "#0A66C2" },
                { icon: <FaInstagram />, name: "Instagram", color: "#E1306C" },
                { icon: <FaYoutube />, name: "YouTube", color: "#FF0000" },
              ].map(({ icon, name, color }) => (
                <li key={name} className="group flex items-center gap-4 py-3 cursor-pointer">
                  <span
                    className={`w-10 h-10 bg-white text-[${color}] rounded-full flex items-center justify-center transform transition duration-300 group-hover:scale-150`}
                    style={{ color }}
                  >
                    {icon}
                  </span>
                  <span className={`transition duration-300 group-hover:text-[${color}]`}>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="#"
        className="fixed bottom-5 right-5 z-50 w-28 h-28 rounded-full flex items-center justify-center bg-[#25D366] hover:bg-[#1DA955] transition shadow-lg"
        title="Ouvrir le chatbot"
      >
        <div className="relative w-full h-full">
          <IoChatbubbleOutline className="text-white w-full h-full" />
          <FaRobot className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl" />
        </div>
      </a>
    </footer>
  );
};

export default Footer;

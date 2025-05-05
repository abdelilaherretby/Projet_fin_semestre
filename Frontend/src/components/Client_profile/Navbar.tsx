import React, { useState } from "react";
import { FaUserAlt, FaUser, FaCalendarCheck, FaHistory } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";  // Importer MdClose

interface NavbarProps {
  clientName: string;
  handleSectionClick: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ clientName, handleSectionClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Profil", value: "profile" },
    { label: "Réservations", value: "reservations" },
    { label: "Historique des Réservations", value: "reservationHistory" },
  ];

  const handleLinkClick = (value: string) => {
    handleSectionClick(value);
    setMenuOpen(false); // Ferme le menu mobile après clic
  };

  return (
    <nav className="w-full bg-white text-black flex justify-between items-center px-8 py-6 shadow-lg fixed top-4 left-0 z-50">
      <div className="flex items-center gap-10">
        {/* Menu icon (mobile) */}
        <button
          className="md:hidden text-3xl text-blue-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? (
            <MdClose /> // Affiche MdClose si le menu est ouvert
          ) : (
            <IoMdMenu /> // Affiche IoMdMenu si le menu est fermé
          )}
        </button>

        {/* Navigation links (desktop) */}
        <div className="hidden md:flex gap-8 text-lg font-bold tracking-wide">
          {links.map((link) => (
            <a
              key={link.value}
              href="#"
              onClick={() => handleSectionClick(link.value)}
              className="relative hover:text-blue-500 transition-colors duration-200 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-blue-500 hover:before:w-full before:transition-all before:duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Client name */}
      <div className="flex items-center gap-2 text-lg font-semibold">
        <FaUserAlt className="text-xl text-blue-500" />
        <span>Bonjour {clientName}</span>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-blue-500 border shadow-lg md:hidden z-50 flex flex-col text-lg font-medium">
          {links.map((link, index) => (
            <React.Fragment key={link.value}>
              <button
                onClick={() => handleLinkClick(link.value)}
                className="text-left text-white hover:text-blue-500 hover:bg-white transition-colors p-4 pl-9 w-full"
              >
                <span className="flex items-center gap-2">
                  {link.value === "profile" && <FaUser />}
                  {link.value === "reservations" && <FaCalendarCheck />}
                  {link.value === "reservationHistory" && <FaHistory />}
                  {link.label}
                </span>
              </button>
              {index !== links.length - 1 && <hr className="border-blue-300" />}
            </React.Fragment>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

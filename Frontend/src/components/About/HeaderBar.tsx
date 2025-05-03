import { useState } from "react";
import { FaGlobe, FaUser, FaPen } from 'react-icons/fa';
import FormPopup from "./FormPopup";
import logo from "../../../public/images/logo.png";

interface HeaderBarProps {
  lieuRetrait: string;
  lieuRetour: string;
  dateDepart: string;
  dateRetour: string;
  carFilter: any[];
  carList: any[];
  setCarList: React.Dispatch<React.SetStateAction<any[]>>;
  reservationList: any[];
}

export default function HeaderBar({
  lieuRetrait,
  lieuRetour,
  dateDepart,
  dateRetour,
  carFilter,
  carList,
  setCarList,
  reservationList
}: HeaderBarProps) {

  const [showForm, setShowForm] = useState<boolean>(false);

  const handleNewSearch = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <header className="bg-slate-900 text-white px-4 py-2 flex justify-between items-center shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" width={100} className="brightness-0 invert mt-2 ml-2" />
        </div>

        {/* Lieu et dates */}
        <div className="w-[500px] bg-gray-800 text-white px-4 py-5 rounded-full flex items-center justify-between shadow-md">
          <div className="text-sm">
            <div className="text-lg font-semibold">
              {lieuRetrait} – {lieuRetour !== "null" ? lieuRetour : lieuRetrait}
            </div>
            <div className="text-sm text-gray-300">
              {dateDepart} – {dateRetour}
            </div>
          </div>

          <button
            onClick={handleNewSearch}
            className="text-gray-400 hover:text-white mr-3"
          >
            <FaPen size={20} />
          </button>
        </div>

        {/* Langue et compte */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
            <FaGlobe size={12} />
            FR | €
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
            <FaUser size={12} />
            Connexion | Inscription
          </div>
        </div>
      </header>

      {/* FormPopup */}
      {showForm && (
        <FormPopup
          handleCloseForm={handleCloseForm}
          carFilter={carFilter}
          carList={carList}
          setCarList={setCarList}
          reservationList={reservationList}
        />
      )}
    </>
  );
}


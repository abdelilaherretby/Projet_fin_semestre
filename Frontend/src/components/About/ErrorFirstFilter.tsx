import { useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import FormPopup from "./FormPopup"; 

interface ErrorFirstFilterProps {
  carFilter: any;
  carList: any[];
  setCarList: React.Dispatch<React.SetStateAction<any[]>>;
  reservationList: any[];
}

const ErrorFirstFilter: React.FC<ErrorFirstFilterProps> = ({ carFilter, carList, setCarList, reservationList }) => {
  const [showForm, setShowForm] = useState(false);

  const handleNewSearch = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-md flex items-start gap-3 shadow-sm max-w-3xl mx-auto m-10 relative">
      <RiErrorWarningFill className="text-gray-600 mt-1 text-xl" />
      <div className="flex-1">
        <h2 className="font-semibold text-gray-800">Désolé</h2>
        <p className="text-gray-700 text-sm">
          Il n’est pas possible de réserver une location en aller simple entre ces agences.
          Choisissez une autre agence de retrait ou de retour.
        </p>
      </div>
      <div className="ml-auto mt-1">
        <button
          onClick={handleNewSearch}
          className="text-sm text-black font-medium inline-block relative group hover:text-blue-600"
        >
          Nouvelle recherche
          <span className="absolute left-0 bottom-0 block w-full h-[2px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 group-hover:translate-x-0 transition-all duration-500 ease-out origin-left"></span>
        </button>
      </div>

      {/* Affiche FormPopup si showForm est true */}
      {showForm && <FormPopup handleCloseForm={handleCloseForm} carFilter={carFilter} carList={carList} setCarList={setCarList} reservationList={reservationList} />}
    </div>
  );
};

export default ErrorFirstFilter;

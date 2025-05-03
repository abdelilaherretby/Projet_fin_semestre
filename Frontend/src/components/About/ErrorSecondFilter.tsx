import { RiErrorWarningFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const ErrorSecondFilter: React.FC = () => {
  const navigate = useNavigate();

  const handleReset = () => {
    navigate(0); // Recharge la route courante (/about)
  };

  return (
    <div className="bg-gray-100 p-6 rounded-md flex items-start gap-3 shadow-sm max-w-3xl mx-auto m-10">
      <RiErrorWarningFill className="text-gray-600 mt-1 text-xl" />
      <div className="flex-1">
        <h2 className="font-semibold text-gray-800">Aucun véhicule disponible</h2>
        <p className="text-gray-700 text-sm">
          Malheureusement, nous n’avons pas le véhicule que vous recherchez. Essayez d’utiliser moins de filtres.
        </p>
      </div>
      <div className="ml-auto mt-1">
        <button
          onClick={handleReset}
          className="text-sm text-black font-medium inline-block relative group hover:text-blue-600"
        >
          Réinitialiser les filtres
          <span className="absolute left-0 bottom-0 block w-full h-[2px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 group-hover:translate-x-0 transition-all duration-500 ease-out origin-left"></span>
        </button>
      </div>
    </div>
  );
};

export default ErrorSecondFilter;


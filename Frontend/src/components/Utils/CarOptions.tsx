import React, { useState, useEffect } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import InfoPopup from "./infoPopup";
import DetailPrixPopup from "./DetailPrixPopup"; // importe ton nouveau composant
import { useNavigate } from "react-router-dom";

// Définition du type pour les props
interface Car {
  prixParJour: string | number;
  tarifKmSupp: number;
  kilometrageInclus: number;
  tarifKmIlimitesParJour: number;
}

interface CarOptionsProps {
  car: Car;
  differenceEnJours: number;
}

const CarOptions = ({ car, differenceEnJours }: CarOptionsProps) => {
  const [showPopup, setShowPopup] = useState<boolean>(false); // pour InfoPopup
  const [showDetailPrix, setShowDetailPrix] = useState<boolean>(false); // pour DetailPrixPopup
  const [selectedValue, setSelectedValue] = useState<string | number>(car?.prixParJour || "");

  const supplementLocal = 5; // supplément local fixe

  const navigate = useNavigate();

  useEffect(() => {
    setSelectedValue(car?.prixParJour || "");
  }, [car]);

  const togglePopup = () => setShowPopup((prev) => !prev);
  const closePopup = () => setShowPopup(false);

  const toggleDetailPrix = () => setShowDetailPrix((prev) => !prev);
  const closeDetailPrix = () => setShowDetailPrix(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const calculateMontantHT = (): number => {
    return parseFloat((parseFloat(selectedValue as string) * differenceEnJours).toFixed(2));
  };

  const calculateTVA = (): number => {
    const tauxTVA = 20;
    const montantHT = calculateMontantHT();
    return parseFloat((montantHT * tauxTVA / 100).toFixed(2));
  };

  const totalFrais = (): number => {
    const tva = calculateTVA();
    return parseFloat((tva + supplementLocal).toFixed(2));
  };

  const calculateTotal = (): number => {
    const montantHT = calculateMontantHT();
    const fraisPlusTVA = totalFrais();
    return parseFloat((montantHT + fraisPlusTVA).toFixed(2));
  };

  const handleNavigation = () => {
    navigate('/booking_page', {
      state: {},
    });
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-2xl relative mt-2">
      <h2 className="text-lg font-semibold mb-4">Options de paiement</h2>

      <div className="border rounded-xl p-4 mb-6 flex justify-between items-center">
        <div>
          <p className="font-medium">Restez flexible</p>
          <p className="text-sm text-gray-500">
            Payez à la prise en charge, annulez et modifiez gratuitement avant l'heure de la prise en charge
          </p>
        </div>

        <span
          className="text-sm font-semibold flex items-center gap-1 cursor-pointer text-black hover:text-blue-600 transition-colors"
          onClick={togglePopup}
        >
          Inclus <AiOutlineInfoCircle size={24} />
        </span>
      </div>

      <h2 className="text-lg font-semibold mb-4">Kilométrage</h2>
      <div className="space-y-3">
        <label
          className="flex items-start border rounded-xl p-4 cursor-pointer hover:border-blue-500 transition-all"
        >
          <input
            type="radio"
            name="kilometrage"
            value={car?.prixParJour}
            className="mt-1 mr-3 accent-blue-600"
            onChange={handleChange}
            checked={selectedValue == car?.prixParJour}
          />
          <div className="flex justify-between w-full">
            <div>
              <p className="font-medium">{car?.kilometrageInclus} km</p>
              <p className="text-sm text-gray-500">
                +{car?.tarifKmSupp} € / pour chaque kilomètre supplémentaire
              </p>
            </div>
            <span className="text-sm font-semibold self-start">Inclus</span>
          </div>
        </label>

        <label
          className="flex items-start border rounded-xl p-4 cursor-pointer hover:border-blue-500 transition-all"
        >
          <input
            type="radio"
            name="kilometrage"
            value={parseFloat((car?.prixParJour + car?.tarifKmIlimitesParJour).toFixed(2))}
            className="mt-1 mr-3 accent-blue-600"
            onChange={handleChange}
            checked={selectedValue == parseFloat((car?.prixParJour + car?.tarifKmIlimitesParJour).toFixed(2))}
          />
          <div className="flex justify-between w-full">
            <div>
              <p className="font-medium">Kilomètres illimités</p>
              <p className="text-sm text-gray-500">
                Tous les kilomètres sont inclus dans le prix
              </p>
            </div>
            <span className="text-sm font-semibold self-start">
              + {car?.tarifKmIlimitesParJour} € par jour
            </span>
          </div>
        </label>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <div className="text-lg font-semibold">
          <span>{selectedValue} €</span>
          <span className="text-sm text-gray-500"> / jour</span>
          <div className="text-sm text-gray-600">{calculateTotal()} € total</div>
        </div>
        <button
          onClick={handleNavigation}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition-all"
        >
          Réserver
        </button>
      </div>

      <div
        className="text-sm text-blue-600 mt-2 cursor-pointer hover:underline"
        onClick={toggleDetailPrix}
      >
        Détails du prix
      </div>

      {/* POPUPS */}
      {showPopup && <InfoPopup onClose={closePopup} />}
      {showDetailPrix && (
        <DetailPrixPopup
          onClose={closeDetailPrix}
          differenceEnJours={differenceEnJours}
          selectedValue={selectedValue}
          montantHT={calculateMontantHT()}
          tva={calculateTVA()}
          supp={supplementLocal}
          frais={totalFrais()}
          total={calculateTotal()}
        />
      )}
    </div>
  );
};

export default CarOptions;

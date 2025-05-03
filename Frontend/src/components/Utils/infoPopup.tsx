// InfoPopup.tsx
import { AiOutlineClose } from "react-icons/ai";
import React from "react";

interface InfoPopupProps {
  onClose: () => void;
}

const InfoPopup: React.FC<InfoPopupProps> = ({ onClose }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-xl p-6 shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-orange-500 transition-colors"
        >
          <AiOutlineClose size={18} />
        </button>
        <p className="text-sm text-gray-700">
          Vous paierez au comptoir, lors de la récupération du véhicule à l'agence de retrait.
        </p>
      </div>
    </div>
  );
};

export default InfoPopup;

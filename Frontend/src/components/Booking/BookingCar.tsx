import React from 'react';
import { FaStore, FaInfoCircle, FaCheck } from 'react-icons/fa';

interface BookingCarSectionProps {
  image: string;
  name: string;
  subtitle: string;
  days: number;
  pickupLocation: string;
  pickupDate: string;
  pickupTime: string;
  returnLocation: string;
  returnDate: string;
  returnTime: string;
  features: string[];
}

export default function BookingCarSection({
  image,
  name,
  subtitle,
  days,
  pickupLocation,
  pickupDate,
  pickupTime,
  returnLocation,
  returnDate,
  returnTime,
  features
}: BookingCarSectionProps) {
  return (
    <div className="w-full bg-gray-100 p-6 rounded-2xl shadow-xl space-y-6">
      {/* ─── Section principale ─── */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Partie gauche : image + pickup/retour */}
        <div className="flex flex-col gap-4">
          {/* Ligne image + infos générales */}
          <div className="flex items-start gap-4">
            {/* Image */}
            <img
              src={image}
              alt={name}
              className="w-32 h-20 object-cover rounded-lg"
            />

            {/* Partie droite : infos générales */}
            <div className="flex-1 space-y-1">
              <h2 className="text-xl font-bold text-gray-900">{name}</h2>
              <p className="text-gray-500">{subtitle}</p>
              <p className="text-gray-700">{days} jours de location</p>
            </div>
          </div>

          {/* Pickup & Retour (ne pas modifier) */}
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Prise en charge</p>
            <div className="flex items-start gap-3">
              <FaStore className="text-gray-600 text-xl mt-1" />
              <div>
                <p className="text-sm font-semibold text-gray-900">{pickupLocation}</p>
                <p className="text-sm text-gray-600">{pickupDate} | {pickupTime}</p>
              </div>
            </div>
            
            <p className="text-sm font-medium text-gray-500 mt-4 mb-1">Retour</p>
            <div className="flex items-start gap-3">
              
              <FaStore className="text-gray-600 text-xl mt-1" />
              <div>
                <p className="text-sm font-semibold text-gray-900">{returnLocation}</p>
                <p className="text-sm text-gray-600">{returnDate} | {returnTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Aperçu de la réservation ─── */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-gray-900">
          Aperçu de votre réservation :
        </h3>
        <ul className="space-y-2">
          {features.map((feat) => (
            <li key={feat} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                <span className="text-gray-800">{feat}</span>
              </div>
              <FaInfoCircle className="text-gray-400" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

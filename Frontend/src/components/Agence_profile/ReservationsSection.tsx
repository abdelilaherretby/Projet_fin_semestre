import React from "react";

const ReservationsSection: React.FC = () => {
  return (
    <section className="my-6 p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Mes Réservations</h3>

      {/* Liste des réservations */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="text-left px-4 py-2">Véhicule</th>
              <th className="text-left px-4 py-2">Client</th>
              <th className="text-left px-4 py-2">Statut</th>
              <th className="text-left px-4 py-2">Date départ</th>
              <th className="text-left px-4 py-2">Heure départ</th>
              <th className="text-left px-4 py-2">Date retour</th>
              <th className="text-left px-4 py-2">Heure retour</th>
              <th className="text-left px-4 py-2">Date réservation</th>
            </tr>
          </thead>
          <tbody>
            {/* Exemple de ligne */}
            <tr className="hover:bg-gray-50 transition">
              <td className="border-t px-4 py-3">Audi Q7</td>
              <td className="border-t px-4 py-3">Jean Dupont</td>
              <td className="border-t px-4 py-3 text-blue-600">Confirmée</td>
              <td className="border-t px-4 py-3">01/05/2025</td>
              <td className="border-t px-4 py-3">10:00</td>
              <td className="border-t px-4 py-3">10/05/2025</td>
              <td className="border-t px-4 py-3">16:00</td>
              <td className="border-t px-4 py-3">25/04/2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ReservationsSection;

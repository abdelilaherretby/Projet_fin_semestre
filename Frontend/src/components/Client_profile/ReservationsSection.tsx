import React, { useState } from "react";

type Reservation = {
  id: number;
  dateReservation: string;
  vehicule: string;
  agence: string;
  confirmee: boolean; //est-ce que l'agence a confirmé
  dateDepart: string;
  lieuRetrait: string;
  dateRetour: string;
  lieuRetour: string;
  annulee: boolean; //est-ce que le client a annulé
};

const ReservationsSection: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([
    {
      id: 1,
      dateReservation: "25/04/2025",
      vehicule: "Audi Q7",
      agence: "Agence Paris",
      confirmee: false,
      dateDepart: "01/05/2025",
      lieuRetrait: "Gare de Lyon",
      dateRetour: "10/05/2025",
      lieuRetour: "Aéroport CDG",
      annulee: false,
    },
    {
      id: 2,
      dateReservation: "20/04/2025",
      vehicule: "Peugeot 208",
      agence: "Agence Lyon",
      confirmee: true,
      dateDepart: "28/04/2025",
      lieuRetrait: "Part-Dieu",
      dateRetour: "03/05/2025",
      lieuRetour: "Gare de Lyon",
      annulee: false,
    },
  ]);

  const handleCancel = (id: number) => {
    setReservations((prev) =>
      prev.map((res) =>
        res.id === id ? { ...res, annulee: true } : res
      )
    );
  };

  const handleConfirm = (id: number) => {
    setReservations((prev) =>
      prev.map((res) =>
        res.id === id ? { ...res, annulee: false } : res
      )
    );
  };

  return (
    <section className="my-6 p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Mes Réservations</h3>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="text-left px-4 py-2">Date réservation</th>
              <th className="text-left px-4 py-2">Véhicule</th>
              <th className="text-left px-4 py-2">Agence</th>
              <th className="text-left px-4 py-2">Statut</th>
              <th className="text-left px-4 py-2">Date départ</th>
              <th className="text-left px-4 py-2">Lieu de départ</th>
              <th className="text-left px-4 py-2">Date retour</th>
              <th className="text-left px-4 py-2">Lieu de retour</th>
              <th className="text-left px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((res) => (
              <tr key={res.id} className="hover:bg-gray-50 transition">
                <td className="border-t px-4 py-3">{res.dateReservation}</td>
                <td className="border-t px-4 py-3">{res.vehicule}</td>
                <td className="border-t px-4 py-3">{res.agence}</td>
                <td className={`border-t px-4 py-3 ${res.confirmee ? "text-blue-600" : "text-yellow-600"}`}>
                  {res.confirmee ? "Confirmée" : "En attente"}
                </td>
                <td className="border-t px-4 py-3">{res.dateDepart}</td>
                <td className="border-t px-4 py-3">{res.lieuRetrait}</td>
                <td className="border-t px-4 py-3">{res.dateRetour}</td>
                <td className="border-t px-4 py-3">{res.lieuRetour}</td>
           

                <td className="border-t px-4 py-3">
                  {res.annulee ? (
                    <button
                      onClick={() => handleConfirm(res.id)}
                      className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition min-w-[120px] text-center"
                    >
                      Confirmer
                    </button>
                  ) : (
                    <button
                      onClick={() => handleCancel(res.id)}
                      className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition min-w-[120px] text-center"
                    >
                      Annuler 
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ReservationsSection;

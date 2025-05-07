// Importations nécessaires
import React, { useEffect, useState } from "react";
import Notification from "./Notification";
import ActionButton from "./ActionButton";

// Définition du type pour une réservation
type Reservation = {
  id: number;
  dateReservation: string;
  vehicule: string;
  agence: string;
  confirmee: boolean;
  dateDepart: string;
  lieuRetrait: string;
  dateRetour: string;
  lieuRetour: string;
  annulee: boolean;
};

// Composant principal
const ReservationsSection: React.FC = () => {
  // État contenant la liste des réservations
  const [reservations, setReservations] = useState<Reservation[]>([]);

  // État pour gérer l'affichage des notifications (message et type)
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);

  // État pour gérer le chargement des données
  const [loading, setLoading] = useState<boolean>(true);

  // État pour gérer l'ID de la réservation en cours de mise à jour
  const [updatingId, setUpdatingId] = useState<number | null>(null);


  // Fonction pour afficher une notification temporairement
  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 8000);
  };

  // Récupération des réservations au chargement initial du composant
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:5000/api/reservations/mes-reservations", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        // Gestion des erreurs liées au token (expiré ou invalide)
        if (!response.ok) {
          if (data.message === "Token invalide" || data.message === "Token expiré") {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = "/login_client";
          } else {
            // Gestion des autres erreurs du backend
            showNotification(data.message || "Erreur serveur", "error");
          }
          return;
        }

        // Formatage des données si la réponse est valide
        if (data.reservations) {
          const formatted: Reservation[] = data.reservations.map((res: any) => ({
            id: res.id_reservation,
            dateReservation: res.date_reservation,
            vehicule: res.nom_voiture,
            agence: res.nom_agence,
            confirmee: res.confirmee === 1,
            dateDepart: res.date_depart,
            lieuRetrait: res.lieu_retrait,
            dateRetour: res.date_retour,
            lieuRetour: res.lieu_retour,
            annulee: res.annulee === 1,
          }));

          setReservations(formatted);
        }
      } catch (error) {
        // Gestion des erreurs réseau ou techniques
        console.error("Erreur lors du chargement des réservations :", error);
        showNotification("Erreur lors du chargement des réservations", "error");
      }finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  // Fonction pour mettre à jour l'annulation ou la confirmation d'une réservation
  const updateAnnulation = async (id: number, newStatus: boolean) => {
    setUpdatingId(id); // active le loader
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`http://localhost:5000/api/reservations/${id}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ annulee: newStatus }),
      });

      const data = await response.json();

      // Gestion des erreurs liées au token
      if (!response.ok) {
        if (data.message === "Token invalide" || data.message === "Token expiré") {
          showNotification(data.message, "error");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.href = "/login_client";
        } else {
          // Affichage d'une notification d'erreur du backend
          showNotification(data.message || "Erreur serveur", "error");
        }
        return;
      }

      // Mise à jour de l'état local si la modification est réussie
      if (data.reservations) {
        const formatted: Reservation[] = data.reservations.map((res: any) => ({
          id: res.id_reservation,
          dateReservation: res.date_reservation,
          vehicule: res.nom_voiture,
          agence: res.nom_agence,
          confirmee: res.confirmee === 1,
          dateDepart: res.date_depart,
          lieuRetrait: res.lieu_retrait,
          dateRetour: res.date_retour,
          lieuRetour: res.lieu_retour,
          annulee: res.annulee === 1,
        }));

        setReservations(formatted);
      }

      // Notification de succès
      showNotification(data.message || "Mise à jour réussie", "success");

    } catch (error) {
      // Gestion des erreurs réseau ou inattendues
      console.error("Erreur de mise à jour de l'annulation :", error);
      showNotification("Erreur serveur", "error");
    }finally {
      setUpdatingId(null); // désactive le loader
    }
  };

  // Handler pour annuler une réservation
  const handleCancel = (id: number) => {
    updateAnnulation(id, true);
  };

  // Handler pour confirmer une réservation annulée
  const handleConfirm = (id: number) => {
    updateAnnulation(id, false);
  };

  // Affichage  du composant
   return (
    <section className="my-6 p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Mes Réservations</h3>
  
      {/* Affichage de la notification */} 
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

      {/* Affichage d'un loader pendant le chargement des réservations */}
      {loading ? (
          <div className="fixed inset-0 z-100 flex items-center justify-center bg-white bg-opacity-70">
          <div className="p-6 bg-white  flex items-center justify-center">
            <img src="/images/load.gif" alt="Chargement en cours...." className="w-28 h-28" />
          </div>
        </div>
      ) : (
        // Affichage du tableau des réservations
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
                  <td
                    className={`border-t px-4 py-3 ${
                      res.confirmee ? "text-blue-600" : "text-yellow-600"
                    }`}
                  >
                    {res.confirmee ? "Confirmée" : "En attente"}
                  </td>
                  <td className="border-t px-4 py-3">{res.dateDepart}</td>
                  <td className="border-t px-4 py-3">{res.lieuRetrait}</td>
                  <td className="border-t px-4 py-3">{res.dateRetour}</td>
                  <td className="border-t px-4 py-3">{res.lieuRetour}</td>
                  <td className="border-t px-4 py-3">
                    {res.annulee ? (
                      // Bouton d'action générique affichant un loader uniquement pour l'élément en cours de traitement (basé sur l'ID)
                      <ActionButton
                            loading={updatingId === res.id}
                            onClick={() => handleConfirm(res.id)}
                            text="Confirmer"
                            loadingText="Confirmation..."
                            color="green"
                      />
                        ) : (
                      <ActionButton
                            loading={updatingId === res.id}
                            onClick={() => handleCancel(res.id)}
                            text="Annuler"
                            loadingText="Annulation..."
                            color="red"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default ReservationsSection;

const { getReservationsHistoryByClient,deleteReservationHistorique } = require('../Models/reservationhistorymodel');

// Récupérer les réservations historiques d'un client
exports.getClientReservationsHistory = async (req, res) => {

  // ID client récupéré via le middleware d'authentification
  const clientId = req.client.id;

  try {
     // Simuler un délai (1s) pour l'effet de loading
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Récupérer les réservations historiques du client
    const reservationshistoriques = await  getReservationsHistoryByClient(clientId);
   
     // Répondre avec le message + données recupérées
    res.status(200).json({
      message: 'Liste des réservations historique récupérée avec succès',
      reservationshistoriques
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des réservations historique :', error);
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};



// Supprimer une réservation historique
exports.deleteReservationHistoriqueController = async (req, res) => {

    // ID de la réservation à supprimer, récupéré via les paramètres de la requête
    const reservationId = req.params.id;
    // ID client récupéré via le middleware d'authentification
    const clientId = req.client.id; 
  
    try {

      // Simuler un délai (1s) pour l'effet de loading
      await new Promise(resolve => setTimeout(resolve, 1000));

     // Supprimer la réservation
     await deleteReservationHistorique(reservationId);
    
     // Récupérer les réservations à jour depuis le modèle
    const updatedReservations = await getReservationsHistoryByClient(clientId);

      
      // Répondre avec le message + données mises à jour
      res.status(200).json({
        message: "Réservation supprimée avec succès",
        reservationshistoriques: updatedReservations
      });
    } catch (error) {
      res.status(500).json({
        message: "Erreur lors de la suppression de la réservation",
        error: error.message
      });
    }
  };
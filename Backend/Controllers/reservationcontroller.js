const { getReservationsByClient,updateAnnulation } = require('../Models/reservationmodel');

// Récupérer les réservations d'un client
exports.getClientReservations = async (req, res) => {
  //ID client récupéré via le middleware
  const clientId = req.client.id; 
  
  try {

    // Simuler un délai (1s) pour l'effet de loading
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Récupérer les réservations du client
    const reservations = await getReservationsByClient(clientId);
   
    // Répondre avec le message + données récupérées
    res.status(200).json({
      message: 'Liste des réservations récupérée avec succès',
      reservations
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des réservations :', error);
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};



// Mettre à jour le statut d'annulation d'une réservation
exports.updateAnnulation = async (req, res) => {
  //ID client récupéré via le middleware
  const clientId = req.client.id; 
  //ID réservation récupéré via les paramètres de la requête
  const reservationId = req.params.id;
  //Statut d'annulation récupéré via le corps de la requête
  const { annulee } = req.body; 

  try {
    // Simuler un délai (1s) pour l'effet de loading
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mettre à jour le statut d'annulation
    await updateAnnulation(reservationId, annulee);

    // Récupérer les réservations mises à jour du client
    const updatedReservations = await getReservationsByClient(clientId);

    // Vérifier si la réservation a été annulée ou confirmée
    const message = annulee
      ? "Réservation annulée avec succès"
      : "Réservation confirmée avec succès";

    // Répondre avec le message + données mises à jour
    res.status(200).json({ message, reservations: updatedReservations });
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur lors de la mise à jour de l'annulation",
      error: error.message || error
    });
  }
};
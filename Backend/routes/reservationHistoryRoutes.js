const express = require('express');
const router = express.Router();
const {getClientReservationsHistory,deleteReservationHistoriqueController} = require('../Controllers/reservationhistorycontroller');
const { authenticateClient } = require('../Middlewares/authMidleware');

// Route protégée par JWT pour récupérer les réservations du client connecté
router.get('/mes-historiques', authenticateClient,getClientReservationsHistory);
router.delete('/delete-historique/:id', authenticateClient, deleteReservationHistoriqueController);


module.exports = router;

const express = require('express');
const router = express.Router();
const {getClientReservations,updateAnnulation} = require('../Controllers/reservationcontroller');
const { authenticateClient } = require('../Middlewares/authMidleware');

// Route protégée par JWT pour récupérer les réservations du client connecté
router.get('/mes-reservations', authenticateClient,getClientReservations);
router.put('/:id/status',authenticateClient, updateAnnulation);


module.exports = router;

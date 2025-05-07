const express = require('express');
const router = express.Router();
const { register, login,getAgenceProfile,updateAgenceProfile } = require('../Controllers/agencecontroller');

// Route de test
router.get('/test', (req, res) => {
  res.json({ message: 'API Agence est opérationnelle' });
});

// Routes pour l'inscription et le login
router.post('/register', register);
router.post('/login', login);
//routes pour la recuperation de donnee
router.get('/profile/:id', getAgenceProfile);

// Route pour la mise à jour du profil de l'agence
router.put('/profile/:id', updateAgenceProfile);


module.exports = router;

const express = require('express');
const router = express.Router();
const { register, login } = require('../Controllers/agencecontroller');

// Route de test
router.get('/test', (req, res) => {
  res.json({ message: 'API Agence est opérationnelle' });
});

// Routes pour l'inscription et le login
router.post('/register', register);
router.post('/login', login);

module.exports = router;

const { createAgence, getAgenceByEmail } = require('../models/agenceModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const SECRET_KEY = process.env.JWT_SECRET;

// 🔐 Enregistrement d'une agence
exports.register = async (req, res) => {
  try {
    const { nom, adresse, contact, email, password } = req.body;

    // Vérification des champs requis
    if (!nom || !adresse || !contact || !email || !password) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Email invalide' });
    }

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    const newAgence = { nom, adresse, contact, email, password: hashedPassword };

    createAgence(newAgence, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Erreur serveur', error: err });
      }
      res.status(201).json({ message: 'Agence inscrite avec succès', id: result.insertId });
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l’inscription', error });
  }
};

// 🔓 Connexion d’une agence
exports.login = async (req, res) => {
  const { email, password } = req.body;

  getAgenceByEmail(email, async (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    const agence = results[0];

    // Vérification du mot de passe
    const isMatch = await bcrypt.compare(password, agence.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    // Création du token JWT
    const token = jwt.sign(
      { id: agence.id, email: agence.email },
      SECRET_KEY,
      { expiresIn: '2h' }
    );

    // Retourne l'agence connectée avec son token
    res.status(200).json({
      message: 'Connexion réussie',
      token,
      agence: {
        id: agence.id,
        nom: agence.nom,
        email: agence.email,
        adresse: agence.adresse,
        contact: agence.contact
      }
    });
  });
};

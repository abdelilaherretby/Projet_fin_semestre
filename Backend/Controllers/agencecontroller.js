const { createAgence, getAgenceByEmail,getAgenceById } = require('../Models/agencemodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const SECRET_KEY = process.env.JWT_SECRET;

// 🔐 Enregistrement d'une agence
exports.register = async (req, res) => {
  try {
    const { nom, adresse, telephone, email, password } = req.body;

    // Vérification des champs requis
    if (!nom || !adresse || !telephone || !email || !password) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Email invalide' });
    }

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    const newAgence = { nom, adresse, telephone, email, password: hashedPassword };

    createAgence(newAgence, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Erreur serveur', error: err });
      }
      res.status(201).json({ message: 'Agence inscrite avec succès', id_agence: result.insertId });
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
      { id_agence: agence.id_agence, email: agence.email },
      SECRET_KEY,
      { expiresIn: '2h' }
    );

    // Retourne l'agence connectée avec son token
    res.status(200).json({
      message: 'Connexion réussie',
      token,
      agence: {
        id_agence: agence.id_agence,
        nom: agence.nom,
        email: agence.email,
        adresse: agence.adresse,
        telephone: agence.telephone
      }
    });
  });
};

exports.getAgenceProfile = (req, res) => {
  const id = req.params.id;

  getAgenceById(id, (err, results) => {
    if (err || results.length === 0) {
      return res.status(404).json({ message: "Agence introuvable" });
    }

    const agence = results[0];

    res.status(200).json({
      id_agence: agence.id_agence,
      name: agence.nom,
      email: agence.email,
      telephone: agence.telephone,
      address: agence.adresse,
      description: agence.description || "" // si la description n'existe pas encore
    });
  });
};

// 🔧 Mise à jour des informations d'une agence
exports.updateAgenceProfile = (req, res) => {
  const { id } = req.params;
  const { nom, adresse, telephone, email, description } = req.body;

  // Vérification des champs requis
  if (!nom || !adresse || !telephone || !email) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  // Préparation de la requête SQL pour la mise à jour
  const sql = `
    UPDATE agence
    SET nom = ?, adresse = ?, telephone = ?, email = ?, description = ?
    WHERE id_agence = ?
  `;
  
  const values = [nom, adresse, telephone, email, description, id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erreur lors de la mise à jour de l\'agence :', err);
      return res.status(500).json({ message: 'Erreur serveur', error: err });
    }

    // Vérification si des lignes ont été modifiées
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Agence non trouvée' });
    }

    res.status(200).json({ message: 'Profil mis à jour avec succès' });
  });
};


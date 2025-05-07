const { createClient, getClientByEmail,updateClient} = require('../Models/clientmodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config(); // ← charge les variables d'environnement
const SECRET_KEY = process.env.JWT_SECRET;


// 🔐 Enregistrement d'un client
exports.register = async (req, res) => {
  try {
    const { nom,permis, email, age, contact, password } = req.body;
    // Vérification des champs requis
    if (!nom || !email || !password || !age || !contact || !permis) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
    }

    // Validation du format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Email invalide' });
    }

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    const newClient = {nom, permis, email, age, contact, password: hashedPassword };

    createClient(newClient, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Erreur serveur', error: err });
      }
      res.status(201).json({ message: 'Client inscrit avec succès', id: result.insertId });
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l’inscription', error });
  }
};

// 🔓 Connexion d’un client
exports.login = async (req, res) => {
  const { email, password } = req.body;

  getClientByEmail(email, async (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    const client = results[0];

    // Vérification du mot de passe
    const isMatch = await bcrypt.compare(password, client.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    // Création du token JWT
    const token = jwt.sign(
      { id: client.id, email: client.email },
      SECRET_KEY,
      { expiresIn: '5m' } // Tu peux ajuster la durée
    );

    // Retourne le client connecté avec son token
    res.status(200).json({
      message: 'Connexion réussie',
      token,
      client: {
        id: client.id,
        nom:client.nom,
        email: client.email,
        permis: client.permis,
        age: client.age,
        contact: client.contact
      }
    });
  });
};



exports.updateProfile = async (req, res) => {
  // ID client récupéré via le middleware d'authentification
  const clientId = req.client.id; 
  // Données du profil récupérées via le corps de la requête
  const { nom, email, permis, age, contact } = req.body;

  try {
    // Simuler un délai (1s) pour l'effet de loading
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const updatedData = { nom, email, permis, age, contact };

    // appeler la fonction de mise à jour du modèle
    const updatedClient = await updateClient(clientId, updatedData);

    // Répondre avec le message + données mises à jour
    res.status(200).json({
      message: 'Profil mis à jour avec succès',
      updatedData: updatedClient,
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
};



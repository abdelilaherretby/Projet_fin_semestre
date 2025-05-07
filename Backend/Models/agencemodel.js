const db = require('../config/db');

// 📌 Créer une nouvelle agence
const createAgence = (agence, callback) => {
  const sql = `
    INSERT INTO agence (nom, adresse, telephone, email, password)
    VALUES (?, ?, ?, ?, ?)
  `;
  const values = [agence.nom, agence.adresse, agence.telephone, agence.email, agence.password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion de l\'agence :', err);
      return callback(err, null);
    }
    callback(null, result);
  });
};

// 📌 Obtenir une agence par email
const getAgenceByEmail = (email, callback) => {
  const sql = `SELECT * FROM agence WHERE email = ?`;
  db.query(sql, [email], (err, result) => {
    if (err) {
      console.error('Erreur lors de la recherche de l\'email :', err);
      return callback(err, null);
    }
    callback(null, result);
  });
};

// 📌 Obtenir une agence par ID
const getAgenceById = (id_agence, callback) => {
  const sql = `SELECT * FROM agence WHERE id_agence = ?`;
  db.query(sql, [id_agence], (err, result) => {
    if (err) {
      console.error('Erreur lors de la recherche de l\'agence par ID :', err);
      return callback(err, null);
    }
    callback(null, result);
  });
};

module.exports = {
  createAgence,
  getAgenceByEmail,
  getAgenceById
};

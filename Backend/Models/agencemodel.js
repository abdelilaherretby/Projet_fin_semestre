const db = require('../config/db');

const createAgence = (agence, callback) => {
  const sql = 'INSERT INTO agence (nom, adresse, contact, email, password) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [agence.nom, agence.adresse, agence.contact, agence.email, agence.password], callback);
};

const getAgenceByEmail = (email, callback) => {
  db.query('SELECT * FROM agence WHERE email = ?', [email], callback);
};

module.exports = { createAgence, getAgenceByEmail };

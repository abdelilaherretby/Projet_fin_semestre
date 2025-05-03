const db = require('../config/db');

const createClient = (client, callback) => {
  const sql = 'INSERT INTO clients (nom,permis, email, age, contact, password) VALUES (?, ?, ?, ?, ?,?)';
  db.query(sql, [client.nom,client.permis, client.email, client.age, client.contact, client.password], callback);
};

const getClientByEmail = (email, callback) => {
  db.query('SELECT * FROM clients WHERE email = ?', [email], callback);
};

module.exports = { createClient, getClientByEmail };

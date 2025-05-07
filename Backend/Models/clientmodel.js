const db = require('../config/db');

const createClient = (client, callback) => {
  const sql = 'INSERT INTO client (nom,permis, email, age, contact, password) VALUES (?, ?, ?, ?, ?,?)';
  db.query(sql, [client.nom,client.permis, client.email, client.age, client.contact, client.password], callback);
};

const getClientByEmail = (email, callback) => {
  db.query('SELECT * FROM client WHERE email = ?', [email], callback);
};

// Met à jour un client, puis récupère ses données depuis la base
const updateClient = (id, updatedData) => {
  return new Promise((resolve, reject) => {
    const updateQuery = 'UPDATE client SET ? WHERE id = ?';

    db.query(updateQuery, [updatedData, id], (err, result) => {
      if (err) {
        return reject(err);
      }

      // Sélectionner les données mises à jour depuis la base 
      const selectQuery = 'SELECT id, nom, email, permis, age, contact FROM client WHERE id = ?';
      db.query(selectQuery, [id], (err, rows) => {
        if (err) {
          return reject(err);
        }
        // retourne les infos mises à jour
        resolve(rows[0]); 
      });
    });
  });
};

module.exports = { createClient, getClientByEmail, updateClient };

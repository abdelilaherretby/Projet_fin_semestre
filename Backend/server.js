const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const clientRoutes = require('./routes/clientRoutes');  // Routes pour les clients
const agenceRoutes = require('./routes/agenceRoutes');  // Routes pour les agences

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // l'adresse de ton frontend React 
    credentials: true
}));
app.use(express.json());



// Utilisation des routes pour clients et agences
app.use('/api/clients', clientRoutes); // Route pour les clients
app.use('/api/agences', agenceRoutes); // Route pour les agences

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

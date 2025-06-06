const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware de base
app.use(cors());
app.use(express.json());

// Route de test simple
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Elaia Studio API is running',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || 'development'
  });
});

// Route de test pour les variables d'environnement
app.get('/api/debug', (req, res) => {
  res.json({
    port: PORT,
    nodeEnv: process.env.NODE_ENV,
    hasDatabase: !!process.env.DATABASE_URL,
    hasSupabase: !!process.env.SUPABASE_URL
  });
});

// Démarrage
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Serveur simple démarré sur le port ${PORT}`);
  console.log(`📍 Mode: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app; 
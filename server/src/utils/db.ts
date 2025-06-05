// Sélection automatique de la base de données selon l'environnement
const isProduction = process.env.NODE_ENV === 'production';
const usePostgreSQL = isProduction || process.env.DATABASE_URL;

// Import conditionnel selon l'environnement
let dbModule;
if (usePostgreSQL) {
  console.log('🔄 Utilisation de PostgreSQL');
  dbModule = require('./database-pg');
} else {
  console.log('🔄 Utilisation de SQLite (développement)');
  dbModule = require('./database');
}

// Export des fonctions de base de données
export const { dbRun, dbGet, dbAll, closeDatabase } = dbModule; 
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Créer le pool de connexions PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Test de connexion
pool.connect((err, client, release) => {
  if (err) {
    console.error('❌ Erreur de connexion à PostgreSQL:', err.stack);
  } else {
    console.log('✅ Connecté à PostgreSQL (Supabase)');
    release();
  }
});

// Wrapper pour exécuter une requête qui modifie la base
export const dbRun = async (sql: string, params: any[] = []): Promise<any> => {
  try {
    const result = await pool.query(sql, params);
    return {
      lastID: result.rows[0]?.id,
      changes: result.rowCount
    };
  } catch (error) {
    console.error('Erreur dbRun:', error);
    throw error;
  }
};

// Wrapper pour récupérer une seule ligne
export const dbGet = async (sql: string, params: any[] = []): Promise<any> => {
  try {
    const result = await pool.query(sql, params);
    return result.rows[0];
  } catch (error) {
    console.error('Erreur dbGet:', error);
    throw error;
  }
};

// Wrapper pour récupérer plusieurs lignes
export const dbAll = async (sql: string, params: any[] = []): Promise<any[]> => {
  try {
    const result = await pool.query(sql, params);
    return result.rows;
  } catch (error) {
    console.error('Erreur dbAll:', error);
    throw error;
  }
};

// Fonction pour fermer le pool
export const closeDatabase = async () => {
  await pool.end();
  console.log('Pool PostgreSQL fermé');
};

// Export du pool pour des requêtes directes si nécessaire
export { pool }; 
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configuration CORS
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));

app.use(express.json());

// Configuration PostgreSQL Railway
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Test de connexion
pool.connect((err, client, release) => {
  if (err) {
    console.error('❌ Erreur connexion PostgreSQL Railway:', err);
  } else {
    console.log('✅ Connexion PostgreSQL Railway réussie !');
    release();
  }
});

// Initialisation des tables
async function initializeDatabase() {
  console.log('🔄 Initialisation de la base de données...');
  
  try {
    // Créer les tables si elles n'existent pas
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        role VARCHAR(50) DEFAULT 'client',
        credits_remaining INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS subscriptions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        plan_name VARCHAR(100),
        plan_type VARCHAR(50),
        credits_total INTEGER,
        credits_remaining INTEGER,
        start_date DATE,
        end_date DATE,
        status VARCHAR(50) DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS classes (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT,
        credits_required INTEGER DEFAULT 3,
        max_participants INTEGER DEFAULT 8,
        duration_minutes INTEGER DEFAULT 75,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS class_sessions (
        id SERIAL PRIMARY KEY,
        class_id INTEGER REFERENCES classes(id),
        instructor_id INTEGER REFERENCES users(id),
        start_time TIMESTAMP NOT NULL,
        end_time TIMESTAMP NOT NULL,
        available_spots INTEGER,
        status VARCHAR(50) DEFAULT 'scheduled',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS bookings (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        session_id INTEGER REFERENCES class_sessions(id),
        credits_used INTEGER,
        status VARCHAR(50) DEFAULT 'confirmed',
        booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        cancelled_at TIMESTAMP NULL
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS credit_history (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        type VARCHAR(50), -- 'purchase', 'usage', 'refund'
        amount INTEGER,
        description TEXT,
        remaining_after INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Insérer des données de test
    await insertTestData();
    
    console.log('✅ Base de données initialisée avec succès !');
  } catch (error) {
    console.error('❌ Erreur initialisation DB:', error);
  }
}

async function insertTestData() {
  try {
    // Vérifier si les données de test existent déjà
    const userCheck = await pool.query('SELECT COUNT(*) FROM users');
    if (parseInt(userCheck.rows[0].count) > 0) {
      console.log('📊 Données de test déjà présentes');
      return;
    }

    console.log('📊 Insertion des données de test...');

    // Utilisateurs de test
    await pool.query(`
      INSERT INTO users (email, password_hash, first_name, last_name, role, credits_remaining) VALUES
      ('admin@elaiastudio.ch', '$2b$10$hash', 'Admin', 'Test', 'admin', 50),
      ('marie.dupont@email.com', '$2b$10$hash', 'Marie', 'Dupont', 'client', 67),
      ('jean.martin@email.com', '$2b$10$hash', 'Jean', 'Martin', 'client', 25),
      ('sophie.bernard@email.com', '$2b$10$hash', 'Sophie', 'Bernard', 'client', 42)
    `);

    // Classes
    await pool.query(`
      INSERT INTO classes (name, description, credits_required, max_participants) VALUES
      ('Pilates Reformer Débutant', 'Cours parfait pour débuter le Pilates Reformer', 3, 8),
      ('Pilates Reformer Intermédiaire', 'Pour ceux qui maîtrisent les bases', 3, 8),
      ('Pilates Yoga Mat Détente', 'Cours doux alliant Pilates et Yoga', 2, 12),
      ('Pilates Reformer Avancé', 'Niveau expert pour les passionnés', 3, 6)
    `);

    // Abonnements
    await pool.query(`
      INSERT INTO subscriptions (user_id, plan_name, plan_type, credits_total, credits_remaining, start_date, end_date) VALUES
      (1, 'Pack 30 crédits', 'credits', 30, 50, CURRENT_DATE, CURRENT_DATE + INTERVAL '6 months'),
      (2, 'Pack 50 crédits', 'credits', 50, 67, CURRENT_DATE, CURRENT_DATE + INTERVAL '4 months'),
      (3, 'Pack 30 crédits', 'credits', 30, 25, CURRENT_DATE, CURRENT_DATE + INTERVAL '3 months'),
      (4, 'Pack 70 crédits', 'credits', 70, 42, CURRENT_DATE, CURRENT_DATE + INTERVAL '8 months')
    `);

    console.log('✅ Données de test insérées !');
  } catch (error) {
    console.error('❌ Erreur insertion données test:', error);
  }
}

// === ROUTES API ===

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Elaïa Studio API Railway PostgreSQL',
    timestamp: new Date().toISOString(),
    database: 'PostgreSQL Railway'
  });
});

// Authentification (simulation)
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  console.log('🔐 Tentative de connexion:', email);

  const validCredentials = 
    (email === 'admin@elaiastudio.ch' && password === 'admin123') ||
    (email === 'marie.dupont@email.com' && password === 'client123');

  if (!validCredentials) {
    return res.status(401).json({ error: 'Identifiants invalides' });
  }

  const isAdmin = email === 'admin@elaiastudio.ch';
  const token = isAdmin ? 'test-token-admin-123' : 'test-token-client-456';
  
  res.json({
    message: 'Connexion réussie',
    token,
    user: {
      id: isAdmin ? 1 : 2,
      email,
      first_name: isAdmin ? 'Admin' : 'Marie',
      last_name: isAdmin ? 'Test' : 'Dupont',
      role: isAdmin ? 'admin' : 'client'
    }
  });

  console.log(`✅ Connexion réussie: ${email}`);
});

// Profil utilisateur
app.get('/api/auth/me', async (req, res) => {
  const token = req.headers.authorization?.substring(7);
  
  try {
    let userId;
    if (token === 'test-token-admin-123') userId = 1;
    else if (token === 'test-token-client-456') userId = 2;
    else return res.status(401).json({ error: 'Token invalide' });

    const userResult = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
    const subscriptionResult = await pool.query('SELECT * FROM subscriptions WHERE user_id = $1 AND status = $2', [userId, 'active']);
    
    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }

    const user = userResult.rows[0];
    const subscription = subscriptionResult.rows[0];

    res.json({
      user: {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role,
        subscription: subscription ? {
          id: subscription.id,
          plan_name: subscription.plan_name,
          plan_type: subscription.plan_type,
          credits_remaining: subscription.credits_remaining,
          end_date: subscription.end_date,
          usage_stats: { total_bookings: 8 }
        } : null
      }
    });
  } catch (error) {
    console.error('❌ Erreur profil:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Mes réservations
app.get('/api/bookings/my-bookings', async (req, res) => {
  const { timeframe } = req.query;
  const token = req.headers.authorization?.substring(7);
  
  console.log('📋 Réservations demandées, timeframe:', timeframe);
  
  // Données simulées pour la démo (en attendant la vraie logique)
  const today = new Date();
  
  if (timeframe === 'future') {
    const futureBookings = [
      {
        id: 1,
        class_id: 101,
        start_time: new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000).toISOString(),
        end_time: new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000 + 75 * 60 * 1000).toISOString(),
        class_type_name: '🧘 Pilates Reformer Débutant',
        credits_used: 3,
        status: 'confirmed',
        instructor_first_name: 'Sarah',
        instructor_last_name: 'Martin'
      },
      {
        id: 2,
        class_id: 102,
        start_time: new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000).toISOString(),
        end_time: new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000 + 60 * 60 * 1000).toISOString(),
        class_type_name: '🌿 Pilates Yoga Mat Détente',
        credits_used: 2,
        status: 'confirmed',
        instructor_first_name: 'Emma',
        instructor_last_name: 'Rousseau'
      }
    ];
    res.json(futureBookings);
  } else {
    const pastBookings = [
      {
        id: 3,
        class_id: 201,
        start_time: new Date(today.getTime() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        end_time: new Date(today.getTime() - 3 * 24 * 60 * 60 * 1000 + 75 * 60 * 1000).toISOString(),
        class_type_name: '🧘 Pilates Reformer Débutant',
        credits_used: 3,
        status: 'completed',
        instructor_first_name: 'Sarah',
        instructor_last_name: 'Martin'
      },
      {
        id: 4,
        class_id: 202,
        start_time: new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        end_time: new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000 + 60 * 60 * 1000).toISOString(),
        class_type_name: '🌿 Pilates Yoga Mat Détente',
        credits_used: 2,
        status: 'completed',
        instructor_first_name: 'Emma',
        instructor_last_name: 'Rousseau'
      }
    ];
    res.json(pastBookings);
  }
});

// Abonnement/crédits
app.get('/api/credits/subscription', async (req, res) => {
  const token = req.headers.authorization?.substring(7);
  
  try {
    let userId;
    if (token === 'test-token-admin-123') userId = 1;
    else if (token === 'test-token-client-456') userId = 2;
    else return res.status(401).json({ error: 'Token invalide' });

    const result = await pool.query('SELECT * FROM subscriptions WHERE user_id = $1 AND status = $2', [userId, 'active']);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Aucun abonnement actif' });
    }

    const subscription = result.rows[0];
    
    res.json({
      subscription: {
        id: subscription.id,
        plan_name: subscription.plan_name,
        plan_type: subscription.plan_type,
        credits_remaining: subscription.credits_remaining,
        total_credits: subscription.credits_total,
        end_date: subscription.end_date,
        usage_stats: { total_bookings: 8 }
      }
    });
  } catch (error) {
    console.error('❌ Erreur abonnement:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Historique des crédits
app.get('/api/credits/history', async (req, res) => {
  const token = req.headers.authorization?.substring(7);
  
  try {
    let userId;
    if (token === 'test-token-admin-123') userId = 1;
    else if (token === 'test-token-client-456') userId = 2;
    else return res.status(401).json({ error: 'Token invalide' });

    const result = await pool.query(
      'SELECT * FROM credit_history WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20',
      [userId]
    );
    
    // Si pas d'historique, retourner des données simulées
    if (result.rows.length === 0) {
      const simulatedHistory = [
        {
          id: 1,
          type: 'purchase',
          amount: 50,
          description: 'Achat Pack 50 crédits',
          date: new Date().toISOString(),
          remaining_after: 50
        },
        {
          id: 2,
          type: 'usage',
          amount: -3,
          description: 'Réservation Pilates Reformer',
          date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
          remaining_after: 47
        }
      ];
      return res.json(simulatedHistory);
    }

    res.json(result.rows.map(row => ({
      id: row.id,
      type: row.type,
      amount: row.amount,
      description: row.description,
      date: row.created_at,
      remaining_after: row.remaining_after
    })));
  } catch (error) {
    console.error('❌ Erreur historique crédits:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// Planning des cours
app.get('/api/classes/schedule', (req, res) => {
  const today = new Date();
  const baseDate = today.toISOString().split('T')[0]; // Format YYYY-MM-DD
  
  res.json([
    {
      id: 101,
      start_time: `${baseDate}T09:00:00Z`,
      end_time: `${baseDate}T10:15:00Z`,
      class_type_name: 'Pilates Reformer Débutant',
      credits_required: 3,
      available_spots: 3,
      max_participants: 8,
      instructor_first_name: 'Sarah',
      instructor_last_name: 'Martin'
    },
    {
      id: 102,
      start_time: `${baseDate}T12:00:00Z`,
      end_time: `${baseDate}T13:00:00Z`,
      class_type_name: 'Pilates Yoga Mat Détente',
      credits_required: 2,
      available_spots: 6,
      max_participants: 12,
      instructor_first_name: 'Emma',
      instructor_last_name: 'Rousseau'
    }
  ]);
});

// Stats admin
app.get('/api/admin/stats', async (req, res) => {
  const token = req.headers.authorization?.substring(7);
  
  if (token !== 'test-token-admin-123') {
    return res.status(403).json({ error: 'Accès refusé' });
  }

  try {
    const userCount = await pool.query('SELECT COUNT(*) FROM users WHERE role = $1', ['client']);
    const totalCredits = await pool.query('SELECT SUM(credits_remaining) FROM subscriptions WHERE status = $1', ['active']);
    
    res.json({
      totalUsers: parseInt(userCount.rows[0].count),
      activeSubscriptions: 89,
      totalRevenue: 12650,
      averageCreditsPerUser: Math.round(parseInt(totalCredits.rows[0].sum || 0) / parseInt(userCount.rows[0].count || 1)),
      growthRate: 23.4,
      retentionRate: 85.2
    });
  } catch (error) {
    console.error('❌ Erreur stats admin:', error);
    res.json({
      totalUsers: 127,
      activeSubscriptions: 89,
      totalRevenue: 12650,
      averageCreditsPerUser: 28,
      growthRate: 23.4,
      retentionRate: 85.2
    });
  }
});

// Gestion d'erreurs
app.use((err, req, res, next) => {
  console.error('💥 Erreur serveur:', err);
  res.status(500).json({ 
    error: 'Erreur interne du serveur',
    message: err.message 
  });
});

// 404
app.use('*', (req, res) => {
  console.log('❓ Route non trouvée:', req.method, req.originalUrl);
  res.status(404).json({ 
    error: 'Route non trouvée',
    method: req.method,
    path: req.originalUrl 
  });
});

// Démarrage du serveur
initializeDatabase().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Serveur Elaïa Studio (Railway) démarré sur le port ${PORT}`);
    console.log(`🐘 PostgreSQL Railway connecté`);
  });
});

module.exports = app; 
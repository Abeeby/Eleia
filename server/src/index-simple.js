const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuration CORS très permissive pour debug
app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Route de test
app.get('/api/health', (req, res) => {
  console.log('✅ Health check OK');
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    message: 'Server is running'
  });
});

// Route login simplifiée pour test
app.post('/api/auth/login', (req, res) => {
  console.log('🔐 Login attempt:', req.body);
  
  const { email, password } = req.body;
  
  // Validation basique
  if (!email || !password) {
    return res.status(400).json({ 
      error: 'Email et mot de passe requis' 
    });
  }
  
  // Test avec admin (temporaire)
  if (email === 'admin@elaiastudio.ch' && password === 'admin123') {
    console.log('✅ Login successful for admin');
    return res.json({
      token: 'test-token-admin-123',
      user: {
        id: 1,
        email: 'admin@elaiastudio.ch',
        first_name: 'Admin',
        last_name: 'Test',
        role: 'admin'
      }
    });
  }
  
  // Test avec client (temporaire)
  if (email === 'marie.dupont@email.com' && password === 'client123') {
    console.log('✅ Login successful for client');
    return res.json({
      token: 'test-token-client-456',
      user: {
        id: 2,
        email: 'marie.dupont@email.com',
        first_name: 'Marie',
        last_name: 'Dupont',
        role: 'client'
      }
    });
  }
  
  console.log('❌ Invalid credentials');
  res.status(401).json({ error: 'Identifiants invalides' });
});

// Route register simplifiée
app.post('/api/auth/register', (req, res) => {
  console.log('📝 Register attempt:', req.body);
  
  res.json({
    message: 'Inscription temporairement désactivée - en mode debug',
    debug: true
  });
});

// Route me pour vérification du token
app.get('/api/auth/me', (req, res) => {
  console.log('👤 Me route called');
  console.log('Authorization header:', req.headers.authorization);
  
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('❌ No valid token provided');
    return res.status(401).json({ error: 'Token manquant' });
  }
  
  const token = authHeader.substring(7); // Remove "Bearer "
  
  // Vérification des tokens de test
  if (token === 'test-token-admin-123') {
    console.log('✅ Valid admin test token');
    return res.json({
      user: {
        id: 1,
        email: 'admin@elaiastudio.ch',
        first_name: 'Admin',
        last_name: 'Test',
        role: 'admin'
      }
    });
  }
  
  if (token === 'test-token-client-456') {
    console.log('✅ Valid client test token');
    return res.json({
      user: {
        id: 2,
        email: 'marie.dupont@email.com',
        first_name: 'Marie',
        last_name: 'Dupont',
        role: 'client'
      }
    });
  }
  
  console.log('❌ Invalid token:', token);
  res.status(401).json({ error: 'Token invalide' });
});

// Catch all 404
app.use('*', (req, res) => {
  console.log('❓ Route not found:', req.method, req.originalUrl);
  res.status(404).json({ 
    error: 'Route not found',
    method: req.method,
    path: req.originalUrl
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('💥 Server error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: err.message
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Debug server running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 Health check: http://0.0.0.0:${PORT}/api/health`);
});

module.exports = app; 
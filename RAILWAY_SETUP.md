# Configuration Railway pour Elaia Studio

## Variables d'environnement à configurer

Copiez ces variables dans Railway > Votre Service > Variables :

```
PORT=5000
NODE_ENV=production
JWT_SECRET=xK9mP2nQ8rT5vY3wA6zB1cE4dF7gH0jL
DATABASE_URL=postgresql://postgres:Amin1597532684$@db.jtazaosrsymffhxmwfyo.supabase.co:5432/postgres
SUPABASE_URL=https://jtazaosrsymffhxmwfyo.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0YXphb3Nyc3ltZmZoeG13ZnlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYwMTQzODYsImV4cCI6MjA1MTU5MDM4Nn0.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0YXphb3Nyc3ltZmZoeG13ZnlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYwMTQzODYsImV4cCI6MjA1MTU5MDM4Nn0
FRONTEND_URL=https://eleia.vercel.app
```

## Important
- Ces variables sont dans le fichier `server/railway.env` temporairement
- Supprimez ce fichier après avoir configuré Railway
- Changez le mot de passe de la base de données après la configuration 
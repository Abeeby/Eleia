# Swiss Pilates Studio - Premium Pilates in Switzerland 🇨🇭

Un site web premium pour studio de Pilates en Suisse, inspiré du design minimaliste d'[ohemia.de](https://ohemia.de). Conçu pour être le #1 des studios de Pilates en Suisse.

## 🎯 Vision

Créer la référence digitale pour les studios de Pilates en Suisse avec :
- Design ultra-minimaliste et moderne
- Performance optimale (Score Lighthouse 100/100)
- SEO multilingue pour la Suisse
- Expérience utilisateur exceptionnelle

## 🚀 Technologies

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Type safety et meilleure DX
- **Tailwind CSS** - Styling utility-first
- **Framer Motion** - Animations fluides
- **next-intl** - i18n pour FR/DE/IT/EN
- **Vercel Analytics** - Tracking performance

## 📁 Structure du projet

```
swiss-pilates-studio/
├── app/                     # Pages et routes (App Router)
│   ├── layout.tsx          # Layout principal avec SEO
│   ├── page.tsx           # Page d'accueil
│   ├── booking/           # Réservation en ligne
│   ├── about/             # Pages à propos
│   │   ├── studio/
│   │   ├── philosophy/
│   │   ├── team/
│   │   └── projects/
│   ├── academy/           # Formation Pilates
│   ├── pricing/           # Tarifs
│   └── contact/           # Contact
├── components/            # Composants réutilisables
│   ├── navbar.tsx        # Navigation sticky
│   ├── footer.tsx        # Footer minimaliste
│   ├── service-card.tsx  # Cards services
│   ├── instructor-card.tsx
│   ├── testimonial-card.tsx
│   ├── newsletter.tsx
│   └── instagram-feed.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utilitaires
├── messages/             # Traductions i18n
├── public/              # Assets statiques
├── styles/              # CSS global
└── types/               # TypeScript types

```

## 🎨 Design System

### Couleurs
- **White**: #FFFFFF
- **Cream**: #FAFAFA (background principal)
- **Black**: #000000
- **Gray Scale**: 50-900

### Typographie
- **Font**: Inter (100-900 weights)
- **Display**: Très grandes tailles (jusqu'à 10rem)
- **Tracking**: Ajusté pour chaque taille

### Composants
- Navigation sticky avec effet transparent/opaque
- Grilles 3 colonnes pour services
- Cards minimalistes avec hover subtils
- Formulaires élégants
- Animations au scroll

## 🛠️ Installation

```bash
# Cloner le repository
git clone [votre-repo]

# Installer les dépendances
cd swiss-pilates-studio
npm install

# Lancer en développement
npm run dev

# Build production
npm run build
```

## 🌐 Internationalisation

Le site supporte 4 langues pour la Suisse :
- 🇫🇷 Français (défaut)
- 🇩🇪 Allemand
- 🇮🇹 Italien  
- 🇬🇧 Anglais

Routes automatiques : `/fr`, `/de`, `/it`, `/en`

## 📈 SEO & Performance

### SEO Technique
- Meta tags dynamiques
- Structured data
- Sitemap XML
- Robots.txt optimisé
- URLs canoniques
- Alternate hreflang

### Performance
- Images optimisées (AVIF/WebP)
- Lazy loading
- Code splitting
- Fonts optimisées
- Score Lighthouse visé : 100/100

### SEO Local Suisse
- Schema.org LocalBusiness
- Google My Business ready
- Citations locales
- Contenu par canton

## 🔧 Configuration

### Variables d'environnement
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://swiss-pilates.ch
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
INSTAGRAM_TOKEN=your_token
MAILCHIMP_API_KEY=your_key
```

### Domaines d'images
Configurés dans `next.config.js` :
- images.unsplash.com
- via.placeholder.com
- Votre CDN

## 📱 Fonctionnalités

### Implémentées ✅
- Page d'accueil style Ohemia
- Navigation responsive
- Services (Yoga, Pilates, Reformer)
- Grille instructeurs
- Témoignages clients
- Newsletter avec consentement
- Feed Instagram
- Animations Framer Motion

### À implémenter 🚧
- Système de réservation en ligne
- Calendrier des cours
- Espace membre
- Paiement en ligne
- Blog/Actualités
- Boutique en ligne
- App mobile

## 🚀 Déploiement

### Vercel (recommandé)
```bash
npm i -g vercel
vercel
```

### Configuration DNS
Pointez votre domaine vers Vercel et configurez :
- swiss-pilates.ch
- www.swiss-pilates.ch
- Sous-domaines par langue si souhaité

## 📊 Analytics & Monitoring

- **Vercel Analytics** - Performance metrics
- **Google Analytics 4** - User behavior
- **Search Console** - SEO monitoring
- **Hotjar** - Heatmaps & recordings

## 🎯 Stratégie TOP 1 Suisse

1. **SEO Local** - Optimisation par ville/canton
2. **Content Marketing** - Blog bilingue
3. **Social Media** - Instagram, TikTok
4. **Google Ads** - Campagnes ciblées
5. **Partenariats** - Influenceurs fitness
6. **Reviews** - Google, Facebook, Trustpilot

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'Add AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Propriétaire - Swiss Pilates Studio © 2024

---

Développé avec ❤️ pour dominer le marché du Pilates en Suisse
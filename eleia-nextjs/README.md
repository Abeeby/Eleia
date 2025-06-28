# Eleia - Site E-commerce Beauté Naturelle

Un site e-commerce moderne et élégant pour la marque de cosmétiques naturels Eleia, inspiré du style minimaliste et féminin d'Ohemia.de.

## 🌿 Aperçu

Ce projet est une implémentation Next.js d'un site e-commerce de beauté avec :
- Design minimaliste et aéré
- Palette de couleurs naturelles (beige, sage, terracotta)
- Animations fluides avec Framer Motion
- Interface responsive mobile-first
- Expérience utilisateur optimisée

## 🚀 Technologies utilisées

- **Next.js 14** - Framework React avec SSR/SSG
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utility-first
- **Framer Motion** - Animations fluides
- **Swiper** - Carrousels d'images
- **React Intersection Observer** - Animations au scroll

## 📁 Structure du projet

```
eleia-nextjs/
├── app/                      # Pages de l'application (App Router)
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Page d'accueil
│   ├── shop/                # Page boutique
│   ├── product/[slug]/      # Pages produits dynamiques
│   ├── about/               # Page à propos
│   └── contact/             # Page contact
├── components/              # Composants réutilisables
│   ├── Layout.tsx          # Layout avec SEO
│   ├── Navbar.tsx          # Navigation avec menu burger
│   ├── Footer.tsx          # Pied de page
│   ├── ProductCard.tsx     # Carte produit
│   ├── ImageCarousel.tsx   # Carrousel d'images
│   └── CategoryFilter.tsx  # Filtre par catégorie
├── styles/                 # Styles globaux
│   └── globals.css        # CSS global avec Tailwind
├── public/                # Assets statiques
└── lib/                   # Utilitaires et helpers
```

## 🎨 Design System

### Couleurs
- **Cream**: #FAF9F6 - Fond principal
- **Beige**: Palette de 50 à 900 - Textes et éléments UI
- **Sage**: Palette verte naturelle - Accents
- **Terracotta**: Palette terre cuite - Alerts et CTA

### Typographie
- **Display**: Playfair Display - Titres
- **Sans**: Inter - Corps de texte
- **Serif**: Crimson Text - Accents

### Composants clés
- Navigation sticky avec effet de transparence
- Cards produits avec hover effects
- Carrousels fullscreen avec overlay
- Formulaires minimalistes
- Boutons avec transitions douces

## 🛠️ Installation

1. Cloner le repository
```bash
cd eleia-nextjs
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer le serveur de développement
```bash
npm run dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000)

## 📱 Pages principales

### Page d'accueil (/)
- Hero section avec carrousel fullscreen
- Section produits vedettes
- Présentation de la philosophie
- Newsletter

### Boutique (/shop)
- Grille de produits responsive
- Filtrage par catégorie
- Tri (prix, nom, etc.)
- Animations au scroll

### Page produit (/product/[slug])
- Galerie d'images avec zoom
- Sélection taille/quantité
- Tabs description/ingrédients
- Produits similaires

### À propos (/about)
- Histoire de la marque
- Valeurs (avec icônes)
- Équipe
- Mission

### Contact (/contact)
- Formulaire de contact
- Informations de contact
- Horaires d'ouverture
- Carte (placeholder)

## 🔧 Configuration

### Variables d'environnement
Créer un fichier `.env.local` :
```env
NEXT_PUBLIC_API_URL=votre_api_url
```

### Domaines d'images
Les domaines Unsplash sont déjà configurés dans `next.config.js`.

## 🚀 Déploiement

### Vercel (recommandé)
```bash
npm run build
vercel
```

### Build statique
```bash
npm run build
npm run start
```

## 📈 Optimisations

- Images optimisées avec Next.js Image
- Lazy loading des composants
- Code splitting automatique
- Fonts optimisées
- CSS minifié

## 🎯 Prochaines étapes

1. **Backend & API**
   - Intégration avec Strapi/Sanity
   - Gestion des stocks
   - Système de paiement

2. **Fonctionnalités**
   - Panier d'achat fonctionnel
   - Compte utilisateur
   - Wishlist
   - Recherche avancée
   - Blog intégré

3. **Marketing**
   - SEO avancé
   - Analytics
   - Pixel Facebook
   - Newsletter automation

4. **International**
   - Multi-langue (i18n)
   - Multi-devise
   - Livraison internationale

## 📄 Licence

Ce projet est sous licence privée pour Eleia.

---

Développé avec ❤️ pour Eleia - Natural Beauty & Wellness
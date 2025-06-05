import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Calendar, Heart, Award, Clock, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const testimonials = [
    {
      name: "Sophie L.",
      rating: 5,
      text: "Elaïa Studio a transformé ma pratique du Pilates. Les instructeurs sont exceptionnels et l'ambiance est toujours bienveillante.",
    },
    {
      name: "Marc D.",
      rating: 5,
      text: "Après 6 mois, je me sens plus fort et plus équilibré. Le Pilates Reformer a vraiment changé ma vie !",
    },
    {
      name: "Claire M.",
      rating: 5,
      text: "Un studio magnifique avec des équipements de qualité. Je recommande vivement pour tous les niveaux.",
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Santé & Bien-être",
      description: "Améliorez votre posture, renforcez votre corps et réduisez le stress",
    },
    {
      icon: Users,
      title: "Cours Personnalisés",
      description: "Des séances adaptées à vos besoins avec un suivi individualisé",
    },
    {
      icon: Award,
      title: "Instructeurs Certifiés",
      description: "Une équipe d'experts passionnés pour vous guider en toute sécurité",
    },
    {
      icon: Clock,
      title: "Horaires Flexibles",
      description: "Des cours du matin au soir pour s'adapter à votre emploi du temps",
    },
  ];

  return (
    <div className="bg-elaia-beige">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-elaia-gold/20 to-elaia-green/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-alex text-elaia-gold mb-6">
              Bienvenue chez Elaïa
            </h1>
            <p className="text-xl md:text-2xl text-elaia-gray mb-8 max-w-3xl mx-auto">
              Découvrez le Pilates Reformer dans notre studio à Gland et transformez votre corps en douceur
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="btn-primary text-lg px-8 py-4">
                Commencer maintenant
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Link>
              <Link to="/pricing" className="btn-secondary text-lg px-8 py-4">
                Découvrir nos offres
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Offre Welcome */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-elaia-gold to-elaia-green rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-4xl font-alex mb-4">Offre Welcome</h2>
            <div className="flex items-center justify-center mb-6">
              <Star className="h-8 w-8 mr-2" />
              <p className="text-2xl font-semibold">1 Séance achetée + 2 offertes</p>
              <Star className="h-8 w-8 ml-2" />
            </div>
            <p className="text-5xl font-bold mb-6">45 CHF</p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Profitez de cette offre exclusive pour découvrir notre studio et commencer votre transformation
            </p>
            <Link 
              to="/register" 
              className="inline-block bg-white text-elaia-gray px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Je profite de l'offre
            </Link>
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-elaia-gray mb-4">
              Pourquoi choisir Elaïa Studio ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un espace unique dédié à votre bien-être et à votre transformation physique
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-elaia-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-elaia-gold" />
                </div>
                <h3 className="text-xl font-semibold text-elaia-gray mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de cours */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-elaia-gray mb-4">
              Nos Cours
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deux approches complémentaires pour votre pratique
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card hover:shadow-xl transition-all">
              <div className="h-48 bg-gradient-to-br from-elaia-gold/20 to-elaia-green/20 rounded-lg mb-6"></div>
              <h3 className="text-2xl font-semibold text-elaia-gray mb-3">
                Pilates Reformer (PF)
              </h3>
              <p className="text-gray-600 mb-4">
                Travaillez en profondeur avec nos machines Reformer pour un renforcement musculaire optimal et une amélioration de votre posture.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-elaia-gold font-semibold">3 crédits par séance</span>
                <Link to="/schedule" className="text-elaia-green hover:text-elaia-gold flex items-center">
                  Réserver <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="card hover:shadow-xl transition-all">
              <div className="h-48 bg-gradient-to-br from-elaia-mint/20 to-elaia-rose/20 rounded-lg mb-6"></div>
              <h3 className="text-2xl font-semibold text-elaia-gray mb-3">
                Pilates Yoga Mat (PYM)
              </h3>
              <p className="text-gray-600 mb-4">
                Combinez les bienfaits du Pilates et du Yoga sur tapis pour améliorer votre flexibilité, votre équilibre et votre bien-être.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-elaia-gold font-semibold">2 crédits par séance</span>
                <Link to="/schedule" className="text-elaia-green hover:text-elaia-gold flex items-center">
                  Réserver <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-elaia-gray mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-gray-600">
              Rejoignez notre communauté de pratiquants satisfaits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card hover:shadow-xl transition-all">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-elaia-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-elaia-gray">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-elaia-green to-elaia-mint">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à transformer votre corps ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez Elaïa Studio aujourd'hui et découvrez une nouvelle façon de prendre soin de vous
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="bg-white text-elaia-gray px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all">
              Créer mon compte
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Calendar className="h-12 w-12 text-elaia-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-elaia-gray mb-2">Horaires flexibles</h3>
              <p className="text-gray-600">
                Du lundi au dimanche<br />
                De 7h à 21h
              </p>
            </div>
            <div>
              <Users className="h-12 w-12 text-elaia-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-elaia-gray mb-2">Petits groupes</h3>
              <p className="text-gray-600">
                Maximum 6 personnes<br />
                Pour un suivi personnalisé
              </p>
            </div>
            <div>
              <Heart className="h-12 w-12 text-elaia-mint mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-elaia-gray mb-2">Tous niveaux</h3>
              <p className="text-gray-600">
                Débutants bienvenus<br />
                Progression adaptée
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
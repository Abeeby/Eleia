import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Heart, Award, Clock, ChevronRight, ChevronLeft, Sparkles, Target, Zap, CheckCircle, PlayCircle, Calendar, TrendingUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import AnimatedCounter from '../components/AnimatedCounter';
import { useNotifications } from '../components/NotificationSystem';

export default function HomePage() {
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const notifications = useNotifications();

  useEffect(() => {
    setIsVisible(true);
    
    // Observer pour les animations lors du scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === statsRef.current && entry.isIntersecting) {
            setShowStats(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    // Notification de bienvenue après 3 secondes
    const welcomeTimer = setTimeout(() => {
      notifications.showSuccess(
        "Bienvenue chez Elaïa ! 🌿",
        "Découvrez notre offre Welcome : 1 séance achetée + 1 offerte !",
        {
          label: "Voir l'offre",
          onClick: () => document.getElementById('welcome-offer')?.scrollIntoView({ behavior: 'smooth' })
        }
      );
    }, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(welcomeTimer);
    };
  }, [notifications]);

  const testimonials = [
    {
      name: "Albina - Fondatrice",
      rating: 5,
      text: "Diplômée avec maîtrise fédérale, j'ai à cœur de transmettre une pratique du Pilates exigeante et bienveillante pour accompagner chacun vers ses objectifs.",
    },
    {
      name: "Formation Continue",
      rating: 5,
      text: "Notre équipe suit régulièrement des formations pour vous offrir les techniques les plus actuelles et efficaces du Pilates Reformer.",
    },
    {
      name: "Équipement Premium",
      rating: 5,
      text: "8 Reformers haut de gamme dans un studio lumineux de 120m² à Gland, conçu spécialement pour votre confort et sécurité.",
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
      description: "Des séances adaptées à vos besoins avec un suivi individualisé de 1 à 10 personnes max",
    },
    {
      icon: Award,
      title: "Instructeurs Certifiés", 
      description: "Une équipe d'experts passionnés pour vous guider en toute sécurité",
    },
    {
      icon: Clock,
      title: "Tous niveaux",
      description: "Débutants bienvenus, progression adaptée à chacun",
    },
  ];

  const courses = [
    {
      id: 'reformer-classique',
      title: 'Reformer Classique',
      description: 'Renforcez votre corps en profondeur, améliorez votre posture et développez votre stabilité grâce à une approche fidèle à la méthode originale de Joseph Pilates.',
      credits: 3,
      intensity: 3,
      relaxation: 3,
      breathing: 3,
      image: 'cours-1.jpg'
    },
    {
      id: 'dynamique-flow',
      title: 'Reformer Dynamique Flow',
      description: 'Un entraînement complet et rythmé conçu pour renforcer l\'ensemble du corps de façon fluide et harmonieuse.',
      credits: 3,
      intensity: 5,
      relaxation: 1,
      breathing: 2,
      image: 'cours-2.jpg'
    },
    {
      id: 'booty-core',
      title: 'Reformer Booty & Core',
      description: 'Un cours ciblé et puissant pour tonifier les fessiers, affiner les jambes et renforcer les abdominaux profonds.',
      credits: 3,
      intensity: 5,
      relaxation: 1,
      breathing: 2,
      image: 'cours-3.jpg'
    },
    {
      id: 'balance',
      title: 'Reformer Balance',
      description: 'Une pratique douce et rééquilibrante pour retrouver fluidité, légèreté et ancrage dans votre corps.',
      credits: 3,
      intensity: 2,
      relaxation: 5,
      breathing: 4,
      image: 'cours-4.jpg'
    },
    {
      id: 'prenatal',
      title: 'Pré & Post-natal',
      description: 'Pensé pour accompagner les mamans avant et après l\'accouchement, ce cours allie douceur, renforcement et mobilité.',
      credits: 3,
      intensity: 3,
      relaxation: 3,
      breathing: 4,
      image: 'cours-5.jpg'
    },
    {
      id: 'power-vinyasa',
      title: 'Power Vinyasa Yoga',
      description: 'Un yoga énergisant qui allie force, fluidité et respiration dans une séquence dynamique et engageante.',
      credits: 2,
      intensity: 5,
      relaxation: 1,
      breathing: 3,
      image: 'cours-6.jpg'
    },
    {
      id: 'yoga-doux',
      title: 'Yoga Doux',
      description: 'Un moment de calme et d\'introspection pour relâcher les tensions du corps et de l\'esprit.',
      credits: 2,
      intensity: 1,
      relaxation: 5,
      breathing: 5,
      image: 'cours-7.jpg'
    },
    {
      id: 'pilates',
      title: 'Pilates',
      description: 'Un entraînement complet et ciblé pour renforcer, tonifier et sculpter l\'ensemble du corps.',
      credits: 2,
      intensity: 3,
      relaxation: 3,
      breathing: 3,
      image: 'cours-8.jpg'
    }
  ];

  const partners = [
    { name: 'Partenaire 1', logo: '/logos/partner1.png' },
    { name: 'Partenaire 2', logo: '/logos/partner2.png' },
    { name: 'Partenaire 3', logo: '/logos/partner3.png' },
    { name: 'Partenaire 4', logo: '/logos/partner4.png' },
    { name: 'Partenaire 5', logo: '/logos/partner5.png' },
    { name: 'Partenaire 6', logo: '/logos/partner6.png' },
  ];

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < count ? 'text-elaia-gold fill-current' : 'text-gray-300'}`} />
    ));
  };

  const nextCourse = () => {
    setCurrentCourseIndex((prev) => (prev + 1) % courses.length);
  };

  const prevCourse = () => {
    setCurrentCourseIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  return (
    <div className="bg-elaia-beige">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-elaia-gold/20 to-elaia-green/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-20 left-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-30' : 'translate-y-10 opacity-0'}`}>
            <Sparkles className="h-8 w-8 text-elaia-gold animate-pulse" />
          </div>
          <div className={`absolute top-1/3 right-20 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-20' : 'translate-y-10 opacity-0'}`}>
            <Target className="h-12 w-12 text-elaia-green animate-spin-slow" />
          </div>
          <div className={`absolute bottom-1/4 left-1/4 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-25' : 'translate-y-10 opacity-0'}`}>
            <Zap className="h-6 w-6 text-elaia-mint animate-bounce" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-5xl md:text-7xl font-alex text-elaia-gold mb-6 animate-fade-in-up">
                Bienvenue chez Elaïa
              </h1>
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-elaia-gold mr-2 animate-pulse" />
                <span className="text-lg font-medium text-elaia-gray">Studio de Pilates Reformer • Gland</span>
                <Sparkles className="h-6 w-6 text-elaia-gold ml-2 animate-pulse" />
              </div>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-xl md:text-2xl text-elaia-gray mb-8 max-w-3xl mx-auto">
                Découvrez le Pilates Reformer dans notre studio à Gland et transformez votre corps en douceur
              </p>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Link to="/register" className="btn-primary text-lg px-8 py-4 group hover:scale-105 transition-all">
                <PlayCircle className="mr-2 h-5 w-5 inline group-hover:animate-pulse" />
                Commencer maintenant
                <ArrowRight className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/pricing" className="btn-secondary text-lg px-8 py-4 hover:scale-105 transition-all">
                <Calendar className="mr-2 h-5 w-5 inline" />
                Découvrir nos offres
              </Link>
            </div>

            {/* CTA secondaire avec stats */}
            <div className={`mt-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-elaia-gray">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Ouverture juillet 2025</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Instructrice maîtrise fédérale</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Équipement Reformer premium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Statistiques Animées */}
      <section ref={statsRef} className="py-20 bg-gradient-to-r from-elaia-green to-elaia-mint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Elaïa en chiffres
            </h2>
            <p className="text-xl text-white/90">
              L'excellence avant l'ouverture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-white/90" />
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {showStats ? (
                  <AnimatedCounter end={8} duration={2000} />
                ) : (
                  "0"
                )}
              </div>
              <p className="text-lg text-white/90">Reformers premium</p>
            </div>
            
            <div className="text-center text-white">
              <Target className="h-12 w-12 mx-auto mb-4 text-white/90" />
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {showStats ? (
                  <AnimatedCounter end={100} suffix="%" duration={2500} />
                ) : (
                  "0"
                )}
              </div>
              <p className="text-lg text-white/90">Certification instructeurs</p>
            </div>
            
            <div className="text-center text-white">
              <Zap className="h-12 w-12 mx-auto mb-4 text-white/90" />
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {showStats ? (
                  <AnimatedCounter end={1} duration={1500} />
                ) : (
                  "0"
                )}
              </div>
              <p className="text-lg text-white/90">Maîtrise fédérale</p>
            </div>
            
            <div className="text-center text-white">
              <Award className="h-12 w-12 mx-auto mb-4 text-white/90" />
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {showStats ? (
                  <AnimatedCounter end={10} suffix="+" duration={2000} />
                ) : (
                  "0"
                )}
              </div>
              <p className="text-lg text-white/90">Années d'expérience Albina</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offre Welcome */}
      <section id="welcome-offer" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-elaia-gold to-elaia-green rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-4xl font-alex mb-4">Offre Welcome</h2>
            <div className="flex items-center justify-center mb-6">
              <Star className="h-8 w-8 mr-2" />
              <p className="text-2xl font-semibold">1 Séance achetée + 1 offerte</p>
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

      {/* Nos Cours - Nouveau Design */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-elaia-gray mb-4">
              Nos Cours
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète de cours adaptés à tous les niveaux
            </p>
          </div>
          
          <div className="relative">
            {/* Navigation buttons */}
            <button 
              onClick={prevCourse}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-elaia-gray" />
            </button>
            <button 
              onClick={nextCourse}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all"
            >
              <ChevronRight className="h-6 w-6 text-elaia-gray" />
            </button>

            {/* Course carousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentCourseIndex * 100}%)` }}
              >
                {courses.map((course) => (
                  <div key={course.id} className="w-full flex-shrink-0 px-8">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
                      <div className="md:flex">
                        <div className="md:w-1/2">
                          <div className="h-64 md:h-full bg-gradient-to-br from-elaia-gold/20 to-elaia-green/20 flex items-center justify-center">
                            <div className="text-center p-8">
                              <h3 className="text-2xl font-bold text-elaia-gray mb-4">{course.title}</h3>
                              <div className="text-sm text-elaia-gray space-y-2">
                                <div className="flex items-center justify-center">
                                  <span className="font-medium mr-2">Intensité:</span>
                                  <div className="flex">{renderStars(course.intensity)}</div>
                                </div>
                                <div className="flex items-center justify-center">
                                  <span className="font-medium mr-2">Relaxation:</span>
                                  <div className="flex">{renderStars(course.relaxation)}</div>
                                </div>
                                <div className="flex items-center justify-center">
                                  <span className="font-medium mr-2">Respiration:</span>
                                  <div className="flex">{renderStars(course.breathing)}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-1/2 p-8">
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {course.description}
                          </p>
                          <div className="mb-6">
                            <span className="text-elaia-gold font-semibold">
                              {course.credits} crédits par séance
                            </span>
                          </div>
                          <Link 
                            to={`/schedule?course=${course.id}`}
                            className="btn-primary inline-flex items-center"
                          >
                            Réserver dès maintenant
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Course indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {courses.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCourseIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentCourseIndex 
                      ? 'bg-elaia-gold' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-elaia-gray mb-4">
              L'expertise reconnue
            </h2>
            <p className="text-lg text-gray-600">
              La passion et la formation au service de votre bien-être
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

      {/* Ils nous font confiance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-elaia-gray mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-lg text-gray-600">
              Nos partenaires qui partagent notre vision du bien-être
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                <div className="w-24 h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                  {partner.name}
                </div>
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
    </div>
  );
} 
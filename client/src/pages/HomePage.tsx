import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Heart, Award, Clock, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

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
                {courses.map((course, _) => (
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
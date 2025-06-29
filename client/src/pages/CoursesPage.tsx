// Note: Cette page n'est plus accessible depuis la navigation principale
// Elle reste disponible pour référence mais les utilisateurs sont redirigés vers /schedule

import React, { useState } from 'react';
import { Star, ArrowRight, Clock, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  intensity: number;
  duration: string;
  participants: string;
  credits: number;
  level: string;
  benefits: string[];
  image: string;
}

const CoursesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses: Course[] = [
    {
      id: 'reformer-classique',
      title: 'Reformer Classique',
      subtitle: 'L\'essence du Pilates',
      description: 'Renforcez votre corps en profondeur, améliorez votre posture et développez votre stabilité grâce à une approche fidèle à la méthode originale de Joseph Pilates.',
      intensity: 3,
      duration: '50 min',
      participants: '6 personnes max',
      credits: 3,
      level: 'Tous niveaux',
      benefits: ['Améliore la posture', 'Renforce le core', 'Développe la stabilité'],
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800'
    },
    {
      id: 'reformer-dynamique-flow',
      title: 'Reformer Dynamique Flow',
      subtitle: 'Énergie et fluidité',
      description: 'Un entraînement complet et rythmé conçu pour renforcer l\'ensemble du corps de façon fluide et harmonieuse.',
      intensity: 5,
      duration: '50 min',
      participants: '6 personnes max',
      credits: 3,
      level: 'Intermédiaire/Avancé',
      benefits: ['Entraînement complet', 'Améliore la coordination', 'Tonifie tout le corps'],
      image: 'https://images.unsplash.com/photo-1599901860146-d62f2ebdb5d4?w=800'
    },
    {
      id: 'reformer-booty-core',
      title: 'Reformer Booty & Core',
      subtitle: 'Sculpter et tonifier',
      description: 'Un cours ciblé et puissant pour tonifier les fessiers, affiner les jambes et renforcer les abdominaux profonds.',
      intensity: 5,
      duration: '50 min',
      participants: '6 personnes max',
      credits: 3,
      level: 'Intermédiaire/Avancé',
      benefits: ['Tonifie les fessiers', 'Renforce les abdos', 'Sculpte la silhouette'],
      image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800'
    },
    {
      id: 'reformer-balance',
      title: 'Reformer Balance',
      subtitle: 'Douceur et équilibre',
      description: 'Une pratique douce et rééquilibrante pour retrouver fluidité, légèreté et ancrage dans votre corps.',
      intensity: 2,
      duration: '50 min',
      participants: '6 personnes max',
      credits: 3,
      level: 'Tous niveaux',
      benefits: ['Pratique douce', 'Améliore la mobilité', 'Apaise les tensions'],
      image: 'https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?w=800'
    },
    {
      id: 'pre-post-natal',
      title: 'Pré & Post-natal',
      subtitle: 'Accompagnement maternel',
      description: 'Pensé pour accompagner les mamans avant et après l\'accouchement, ce cours allie douceur, renforcement et mobilité.',
      intensity: 3,
      duration: '50 min',
      participants: '4 personnes max',
      credits: 3,
      level: 'Adapté',
      benefits: ['Spécialisé grossesse', 'Travail du périnée', 'Accompagnement personnalisé'],
      image: 'https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=800'
    },
    {
      id: 'power-vinyasa-yoga',
      title: 'Power Vinyasa Yoga',
      subtitle: 'Force et fluidité',
      description: 'Un yoga énergisant qui allie force, fluidité et respiration dans une séquence dynamique et engageante.',
      intensity: 5,
      duration: '60 min',
      participants: '8 personnes max',
      credits: 2,
      level: 'Intermédiaire/Avancé',
      benefits: ['Yoga dynamique', 'Améliore la souplesse', 'Renforce le corps'],
      image: 'https://images.unsplash.com/photo-1506126613715-e00b0af6e0a8?w=800'
    },
    {
      id: 'yoga-doux',
      title: 'Yoga Doux',
      subtitle: 'Sérénité et conscience',
      description: 'Un moment de calme et d\'introspection pour relâcher les tensions du corps et de l\'esprit.',
      intensity: 1,
      duration: '60 min',
      participants: '8 personnes max',
      credits: 2,
      level: 'Tous niveaux',
      benefits: ['Pratique accessible', 'Réduit le stress', 'Pleine conscience'],
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800'
    },
    {
      id: 'pilates',
      title: 'Pilates',
      subtitle: 'Renforcement global',
      description: 'Un entraînement complet et ciblé pour renforcer, tonifier et sculpter l\'ensemble du corps.',
      intensity: 3,
      duration: '50 min',
      participants: '8 personnes max',
      credits: 2,
      level: 'Tous niveaux',
      benefits: ['Exercices au sol', 'Engage muscles profonds', 'Améliore la posture'],
      image: 'https://images.unsplash.com/photo-1594737626072-90dc274bc2bd?w=800'
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les cours' },
    { id: 'reformer', name: 'Reformer' },
    { id: 'yoga', name: 'Yoga' },
    { id: 'pilates', name: 'Pilates' },
    { id: 'special', name: 'Spécialisés' }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => {
        if (selectedCategory === 'reformer') return course.id.includes('reformer');
        if (selectedCategory === 'yoga') return course.id.includes('yoga');
        if (selectedCategory === 'pilates') return course.id === 'pilates';
        if (selectedCategory === 'special') return course.id === 'pre-post-natal';
        return true;
      });

  const renderIntensity = (level: number) => {
    return (
      <div className="flex items-center space-x-1">
        {Array.from({ length: 5 }, (_, i) => (
          <div
        key={i}
            className={`h-1 w-8 ${
              i < level ? 'bg-ohemia-accent' : 'bg-elaia-muted'
        }`}
      />
        ))}
      </div>
    );
  };

  return (
    <>
      <SEOHead 
        title="Nos Cours - Pilates & Yoga à Gland | Elaïa Studio"
        description="Découvrez notre gamme complète de cours : Reformer Classique, Yoga Doux, Pilates, cours pré/post-natal. Instructrice certifiée avec maîtrise fédérale."
        keywords={["cours pilates gland", "reformer classique", "yoga doux", "cours prenatal", "pilates accessoires", "cours yoga vinyasa"]}
      />
      
      <div className="min-h-screen bg-elaia-cream">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1920" 
              alt="Studio Elaïa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-elaia-charcoal/60 to-elaia-charcoal/40"></div>
          </div>
          
          <div className="relative z-10 text-center text-elaia-white px-6">
            <h1 className="heading-xl mb-4">Nos Cours</h1>
            <p className="body-lg max-w-2xl mx-auto opacity-90">
              Explorez notre sélection de cours conçus pour révéler votre potentiel
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="sticky top-20 z-30 bg-elaia-white shadow-sm">
          <div className="container-custom py-6">
            <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`text-sm font-inter uppercase tracking-wider whitespace-nowrap pb-2 transition-all ${
                    selectedCategory === category.id
                      ? 'text-elaia-charcoal border-b-2 border-elaia-charcoal'
                      : 'text-elaia-warm-gray hover:text-elaia-charcoal'
                  }`}
                >
                  {category.name}
                </button>
              ))}
          </div>
        </div>
        </section>

        {/* Courses Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
              <div
                key={course.id}
                  className="group cursor-pointer"
                >
                  <Link to={`/schedule?course=${course.id}`}>
                    <div className="relative h-80 overflow-hidden mb-6">
                      <img 
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-elaia-charcoal/60 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6 text-elaia-white">
                        <p className="text-sm font-inter uppercase tracking-wider mb-2 opacity-90">
                          {course.level} • {course.duration}
                        </p>
                        <h3 className="heading-sm">{course.title}</h3>
                  </div>
                </div>

                    <div className="space-y-4">
                  <div>
                        <p className="text-lg font-lora italic text-ohemia-accent mb-2">
                          {course.subtitle}
                        </p>
                        <p className="body-md text-elaia-warm-gray line-clamp-3">
                      {course.description}
                    </p>
                  </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-elaia-warm-gray">Intensité</span>
                          {renderIntensity(course.intensity)}
                      </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-elaia-warm-gray">Participants</span>
                          <span className="text-elaia-charcoal">{course.participants}</span>
                  </div>

                        <div className="flex items-center justify-between text-sm">
                          <span className="text-elaia-warm-gray">Crédits</span>
                          <span className="text-elaia-charcoal font-semibold">{course.credits} crédits</span>
                      </div>
                      </div>
                      
                      <div className="pt-4">
                        <span className="inline-flex items-center text-sm font-inter uppercase tracking-wider text-elaia-charcoal group-hover:text-ohemia-accent transition-colors">
                          Réserver ce cours
                          <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-elaia-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-lg text-elaia-charcoal mb-12">
                Pourquoi choisir nos cours ?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                  <div className="w-20 h-20 bg-elaia-light-gray rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-elaia-charcoal" />
                  </div>
                  <h3 className="heading-sm text-elaia-charcoal mb-3">
                    Petits groupes
                  </h3>
                  <p className="body-md text-elaia-warm-gray">
                    4 à 8 personnes maximum pour un suivi personnalisé et une attention individuelle
                  </p>
                  </div>

                <div>
                  <div className="w-20 h-20 bg-elaia-light-gray rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="h-8 w-8 text-elaia-charcoal" />
                        </div>
                  <h3 className="heading-sm text-elaia-charcoal mb-3">
                    Expertise certifiée
                  </h3>
                  <p className="body-md text-elaia-warm-gray">
                    Instructrice diplômée avec maîtrise fédérale et formation continue
                  </p>
                    </div>
                
                <div>
                  <div className="w-20 h-20 bg-elaia-light-gray rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="h-8 w-8 text-elaia-charcoal" />
                  </div>
                  <h3 className="heading-sm text-elaia-charcoal mb-3">
                    Horaires flexibles
                  </h3>
                  <p className="body-md text-elaia-warm-gray">
                    Des créneaux adaptés à votre emploi du temps, du matin au soir
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-elaia-charcoal">
          <div className="container-custom text-center">
            <h2 className="heading-lg text-elaia-white mb-6">
              Prêt à commencer votre parcours ?
            </h2>
            <p className="body-lg text-elaia-white/80 mb-10 max-w-2xl mx-auto">
              Réservez votre première séance et découvrez une nouvelle approche du mouvement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/schedule" className="btn-accent">
                Voir le planning
              </Link>
              <Link to="/pricing" className="btn-secondary border-elaia-white text-elaia-white hover:bg-elaia-white hover:text-elaia-charcoal">
                Découvrir nos tarifs
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CoursesPage; 
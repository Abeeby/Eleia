import React from 'react';
import { Star, ArrowRight, Clock, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

interface Course {
  id: string;
  title: string;
  description: string;
  intensity: number;
  relaxation: number;
  breathing: number;
  duration: string;
  participants: string;
  credits: number;
  benefits: string[];
  imagePosition: 'left' | 'right';
}

const CoursesPage: React.FC = () => {
  const courses: Course[] = [
    {
      id: 'reformer-classique',
      title: 'Reformer Classique',
      description: 'Renforcez votre corps en profondeur, améliorez votre posture et développez votre stabilité grâce à une approche fidèle à la méthode originale de Joseph Pilates. Cette séance sur Reformer, construite autour de mouvements précis, progressifs et contrôlés, vous permet de poser les bases d\'une pratique consciente et durable.',
      intensity: 3,
      relaxation: 3,
      breathing: 3,
      duration: '50 min',
      participants: '6 max',
      credits: 3,
      benefits: ['Améliore la posture', 'Renforce le core', 'Développe la stabilité', 'Mouvements contrôlés'],
      imagePosition: 'left'
    },
    {
      id: 'reformer-dynamique-flow',
      title: 'Reformer Dynamique Flow',
      description: 'Un entraînement complet et rythmé conçu pour renforcer l\'ensemble du corps de façon fluide et harmonieuse. Chaque séance enchaîne des mouvements ciblés sur Reformer pour tonifier les bras, les jambes, le centre et le dos, tout en améliorant la posture et la coordination.',
      intensity: 5,
      relaxation: 1,
      breathing: 2,
      duration: '50 min',
      participants: '6 max',
      credits: 3,
      benefits: ['Entraînement complet', 'Améliore la coordination', 'Tonifie tout le corps', 'Rythme soutenu'],
      imagePosition: 'right'
    },
    {
      id: 'reformer-booty-core',
      title: 'Reformer Booty & Core',
      description: 'Un cours ciblé et puissant pour tonifier les fessiers, affiner les jambes et renforcer les abdominaux profonds. En combinant le travail des ressorts Reformer à l\'utilisation d\'accessoires, vous activez vos muscles stabilisateurs, sculptez votre silhouette et gagnez en stabilité.',
      intensity: 5,
      relaxation: 1,
      breathing: 2,
      duration: '50 min',
      participants: '6 max',
      credits: 3,
      benefits: ['Tonifie les fessiers', 'Renforce les abdos', 'Sculpte la silhouette', 'Travail avec accessoires'],
      imagePosition: 'left'
    },
    {
      id: 'reformer-balance',
      title: 'Reformer Balance',
      description: 'Une pratique douce et rééquilibrante pour retrouver fluidité, légèreté et ancrage dans votre corps. Cette séance sur Reformer allie mobilité, assouplissements, alignement et renforcement postural pour apaiser les tensions tout en consolidant votre base intérieure.',
      intensity: 2,
      relaxation: 5,
      breathing: 4,
      duration: '50 min',
      participants: '6 max',
      credits: 3,
      benefits: ['Pratique douce', 'Améliore la mobilité', 'Apaise les tensions', 'Alignement postural'],
      imagePosition: 'right'
    },
    {
      id: 'pre-post-natal',
      title: 'Pré & Post-natal',
      description: 'Pensé pour accompagner les mamans avant et après l\'accouchement, ce cours allie douceur, renforcement et mobilité pour répondre aux besoins spécifiques du corps en pleine transformation. Au programme : des exercices ciblés de mobilité, de stabilité, de respiration et de renforcement du centre, avec un focus particulier sur le travail du périnée et des muscles profonds.',
      intensity: 3,
      relaxation: 3,
      breathing: 4,
      duration: '50 min',
      participants: '4 max',
      credits: 3,
      benefits: ['Spécialisé femmes enceintes', 'Travail du périnée', 'Accompagnement personnalisé', 'Mobilité adaptée'],
      imagePosition: 'left'
    },
    {
      id: 'power-vinyasa-yoga',
      title: 'Power Vinyasa Yoga',
      description: 'Un yoga énergisant qui allie force, fluidité et respiration dans une séquence dynamique et engageante. Chaque séance vous permet de renforcer votre corps, d\'améliorer votre souplesse et de calmer votre esprit à travers des enchaînements puissants et rythmés.',
      intensity: 5,
      relaxation: 1,
      breathing: 3,
      duration: '60 min',
      participants: '8 max',
      credits: 2,
      benefits: ['Yoga dynamique', 'Améliore la souplesse', 'Renforce le corps', 'Calme l\'esprit'],
      imagePosition: 'right'
    },
    {
      id: 'yoga-doux',
      title: 'Yoga Doux',
      description: 'Un moment de calme et d\'introspection pour relâcher les tensions du corps et de l\'esprit. Ce cours met l\'accent sur la respiration, la pleine conscience et des mouvements lents accessibles à tous. Il permet de retrouver un équilibre intérieur, d\'améliorer la souplesse et de réduire le stress, sans forcer sur le corps. Idéal en complément d\'un entraînement plus intense ou pour démarrer une pratique en douceur.',
      intensity: 1,
      relaxation: 5,
      breathing: 5,
      duration: '60 min',
      participants: '8 max',
      credits: 2,
      benefits: ['Pratique accessible', 'Réduit le stress', 'Pleine conscience', 'Améliore la souplesse'],
      imagePosition: 'left'
    },
    {
      id: 'pilates',
      title: 'Pilates',
      description: 'Un entraînement complet et ciblé pour renforcer, tonifier et sculpter l\'ensemble du corps. Grâce à des exercices au sol accompagnés d\'accessoires (élastiques, ballons, cercles…), chaque séance engage les muscles profonds, améliore la posture et affine la silhouette de façon harmonieuse.',
      intensity: 3,
      relaxation: 3,
      breathing: 3,
      duration: '50 min',
      participants: '8 max',
      credits: 2,
      benefits: ['Exercices au sol', 'Utilise des accessoires', 'Engage muscles profonds', 'Améliore la posture'],
      imagePosition: 'right'
    }
  ];

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < count ? 'text-elaia-gold fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <>
      <SEOHead 
        title="Nos Cours - Pilates & Yoga à Gland | Elaïa Studio"
        description="Découvrez notre gamme complète de cours : Reformer Classique, Yoga Doux, Pilates, cours pré/post-natal. Instructrice certifiée avec maîtrise fédérale."
        keywords="cours pilates gland, reformer classique, yoga doux, cours prenatal, pilates accessoires, cours yoga vinyasa"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-elaia-green/10 to-elaia-gold/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-elaia-gray mb-6 animate-fadeInUp">
              Nos Cours
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
              Découvrez notre gamme complète de cours adaptés à tous les niveaux
            </p>
          </div>
        </div>

        {/* Courses Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-24">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  course.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
                } animate-fadeInUp`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="flex-1 lg:max-w-md">
                  <div className="aspect-[4/3] bg-gradient-to-br from-elaia-gold/20 to-elaia-green/20 rounded-2xl shadow-lg flex items-center justify-center">
                    <div className="text-center p-8">
                      <Target className="h-16 w-16 text-elaia-gold mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-elaia-gray">{course.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-elaia-gray mb-4">
                      {course.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {course.description}
                    </p>
                  </div>

                  {/* Course Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-elaia-gold" />
                        <span className="font-medium text-elaia-gray">Durée</span>
                      </div>
                      <p className="text-gray-600">{course.duration}</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-5 w-5 text-elaia-gold" />
                        <span className="font-medium text-elaia-gray">Participants</span>
                      </div>
                      <p className="text-gray-600">{course.participants}</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="h-5 w-5 text-elaia-gold" />
                        <span className="font-medium text-elaia-gray">Crédits</span>
                      </div>
                      <p className="text-gray-600">{course.credits} crédits</p>
                    </div>
                  </div>

                  {/* Intensity Ratings */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-elaia-gray mb-4">Niveaux d'intensité</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Intensité:</span>
                        <div className="flex gap-1">{renderStars(course.intensity)}</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Relaxation:</span>
                        <div className="flex gap-1">{renderStars(course.relaxation)}</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Respiration:</span>
                        <div className="flex gap-1">{renderStars(course.breathing)}</div>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-gradient-to-r from-elaia-gold/5 to-elaia-green/5 p-6 rounded-xl">
                    <h4 className="font-semibold text-elaia-gray mb-3">Bénéfices principaux</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {course.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="h-2 w-2 bg-elaia-gold rounded-full"></div>
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/schedule?course=${course.id}`}
                    className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4 hover:scale-105 transition-all"
                  >
                    Réserver dès maintenant
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-elaia-green to-elaia-gold py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à commencer votre parcours ?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Découvrez nos cours d'essai et trouvez la pratique qui vous correspond
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/schedule"
                className="bg-white text-elaia-gray px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Voir le planning
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/trial"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-elaia-gray transition-colors inline-flex items-center justify-center gap-2"
              >
                Cours d'essai gratuit
                <Target className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesPage; 
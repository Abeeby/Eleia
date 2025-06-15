import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { format, addDays, startOfWeek, addWeeks } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Calendar, Clock, Users, ChevronLeft, ChevronRight, MapPin, Star, TrendingUp, Info, Heart, Target, Zap } from 'lucide-react';
import { classService, bookingService } from '../services/api';
import { useAuthStore } from '../store/authStore';
import customToast from '../utils/toast';
import { useNavigate } from 'react-router-dom';

interface ClassSession {
  id: number;
  start_time: string;
  end_time: string;
  class_type_name: string;
  credits_required: number;
  available_spots: number;
  max_participants: number;
  instructor_first_name?: string;
  instructor_last_name?: string;
}

interface GeneratedClass {
  id: number;
  time: string;
  name: string;
  instructor: string;
  credits: number;
  spots: number;
  color: string;
  start_time: string;
  end_time: string;
  class_type_name: string;
  credits_required: number;
  available_spots: number;
  max_participants: number;
  instructor_first_name: string;
  instructor_last_name: string;
}

interface CourseInfo {
  name: string;
  description: string;
  benefits: string[];
  level: string;
  duration: string;
  credits: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
}

const courseInfos: { [key: string]: CourseInfo } = {
  'Pilates Reformer Débutant': {
    name: 'Pilates Reformer Débutant',
    description: 'Parfait pour débuter en douceur avec le Pilates Reformer. Découvrez les mouvements de base et renforcez votre posture.',
    benefits: ['Améliore la posture', 'Renforce le core', 'Augmente la flexibilité', 'Réduit les tensions'],
    level: 'Débutant',
    duration: '55 minutes',
    credits: 3,
    icon: Heart,
    color: 'bg-elaia-gold'
  },
  'Pilates Reformer Intermédiaire': {
    name: 'Pilates Reformer Intermédiaire',
    description: 'Approfondissez votre pratique avec des exercices plus challengeants et des enchaînements fluides.',
    benefits: ['Développe la force', 'Améliore la coordination', 'Sculpte la silhouette', 'Augmente l\'endurance'],
    level: 'Intermédiaire',
    duration: '55 minutes',
    credits: 3,
    icon: Target,
    color: 'bg-elaia-green'
  },
  'Pilates Reformer Avancé': {
    name: 'Pilates Reformer Avancé',
    description: 'Pour les pratiquants expérimentés. Mouvements complexes et défis techniques pour repousser vos limites.',
    benefits: ['Performance optimale', 'Équilibre avancé', 'Force maximale', 'Contrôle précis'],
    level: 'Avancé',
    duration: '55 minutes',
    credits: 3,
    icon: Zap,
    color: 'bg-elaia-mint'
  },
  'Pilates Yoga Mat': {
    name: 'Pilates Yoga Mat',
    description: 'Fusion harmonieuse entre Pilates et Yoga sur tapis. Travail en profondeur du core et étirements.',
    benefits: ['Flexibilité accrue', 'Détente profonde', 'Renforcement doux', 'Connexion corps-esprit'],
    level: 'Tous niveaux',
    duration: '45 minutes',
    credits: 2,
    icon: Heart,
    color: 'bg-elaia-rose'
  },
  'Pilates Yoga Mat Détente': {
    name: 'Pilates Yoga Mat Détente',
    description: 'Séance relaxante combinant mouvements doux et étirements profonds pour évacuer le stress.',
    benefits: ['Relaxation totale', 'Améliore le sommeil', 'Réduit le stress', 'Équilibre mental'],
    level: 'Détente',
    duration: '45 minutes',
    credits: 2,
    icon: Heart,
    color: 'bg-purple-400'
  }
};

export default function SchedulePage() {
  const [selectedWeekOffset, setSelectedWeekOffset] = useState(0);
  const [selectedClass, setSelectedClass] = useState<ClassSession | null>(null);
  const [showCourseInfo, setShowCourseInfo] = useState<string | null>(null);
  const [isBooking, setIsBooking] = useState(false);
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  // Calculer la semaine actuelle avec l'offset
  const currentWeekStart = startOfWeek(addWeeks(new Date(), selectedWeekOffset), { weekStartsOn: 1 });
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(currentWeekStart, i));

  // Récupérer le planning pour la semaine
  const { data: classes, refetch } = useQuery({
    queryKey: ['schedule-week', format(currentWeekStart, 'yyyy-MM-dd')],
    queryFn: () => classService.getSchedule({ 
      date: format(currentWeekStart, 'yyyy-MM-dd'),
      view: 'week'
    }),
  });

  const handleBookClass = async (classId: number) => {
    if (!isAuthenticated) {
      customToast.error('Veuillez vous connecter pour réserver');
      navigate('/login');
      return;
    }

    setIsBooking(true);
    try {
      await bookingService.bookClass(classId.toString());
      customToast.success('Réservation confirmée !');
      refetch();
      setSelectedClass(null);
    } catch (error: unknown) {
      const err = error as { response?: { data?: { suggest_waiting_list?: boolean; message?: string } } };
      if (err.response?.data?.suggest_waiting_list) {
        customToast.error('Ce cours est complet. Voulez-vous rejoindre la liste d\'attente ?');
      } else {
        customToast.error(err.response?.data?.message || 'Erreur lors de la réservation');
      }
    } finally {
      setIsBooking(false);
    }
  };

  const handleClassClick = (cls: ClassSession | GeneratedClass) => {
    if (!isAuthenticated) {
      // Pour les visiteurs, montrer d'abord l'info du cours
      setShowCourseInfo(cls.class_type_name);
    } else {
      // Pour les utilisateurs connectés, aller directement à la réservation
      setSelectedClass(cls as ClassSession);
    }
  };

  // Générer des cours pour une semaine (pour les visiteurs)
  const generateWeeklySchedule = (weekStart: Date) => {
    const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
    
    const coursTypes = [
      { name: 'Pilates Reformer Débutant', credits: 3, color: 'bg-elaia-gold' },
      { name: 'Pilates Reformer Intermédiaire', credits: 3, color: 'bg-elaia-green' },
      { name: 'Pilates Reformer Avancé', credits: 3, color: 'bg-elaia-mint' },
      { name: 'Pilates Yoga Mat', credits: 2, color: 'bg-elaia-rose' },
      { name: 'Pilates Yoga Mat Détente', credits: 2, color: 'bg-purple-400' },
    ];
    
    const instructors = ['Sarah Martin', 'Julie Dubois', 'Emma Rousseau', 'Claire Moreau'];
    const timeSlots = ['09:00', '10:30', '12:00', '14:00', '17:00', '18:30', '19:30'];
    
    return days.map(day => {
      const dayOfWeek = day.getDay();
      // 4-7 cours par jour
      const numClasses = dayOfWeek === 0 || dayOfWeek === 6 ? 
        Math.floor(Math.random() * 3) + 4 : // 4-6 cours les weekends
        Math.floor(Math.random() * 4) + 5;  // 5-8 cours en semaine
      
      const classes = Array.from({ length: numClasses }, (_, i) => {
        const courseType = coursTypes[Math.floor(Math.random() * coursTypes.length)];
        const instructor = instructors[Math.floor(Math.random() * instructors.length)];
        const time = timeSlots[i % timeSlots.length];
        
        return {
          id: Math.random(),
          time,
          name: courseType.name,
          instructor,
          credits: courseType.credits,
          spots: Math.floor(Math.random() * 8) + 2, // 2-9 places
          color: courseType.color,
          start_time: `${format(day, 'yyyy-MM-dd')}T${time}:00`,
          end_time: `${format(day, 'yyyy-MM-dd')}T${time}:55`,
          class_type_name: courseType.name,
          credits_required: courseType.credits,
          available_spots: Math.floor(Math.random() * 8) + 2,
          max_participants: 12,
          instructor_first_name: instructor.split(' ')[0],
          instructor_last_name: instructor.split(' ')[1]
        };
      }).sort((a, b) => a.time.localeCompare(b.time));
      
      return {
        date: day,
        classes
      };
    });
  };

  // Utiliser des données générées pour les visiteurs ou les vraies données pour les utilisateurs connectés
  const weekSchedule = !isAuthenticated ? generateWeeklySchedule(currentWeekStart) : null;

  const getClassesForDay = (day: Date): (ClassSession | GeneratedClass)[] => {
    if (!isAuthenticated && weekSchedule) {
      const daySchedule = weekSchedule.find(d => 
        format(d.date, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd')
      );
      return daySchedule?.classes || [];
    }
    
    return classes?.filter((cls: ClassSession) => 
      format(new Date(cls.start_time), 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd')
    ) || [];
  };

  return (
    <div className="py-8 bg-elaia-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-elaia-gray mb-4">
            Planning des cours
          </h1>
          <p className="text-lg text-elaia-gray mb-4">
            {isAuthenticated 
              ? 'Réservez votre séance de Pilates Reformer' 
              : 'Découvrez nos cours de Pilates Reformer'
            }
          </p>
          {!isAuthenticated && (
            <div className="bg-gradient-to-r from-elaia-gold/10 to-elaia-green/10 border border-elaia-gold/30 rounded-xl p-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-elaia-gold mr-2" />
                <span className="text-xl font-semibold text-elaia-gray">Plus de 150 cours par mois !</span>
                <Star className="h-6 w-6 text-elaia-gold ml-2" />
              </div>
              <p className="text-elaia-gray mb-4">
                🌟 Rejoignez notre communauté et accédez à tous nos cours de Pilates Reformer
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white/50 rounded-lg p-3 text-center">
                  <TrendingUp className="h-5 w-5 text-elaia-green mx-auto mb-1" />
                  <div className="text-sm font-medium">7 créneaux/jour</div>
                </div>
                <div className="bg-white/50 rounded-lg p-3 text-center">
                  <Users className="h-5 w-5 text-elaia-mint mx-auto mb-1" />
                  <div className="text-sm font-medium">Groupes 6-12 pers.</div>
                </div>
                <div className="bg-white/50 rounded-lg p-3 text-center">
                  <Calendar className="h-5 w-5 text-elaia-rose mx-auto mb-1" />
                  <div className="text-sm font-medium">7j/7 ouvert</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => navigate('/pricing')}
                  className="btn-primary flex items-center"
                >
                  <Star className="h-4 w-4 mr-2" />
                  Offre Welcome 45 CHF
                </button>
                <button
                  onClick={() => navigate('/register')}
                  className="btn-secondary"
                >
                  Créer un compte
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Navigation par semaine */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setSelectedWeekOffset(selectedWeekOffset - 1)}
              className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Semaine précédente
            </button>
            
            <div className="text-center">
              <h2 className="text-xl font-semibold text-elaia-gray">
                {format(currentWeekStart, 'MMMM yyyy', { locale: fr })}
              </h2>
              <p className="text-sm text-gray-600">
                {format(currentWeekStart, 'd MMM', { locale: fr })} - {format(addDays(currentWeekStart, 6), 'd MMM', { locale: fr })}
              </p>
            </div>
            
            <button
              onClick={() => setSelectedWeekOffset(selectedWeekOffset + 1)}
              className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Semaine suivante
              <ChevronRight className="h-5 w-5 ml-2" />
            </button>
          </div>

          {/* Menu déroulant de sélection rapide */}
          <div className="text-center mb-6">
            <select
              value={selectedWeekOffset}
              onChange={(e) => setSelectedWeekOffset(parseInt(e.target.value))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-elaia-gold focus:border-transparent"
            >
              <option value={-2}>Il y a 2 semaines</option>
              <option value={-1}>Semaine dernière</option>
              <option value={0}>Cette semaine</option>
              <option value={1}>Semaine prochaine</option>
              <option value={2}>Dans 2 semaines</option>
              <option value={3}>Dans 3 semaines</option>
              <option value={4}>Dans 4 semaines</option>
            </select>
          </div>

          {/* Planning hebdomadaire */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {weekDays.map((day) => {
              const dayClasses = getClassesForDay(day);
              return (
                <div key={day.toISOString()} className="bg-gray-50 rounded-lg p-4">
                  <div className="text-center mb-4">
                    <div className="font-semibold text-elaia-gray">
                      {format(day, 'EEE', { locale: fr })}
                    </div>
                    <div className="text-2xl font-bold text-elaia-gray">
                      {format(day, 'd')}
                    </div>
                    <div className="text-xs text-gray-500">
                      {dayClasses.length} cours
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {dayClasses.map((cls, index: number) => (
                      <div
                        key={cls.id || index}
                        className={`p-3 rounded-lg cursor-pointer transition-all hover:shadow-md ${'color' in cls ? cls.color : 'bg-elaia-gold'} text-white text-sm`}
                        onClick={() => handleClassClick(cls)}
                      >
                        <div className="font-medium">{'time' in cls ? cls.time : format(new Date(cls.start_time), 'HH:mm')}</div>
                        <div className="text-xs opacity-90 truncate">
                          {'name' in cls ? cls.name : cls.class_type_name}
                        </div>
                        <div className="text-xs opacity-75">
                          {'credits' in cls ? cls.credits : cls.credits_required} crédits
                        </div>
                      </div>
                    ))}
                    
                    {dayClasses.length === 0 && (
                      <div className="text-center text-gray-400 text-sm py-4">
                        Aucun cours
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call-to-action final pour visiteurs */}
        {!isAuthenticated && (
          <div className="mt-8 bg-gradient-to-r from-elaia-gold to-elaia-green rounded-xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Prêt(e) à commencer ?</h2>
            <p className="text-xl mb-6 opacity-90">
              Découvrez le Pilates Reformer dans notre nouveau studio à Gland
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/20 rounded-lg p-4">
                <Star className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Offre Welcome</h3>
                <p className="text-sm opacity-90">1 séance + 2 offertes<br/>45 CHF seulement</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <Calendar className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Planning flexible</h3>
                <p className="text-sm opacity-90">150+ cours par mois<br/>7 créneaux par jour</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <Users className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Suivi personnalisé</h3>
                <p className="text-sm opacity-90">Groupes 6-12 personnes<br/>Instructeurs certifiés</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => navigate('/pricing')}
                className="bg-white text-elaia-gray px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all text-lg"
              >
                🎯 Profiter de l'offre Welcome
              </button>
              <button
                onClick={() => navigate('/register')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all text-lg"
              >
                Créer mon compte
              </button>
            </div>
          </div>
        )}

        {/* Légende */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-elaia-gold rounded mr-2"></div>
            <span className="text-elaia-gray">Pilates Reformer (3 crédits)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-elaia-rose rounded mr-2"></div>
            <span className="text-elaia-gray">Pilates Yoga Mat (2 crédits)</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 text-elaia-gray mr-2" />
            <span className="text-elaia-gray">Elaïa Studio - Gland</span>
          </div>
        </div>
      </div>

      {/* Modal d'information sur les cours (visiteurs) */}
      {showCourseInfo && courseInfos[showCourseInfo] && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-lg ${courseInfos[showCourseInfo].color} text-white mr-4`}>
                {React.createElement(courseInfos[showCourseInfo].icon, { className: "h-6 w-6" })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-elaia-gray">
                  {courseInfos[showCourseInfo].name}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {courseInfos[showCourseInfo].duration}
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    {courseInfos[showCourseInfo].credits} crédits
                  </span>
                  <span className="px-3 py-1 bg-elaia-gold/20 text-elaia-gold rounded-full font-medium">
                    {courseInfos[showCourseInfo].level}
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                {courseInfos[showCourseInfo].description}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-elaia-gray mb-3 flex items-center">
                <Heart className="h-5 w-5 mr-2 text-elaia-rose" />
                Bénéfices de cette séance
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {courseInfos[showCourseInfo].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-elaia-gold rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-elaia-gold/10 to-elaia-green/10 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center mb-3">
                <Info className="h-5 w-5 text-elaia-gold mr-2" />
                <span className="font-semibold text-elaia-gray">Pour réserver ce cours</span>
              </div>
              <p className="text-center text-gray-700 mb-4">
                Créez votre compte et découvrez notre offre Welcome : 3 séances pour 45 CHF !
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => {
                    setShowCourseInfo(null);
                    navigate('/pricing');
                  }}
                  className="btn-primary flex items-center"
                >
                  <Star className="h-4 w-4 mr-2" />
                  Offre Welcome 45 CHF
                </button>
                <button
                  onClick={() => {
                    setShowCourseInfo(null);
                    navigate('/register');
                  }}
                  className="btn-secondary"
                >
                  Créer un compte
                </button>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowCourseInfo(null)}
                className="text-gray-500 hover:text-gray-700 font-medium"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de réservation (utilisateurs connectés) */}
      {selectedClass && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-semibold text-elaia-gray mb-4">
              Réserver ce cours
            </h3>
            
            <div className="space-y-3 mb-6">
              <p className="font-medium text-elaia-gray">
                {selectedClass.class_type_name}
              </p>
              <p className="text-sm text-gray-600">
                {format(new Date(selectedClass.start_time), 'EEEE d MMMM à HH:mm', { locale: fr })}
              </p>
              {selectedClass.instructor_first_name && (
                <p className="text-sm text-gray-600">
                  Avec {selectedClass.instructor_first_name} {selectedClass.instructor_last_name}
                </p>
              )}
              <div className="flex items-center justify-between py-2 border-t border-b">
                <span className="text-sm text-gray-600">Crédits requis</span>
                <span className="font-semibold text-elaia-gold">
                  {selectedClass.credits_required} crédits
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Places disponibles</span>
                <span className={`font-semibold ${
                  selectedClass.available_spots > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {selectedClass.available_spots} / {selectedClass.max_participants}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedClass(null)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-elaia-gray hover:bg-gray-50"
              >
                Fermer
              </button>
              {selectedClass.available_spots > 0 ? (
                <button
                  onClick={() => handleBookClass(selectedClass.id)}
                  disabled={isBooking}
                  className="flex-1 btn-primary disabled:opacity-50"
                >
                  {isBooking ? 'Réservation...' : 'Confirmer'}
                </button>
              ) : (
                <button
                  onClick={() => {
                    customToast.info('Liste d\'attente bientôt disponible');
                  }}
                  className="flex-1 btn-secondary"
                >
                  Liste d'attente
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { format, addDays, startOfWeek, isSameDay } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Calendar, Clock, Users, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
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

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedClass, setSelectedClass] = useState<ClassSession | null>(null);
  const [isBooking, setIsBooking] = useState(false);
  const { isAuthenticated, user } = useAuthStore();
  const navigate = useNavigate();

  // Récupérer le planning
  const { data: classes, isLoading, refetch } = useQuery({
    queryKey: ['schedule', format(selectedDate, 'yyyy-MM-dd')],
    queryFn: () => classService.getSchedule({ 
      date: format(selectedDate, 'yyyy-MM-dd'),
      view: 'day'
    }),
  });

  // Générer les jours de la semaine
  const weekStart = startOfWeek(selectedDate, { weekStartsOn: 1 });
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

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
    } catch (error: any) {
      if (error.response?.data?.suggest_waiting_list) {
        customToast.error('Ce cours est complet. Voulez-vous rejoindre la liste d\'attente ?');
      } else {
        customToast.error(error.response?.data?.message || 'Erreur lors de la réservation');
      }
    } finally {
      setIsBooking(false);
    }
  };

  const groupClassesByTime = (classes: ClassSession[]) => {
    const grouped: { [key: string]: ClassSession[] } = {};
    classes?.forEach((cls) => {
      const time = format(new Date(cls.start_time), 'HH:mm');
      if (!grouped[time]) grouped[time] = [];
      grouped[time].push(cls);
    });
    return grouped;
  };

  const groupedClasses = groupClassesByTime(classes || []);

  return (
    <div className="py-8 bg-elaia-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-elaia-gray mb-4">
            Planning des cours
          </h1>
          <p className="text-lg text-elaia-gray">
            Réservez votre séance de Pilates Reformer
          </p>
        </div>

        {/* Sélecteur de semaine */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setSelectedDate(addDays(selectedDate, -7))}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-elaia-gray" />
            </button>
            
            <h2 className="text-lg font-semibold text-elaia-gray">
              {format(weekStart, 'MMMM yyyy', { locale: fr })}
            </h2>
            
            <button
              onClick={() => setSelectedDate(addDays(selectedDate, 7))}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-elaia-gray" />
            </button>
          </div>

          {/* Jours de la semaine */}
          <div className="grid grid-cols-7 gap-2">
            {weekDays.map((day) => (
              <button
                key={day.toISOString()}
                onClick={() => setSelectedDate(day)}
                className={`p-3 rounded-lg text-center transition-all ${
                  isSameDay(day, selectedDate)
                    ? 'bg-elaia-gold text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="text-xs font-medium">
                  {format(day, 'EEE', { locale: fr })}
                </div>
                <div className="text-lg font-semibold">
                  {format(day, 'd')}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Planning du jour */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-elaia-gray flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              {format(selectedDate, 'EEEE d MMMM', { locale: fr })}
            </h3>
            <button
              onClick={() => setSelectedDate(new Date())}
              className="text-sm text-elaia-gold hover:text-elaia-green"
            >
              Aujourd'hui
            </button>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-elaia-gray">Chargement du planning...</p>
            </div>
          ) : Object.keys(groupedClasses).length === 0 ? (
            <div className="text-center py-12">
              <p className="text-elaia-gray">Aucun cours programmé ce jour</p>
            </div>
          ) : (
            <div className="space-y-4">
              {Object.entries(groupedClasses)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([time, timeClasses]) => (
                  <div key={time} className="border-l-4 border-elaia-gold pl-4">
                    <div className="flex items-center mb-2">
                      <Clock className="h-4 w-4 text-elaia-gray mr-2" />
                      <span className="font-semibold text-elaia-gray">{time}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {timeClasses.map((cls) => (
                        <div
                          key={cls.id}
                          className={`border rounded-lg p-4 transition-all cursor-pointer ${
                            cls.available_spots > 0
                              ? 'border-gray-200 hover:border-elaia-gold hover:shadow-md'
                              : 'border-red-200 bg-red-50'
                          }`}
                          onClick={() => setSelectedClass(cls)}
                        >
                          <h4 className="font-semibold text-elaia-gray mb-2">
                            {cls.class_type_name}
                          </h4>
                          
                          {cls.instructor_first_name && (
                            <p className="text-sm text-gray-600 mb-2">
                              Avec {cls.instructor_first_name} {cls.instructor_last_name}
                            </p>
                          )}
                          
                          <div className="flex items-center justify-between text-sm">
                            <span className="flex items-center text-elaia-gray">
                              <Users className="h-4 w-4 mr-1" />
                              {cls.available_spots > 0 ? (
                                <span className="text-green-600">
                                  {cls.available_spots} places
                                </span>
                              ) : (
                                <span className="text-red-600">Complet</span>
                              )}
                            </span>
                            <span className="text-elaia-gold font-medium">
                              {cls.credits_required} crédits
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Légende */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-100 border border-green-300 rounded mr-2"></div>
            <span className="text-elaia-gray">Places disponibles</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-100 border border-red-300 rounded mr-2"></div>
            <span className="text-elaia-gray">Complet</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 text-elaia-gray mr-2" />
            <span className="text-elaia-gray">Elaïa Studio - Gland</span>
          </div>
        </div>
      </div>

      {/* Modal de réservation */}
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
                Annuler
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
                    // TODO: Implémenter la liste d'attente
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
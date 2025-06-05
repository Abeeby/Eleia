import { MapPin, Phone, Mail, Clock, Heart, Users, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-12 bg-elaia-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-alex text-elaia-gold mb-4">Elaïa Studio</h1>
          <p className="text-xl text-elaia-gray max-w-3xl mx-auto">
            Votre espace dédié au Pilates Reformer à Gland, où bien-être et transformation se rencontrent
          </p>
        </div>

        {/* Notre Histoire */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-elaia-gray mb-6">Notre Histoire</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Fondé par un couple passionné de Pilates et de bien-être, Elaïa Studio est né d'un rêve : 
                créer un espace unique à Gland où chacun peut découvrir les bienfaits transformateurs du Pilates Reformer.
              </p>
              <p>
                Notre nom, Elaïa, évoque l'olivier, symbole de paix, de force et de longévité. 
                Ces valeurs sont au cœur de notre approche : nous vous accompagnons dans votre parcours 
                vers un corps plus fort, plus souple et plus équilibré.
              </p>
              <p>
                Avec des équipements de pointe et une équipe d'instructeurs certifiés, nous offrons 
                une expérience personnalisée qui s'adapte à vos besoins et objectifs uniques.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <img 
              src="/api/placeholder/600/400" 
              alt="Elaïa Studio" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <Heart className="h-8 w-8 text-elaia-gold mx-auto mb-2" />
                <p className="font-semibold text-elaia-gray">Passion</p>
              </div>
              <div>
                <Users className="h-8 w-8 text-elaia-green mx-auto mb-2" />
                <p className="font-semibold text-elaia-gray">Communauté</p>
              </div>
              <div>
                <Award className="h-8 w-8 text-elaia-mint mx-auto mb-2" />
                <p className="font-semibold text-elaia-gray">Excellence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nos Valeurs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-elaia-gray text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-elaia-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-elaia-gold" />
              </div>
              <h3 className="text-xl font-semibold text-elaia-gray mb-3">Bienveillance</h3>
              <p className="text-gray-600">
                Un environnement accueillant où chacun se sent à l'aise, peu importe son niveau
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-elaia-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-elaia-green" />
              </div>
              <h3 className="text-xl font-semibold text-elaia-gray mb-3">Personnalisation</h3>
              <p className="text-gray-600">
                Des cours adaptés à vos besoins spécifiques pour atteindre vos objectifs
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-elaia-mint/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-elaia-mint" />
              </div>
              <h3 className="text-xl font-semibold text-elaia-gray mb-3">Qualité</h3>
              <p className="text-gray-600">
                Des équipements haut de gamme et des instructeurs certifiés pour votre sécurité
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-elaia-gray text-center mb-12">Contactez-nous</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div>
              <h3 className="text-xl font-semibold text-elaia-gray mb-6">Venez nous rencontrer</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-elaia-gold mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-elaia-gray">Adresse</p>
                    <p className="text-gray-600">
                      Rue de la Gare 15<br />
                      1196 Gland<br />
                      Suisse
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-elaia-gold mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-elaia-gray">Téléphone</p>
                    <p className="text-gray-600">+41 22 123 45 67</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-elaia-gold mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-elaia-gray">Email</p>
                    <p className="text-gray-600">contact@elaiastudio.ch</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-elaia-gold mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-elaia-gray">Horaires d'ouverture</p>
                    <div className="text-gray-600 space-y-1">
                      <p>Lundi - Vendredi : 7h00 - 21h00</p>
                      <p>Samedi : 8h00 - 18h00</p>
                      <p>Dimanche : 9h00 - 17h00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div>
              <h3 className="text-xl font-semibold text-elaia-gray mb-6">Envoyez-nous un message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Prénom
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Marie"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Dupont"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="marie.dupont@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="input-field"
                    placeholder="+41 79 123 45 67"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="input-field"
                    placeholder="Votre message..."
                  />
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16">
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500">Carte interactive (Google Maps)</p>
          </div>
        </div>
      </div>
    </div>
  );
} 
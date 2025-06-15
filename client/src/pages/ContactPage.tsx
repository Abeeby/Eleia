import { useState } from 'react';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';
import customToast from '../utils/toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: 'renseignement',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulation d'envoi
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      customToast.success('Votre message a été envoyé avec succès !');
      setFormData({ nom: '', email: '', sujet: 'renseignement', message: '' });
    } catch {
      customToast.error('Erreur lors de l\'envoi du message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-8 bg-elaia-beige min-h-screen">
      {/* Header */}
      <div className="bg-elaia-green text-elaia-beige py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
        <p className="text-lg">Besoin d'un renseignement ou envie de nous écrire ? Nous sommes à votre écoute.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Coordonnées */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-elaia-gray mb-8">Nos coordonnées</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <MapPin className="h-8 w-8 text-elaia-green mx-auto mb-4" />
              <h3 className="font-semibold text-elaia-gray mb-2">Adresse</h3>
              <p className="text-elaia-gray">
                rue de l'Etraz 14<br />
                1196 Gland<br />
                Suisse
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Phone className="h-8 w-8 text-elaia-green mx-auto mb-4" />
              <h3 className="font-semibold text-elaia-gray mb-2">Téléphone</h3>
              <a 
                href="tel:+41797181009" 
                className="text-elaia-gold hover:text-elaia-green transition-colors font-medium"
              >
                079 718 10 09
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Mail className="h-8 w-8 text-elaia-green mx-auto mb-4" />
              <h3 className="font-semibold text-elaia-gray mb-2">Email</h3>
              <a 
                href="mailto:contact@elaia-studio.ch" 
                className="text-elaia-gold hover:text-elaia-green transition-colors font-medium"
              >
                contact@elaia-studio.ch
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Carte */}
          <div>
            <h3 className="text-2xl font-semibold text-elaia-gray mb-6">Nous trouver</h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <iframe 
                src="https://maps.google.com/maps?q=rue%20de%20l'Etraz%2014,%201196%20Gland&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-80"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Elaïa Studio"
              />
            </div>
            
            <div className="mt-6 bg-elaia-mint rounded-lg p-6">
              <h4 className="font-semibold text-elaia-gray mb-3">Accès et parking</h4>
              <ul className="text-elaia-gray space-y-2">
                <li className="flex items-start">
                  <span className="text-elaia-green mr-2">•</span>
                  Parking gratuit disponible
                </li>
                <li className="flex items-start">
                  <span className="text-elaia-green mr-2">•</span>
                  Accessible en transports publics
                </li>
                <li className="flex items-start">
                  <span className="text-elaia-green mr-2">•</span>
                  À 2 minutes de la gare de Gland
                </li>
              </ul>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div>
            <h3 className="text-2xl font-semibold text-elaia-gray mb-6 flex items-center">
              <MessageCircle className="h-6 w-6 mr-2" />
              Formulaire de contact
            </h3>
            
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-6">
                
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-elaia-gray mb-2">
                    Votre nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-elaia-gold focus:border-transparent"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-elaia-gray mb-2">
                    Adresse email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-elaia-gold focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="sujet" className="block text-sm font-medium text-elaia-gray mb-2">
                    Sujet de votre message
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-elaia-gold focus:border-transparent"
                  >
                    <option value="renseignement">Demande de renseignement</option>
                    <option value="reclamation">Réclamation</option>
                    <option value="reservation">Problème de réservation</option>
                    <option value="collaboration">Proposition de collaboration</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-elaia-gray mb-2">
                    Votre message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-elaia-gold focus:border-transparent resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Horaires d'ouverture */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-2xl font-semibold text-elaia-gray mb-6">Horaires d'ouverture</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-elaia-gray">
              <div>
                <p className="font-medium mb-2">Lundi - Vendredi</p>
                <p>06:30 - 21:00</p>
              </div>
              <div>
                <p className="font-medium mb-2">Samedi - Dimanche</p>
                <p>08:00 - 18:00</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              * Horaires susceptibles d'évoluer selon la demande
            </p>
          </div>
        </div>

      </div>
    </div>
  );
} 
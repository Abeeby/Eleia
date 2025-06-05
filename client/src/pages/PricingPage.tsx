import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, TrendingUp } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { creditService } from '../services/api';

export default function PricingPage() {
  const [selectedTab, setSelectedTab] = useState<'credits' | 'monthly'>('credits');
  
  const { data: plans, isLoading } = useQuery({
    queryKey: ['subscription-plans'],
    queryFn: creditService.getPlans,
  });

  const creditPlans = plans?.filter((plan: any) => plan.type === 'credits') || [];
  const monthlyPlans = plans?.filter((plan: any) => plan.type === 'monthly') || [];

  const getDiscount = (planName: string) => {
    if (planName.includes('30')) return '-5%';
    if (planName.includes('50')) return '-10%';
    if (planName.includes('70')) return '-15%';
    return null;
  };

  return (
    <div className="py-12 bg-elaia-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-elaia-gray mb-4">
            Nos Tarifs & Offres
          </h1>
          <p className="text-lg text-elaia-gray max-w-2xl mx-auto">
            Choisissez la formule qui vous convient le mieux pour votre pratique du Pilates Reformer
          </p>
        </div>

        {/* Offre Welcome */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-elaia-gold to-elaia-green rounded-2xl p-8 text-center text-white shadow-xl">
            <h2 className="text-5xl font-alex mb-4">Offre Welcome</h2>
            <div className="flex items-center justify-center mb-4">
              <Star className="h-6 w-6 mr-2" />
              <p className="text-2xl font-semibold">1 Séance achetée + 2 offertes</p>
              <Star className="h-6 w-6 ml-2" />
            </div>
            <p className="text-4xl font-bold mb-6">45 CHF</p>
            <p className="text-lg mb-8 opacity-90">
              Découvrez notre studio avec cette offre exclusive pour les nouveaux clients
            </p>
            <Link 
              to="/register" 
              className="inline-block bg-white text-elaia-gray px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Profiter de l'offre
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1 inline-flex">
            <button
              onClick={() => setSelectedTab('credits')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                selectedTab === 'credits'
                  ? 'bg-elaia-gold text-white'
                  : 'text-elaia-gray hover:bg-gray-100'
              }`}
            >
              Formules à crédits
            </button>
            <button
              onClick={() => setSelectedTab('monthly')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                selectedTab === 'monthly'
                  ? 'bg-elaia-gold text-white'
                  : 'text-elaia-gray hover:bg-gray-100'
              }`}
            >
              Abonnements mensuels
            </button>
          </div>
        </div>

        {/* Info crédits */}
        <div className="text-center mb-8">
          <p className="text-elaia-gray">
            <span className="font-semibold">Pilates Reformer (PF)</span> : 3 crédits · 
            <span className="font-semibold ml-2">Pilates Yoga Mat (PYM)</span> : 2 crédits
          </p>
        </div>

        {/* Plans */}
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-elaia-gray">Chargement des tarifs...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {selectedTab === 'credits' ? (
              <>
                {/* Plans de crédits depuis la base de données */}
                {creditPlans.map((plan: any) => {
                  const discount = getDiscount(plan.name);
                  const creditsNum = plan.credits || 0;
                  const pricePerPF = (plan.price / (creditsNum / 3)).toFixed(1);
                  const pricePerPYM = (plan.price / (creditsNum / 2)).toFixed(1);
                  
                  return (
                    <div key={plan.id} className="relative">
                      {discount && (
                        <div className="absolute -top-3 -right-3 bg-elaia-gold text-white px-4 py-1 rounded-full text-sm font-bold z-10">
                          {discount}
                        </div>
                      )}
                      <div className="card h-full flex flex-col hover:shadow-xl transition-all">
                        <h3 className="text-xl font-semibold text-elaia-gray mb-2">
                          {plan.name}
                        </h3>
                        <p className="text-3xl font-bold text-elaia-gold mb-4">
                          {plan.price} CHF
                        </p>
                        <p className="text-sm text-elaia-gray mb-4">
                          Environ {Math.floor(creditsNum / 3)} PF à {pricePerPF} CHF<br />
                          ou {Math.floor(creditsNum / 2)} PYM à {pricePerPYM} CHF
                        </p>
                        <p className="text-sm text-elaia-gray mb-6">
                          {plan.description}
                        </p>
                        <Link 
                          to="/register" 
                          className="btn-primary text-center mt-auto"
                        >
                          Acheter
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {/* Plans mensuels depuis la base de données */}
                {monthlyPlans.map((plan: any) => {
                  const isVIP = plan.name.toLowerCase().includes('illimité');
                  const isBestSeller = plan.name.includes('1 fois');
                  
                  return (
                    <div key={plan.id} className="relative">
                      {isVIP && (
                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-elaia-gold to-elaia-green text-white px-4 py-1 rounded-full text-sm font-bold z-10">
                          VIP
                        </div>
                      )}
                      {isBestSeller && (
                        <div className="absolute -top-3 -right-3 bg-elaia-green text-white px-4 py-1 rounded-full text-sm font-bold z-10 flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Meilleure vente
                        </div>
                      )}
                      <div className={`card h-full flex flex-col hover:shadow-xl transition-all ${isVIP ? 'border-2 border-elaia-gold' : ''}`}>
                        <h3 className="text-xl font-semibold text-elaia-gray mb-2">
                          {plan.name}
                        </h3>
                        <p className="text-3xl font-bold text-elaia-gold mb-2">
                          {plan.price} CHF
                        </p>
                        <p className="text-sm text-elaia-gray mb-4">/ mois</p>
                        <p className="text-sm text-elaia-gray mb-6">
                          {plan.description}
                        </p>
                        <ul className="space-y-2 mb-6 flex-grow">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-elaia-green mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-elaia-gray">
                              {isVIP ? 'Accès illimité à tous les cours' : 
                               plan.max_bookings_per_week ? `${plan.max_bookings_per_week} cours par semaine` : 
                               'Accès selon la formule'}
                            </span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-elaia-green mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-elaia-gray">
                              Réservation prioritaire
                            </span>
                          </li>
                          {isVIP && (
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-elaia-green mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-elaia-gray">
                                Accès aux événements exclusifs
                              </span>
                            </li>
                          )}
                        </ul>
                        <Link 
                          to="/register" 
                          className={`text-center ${isVIP ? 'btn-secondary' : 'btn-primary'}`}
                        >
                          S'abonner
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        )}

        {/* Séance à l'unité */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-elaia-gray mb-4">
              Sans adhésion
            </h3>
            <p className="text-lg text-elaia-gray mb-2">Séance à l'unité</p>
            <p className="text-3xl font-bold text-elaia-gold mb-4">50 CHF</p>
            <p className="text-sm text-elaia-gray mb-6">Sans engagement ni adhésion</p>
            <Link to="/schedule" className="btn-primary">
              Réserver
            </Link>
          </div>
        </div>

        {/* Note frais d'adhésion */}
        <div className="mt-8 text-center">
          <p className="text-sm text-elaia-gray">
            *Frais d'adhésion unique à vie : 120 CHF
          </p>
        </div>
      </div>
    </div>
  );
} 
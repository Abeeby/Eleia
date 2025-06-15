import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, TrendingUp, Heart, Target, Gift, Users, Clock, ArrowRight, Zap } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { creditService } from '../services/api';

export default function PricingPage() {
  const [selectedTab, setSelectedTab] = useState<'prospects' | 'credits' | 'monthly'>('prospects');
  
  const { data: plans, isLoading } = useQuery({
    queryKey: ['subscription-plans'],
    queryFn: creditService.getPlans,
  });

  const creditPlans = plans?.filter((plan: any) => plan.type === 'credits') || [];
  const monthlyPlans = plans?.filter((plan: any) => plan.type === 'monthly') || [];

  // Offres prospects
  const prospectOffers = [
    {
      id: 'welcome',
      title: "Offre Welcome",
      price: "45 CHF",
      originalPrice: "90 CHF",
      description: "2 séances découverte",
      details: "1 séance achetée + 1 offerte",
      icon: Gift,
      color: "bg-gradient-to-r from-elaia-gold to-elaia-green",
      benefits: [
        "2 séances de Pilates Reformer",
        "Découverte de tous nos cours", 
        "Évaluation personnalisée",
        "Conseil nutritionnel inclus",
        "Aucun engagement"
      ],
      validity: "Valable 3 mois",
      popular: true,
      badge: "🌟 Recommandé"
    },
    {
      id: 'trial',
      title: "Séance d'essai",
      price: "25 CHF", 
      originalPrice: "50 CHF",
      description: "Première séance découverte",
      details: "50% de réduction",
      icon: Heart,
      color: "bg-gradient-to-r from-elaia-rose to-elaia-mint",
      benefits: [
        "1 séance de Pilates Reformer",
        "Évaluation posturale", 
        "Conseils personnalisés",
        "Présentation du studio",
        "Sans engagement"
      ],
      validity: "À utiliser dans le mois",
      popular: false
    },
    {
      id: 'single',
      title: "Séance à l'unité",
      price: "50 CHF",
      originalPrice: null,
      description: "Sans abonnement", 
      details: "Tarif standard",
      icon: Target,
      color: "bg-gradient-to-r from-elaia-gray to-elaia-green",
      benefits: [
        "1 séance de Pilates Reformer",
        "Cours au choix",
        "Réservation flexible",
        "Aucun engagement",
        "Paiement à la séance"
      ],
      validity: "Réservation à la demande",
      popular: false
    }
  ];

  // Plans supplémentaires pour plus de choix
  const enhancedCreditPlans = [
    ...creditPlans,
    {
      id: 'custom-5',
      name: 'Pack Découverte - 5 crédits',
      price: 125,
      credits: 5,
      description: 'Idéal pour tester différents cours',
      validity: '2 mois',
      type: 'credits'
    },
    {
      id: 'custom-100',
      name: 'Pack Annuel - 100 crédits', 
      price: 2200,
      credits: 100,
      description: 'Maximum d\'économies pour les assidus',
      validity: '12 mois',
      type: 'credits'
    }
  ];

  const enhancedMonthlyPlans = [
    ...monthlyPlans,
    {
      id: 'casual',
      name: 'Casual - 2 fois/semaine',
      price: 180,
      max_bookings_per_week: 2,
      description: 'Parfait pour commencer en douceur',
      type: 'monthly'
    },
    {
      id: 'premium-plus',
      name: 'Premium+ - 5 fois/semaine',
      price: 320,
      max_bookings_per_week: 5,
      description: 'Pour une pratique intensive',
      type: 'monthly'
    },
    {
      id: 'couple',
      name: 'Duo - 2 personnes', 
      price: 450,
      max_bookings_per_week: 3,
      description: 'Formule spéciale pour 2 personnes (chacune)',
      type: 'monthly'
    }
  ];

  const getDiscount = (planName: string) => {
    if (planName.includes('30') || planName.includes('Annuel')) return '-15%';
    if (planName.includes('50')) return '-10%';
    if (planName.includes('70')) return '-12%'; 
    if (planName.includes('100')) return '-20%';
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
            Du premier essai à l'abonnement premium, trouvez la formule qui vous convient
          </p>
        </div>

        {/* Tabs améliorés */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1 inline-flex">
            <button
              onClick={() => setSelectedTab('prospects')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                selectedTab === 'prospects'
                  ? 'bg-elaia-gold text-white'
                  : 'text-elaia-gray hover:bg-gray-100'
              }`}
            >
              🌟 Découverte
            </button>
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
        {selectedTab !== 'prospects' && (
          <div className="text-center mb-8">
            <p className="text-elaia-gray">
              <span className="font-semibold">Pilates Reformer (PF)</span> : 3 crédits · 
              <span className="font-semibold ml-2">Pilates Yoga Mat (PYM)</span> : 2 crédits
            </p>
          </div>
        )}

        {/* Section Prospects */}
        {selectedTab === 'prospects' && (
          <>
            <div className="text-center mb-8">
              <div className="bg-white/80 rounded-xl p-6 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-elaia-gray mb-4">
                  Première fois chez nous ? Testez sans engagement !
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Users className="h-8 w-8 text-elaia-gold mx-auto mb-2" />
                    <h3 className="font-semibold text-elaia-gray">Petits groupes</h3>
                    <p className="text-sm text-gray-600">6-12 personnes max</p>
                  </div>
                  <div className="text-center">
                    <Star className="h-8 w-8 text-elaia-green mx-auto mb-2" />
                    <h3 className="font-semibold text-elaia-gray">Instructeurs certifiés</h3>
                    <p className="text-sm text-gray-600">Formation professionnelle</p>
                  </div>
                  <div className="text-center">
                    <Heart className="h-8 w-8 text-elaia-rose mx-auto mb-2" />
                    <h3 className="font-semibold text-elaia-gray">Suivi personnalisé</h3>
                    <p className="text-sm text-gray-600">Adapté à votre niveau</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {prospectOffers.map((offer) => (
                <div key={offer.id} className="relative">
                  {offer.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-elaia-gold text-white px-4 py-1 rounded-full text-sm font-bold z-10">
                      {offer.badge}
                    </div>
                  )}
                  <div className="card h-full flex flex-col hover:shadow-xl transition-all">
                    <div className={`w-16 h-16 ${offer.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                      <offer.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-elaia-gray text-center mb-2">
                      {offer.title}
                    </h3>
                    <div className="text-center mb-4">
                      <p className="text-3xl font-bold text-elaia-gold">{offer.price}</p>
                      {offer.originalPrice && (
                        <p className="text-sm text-gray-500 line-through">{offer.originalPrice}</p>
                      )}
                      <p className="text-sm text-elaia-gray">{offer.description}</p>
                      <p className="text-sm font-medium text-elaia-green">{offer.details}</p>
                    </div>
                    <ul className="space-y-2 mb-6 flex-grow">
                      {offer.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-elaia-green mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-elaia-gray">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-center text-sm text-gray-600 mb-4">
                      <Clock className="h-4 w-4 inline mr-1" />
                      {offer.validity}
                    </div>
                    <Link 
                      to="/register" 
                      className={`btn-primary text-center mt-auto ${offer.popular ? 'bg-elaia-gold hover:bg-elaia-gold/90' : ''}`}
                    >
                      Réserver
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-elaia-gold to-elaia-green rounded-xl p-8 text-center text-white mb-12">
              <h2 className="text-3xl font-bold mb-4">Prêt(e) pour votre première séance ?</h2>
              <p className="text-xl mb-6 opacity-90">
                Rejoignez notre communauté et découvrez les bienfaits du Pilates Reformer
              </p>
              <Link
                to="/register"
                className="bg-white text-elaia-gray px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all text-lg inline-flex items-center"
              >
                🎯 Commencer maintenant
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </>
        )}

        {/* Plans existants améliorés */}
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-elaia-gray">Chargement des tarifs...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {selectedTab === 'credits' ? (
              <>
                {/* Plans de crédits étendus */}
                {enhancedCreditPlans.map((plan: any) => {
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
                      {plan.name.includes('Annuel') && (
                        <div className="absolute -top-3 -left-3 bg-elaia-green text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                          💎 Premium
                        </div>
                      )}
                      <div className="card h-full flex flex-col hover:shadow-xl transition-all">
                        <h3 className="text-xl font-semibold text-elaia-gray mb-2">
                          {plan.name}
                        </h3>
                        <p className="text-3xl font-bold text-elaia-gold mb-4">
                          {plan.price} CHF
                        </p>
                        <p className="text-sm text-elaia-gray mb-2">
                          {creditsNum} crédits
                        </p>
                        <p className="text-sm text-elaia-gray mb-4">
                          Environ {Math.floor(creditsNum / 3)} PF à {pricePerPF} CHF<br />
                          ou {Math.floor(creditsNum / 2)} PYM à {pricePerPYM} CHF
                        </p>
                        <p className="text-sm text-elaia-gray mb-4">
                          {plan.description}
                        </p>
                        {plan.validity && (
                          <p className="text-xs text-gray-600 mb-4 flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            Valable {plan.validity}
                          </p>
                        )}
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
            ) : selectedTab === 'monthly' ? (
              <>
                {/* Plans mensuels étendus */}
                {enhancedMonthlyPlans.map((plan: any) => {
                  const isVIP = plan.name.toLowerCase().includes('illimité');
                  const isPremium = plan.name.includes('Premium');
                  const isDuo = plan.name.includes('Duo');
                  const isBestSeller = plan.name.includes('1 fois');
                  
                  return (
                    <div key={plan.id} className="relative">
                      {isVIP && (
                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-elaia-gold to-elaia-green text-white px-4 py-1 rounded-full text-sm font-bold z-10">
                          ♛ VIP
                        </div>
                      )}
                      {isPremium && !isVIP && (
                        <div className="absolute -top-3 -right-3 bg-elaia-mint text-white px-4 py-1 rounded-full text-sm font-bold z-10">
                          💎 Premium
                        </div>
                      )}
                      {isDuo && (
                        <div className="absolute -top-3 -right-3 bg-elaia-rose text-white px-4 py-1 rounded-full text-sm font-bold z-10">
                          👥 Duo
                        </div>
                      )}
                      {isBestSeller && (
                        <div className="absolute -top-3 -right-3 bg-elaia-green text-white px-4 py-1 rounded-full text-sm font-bold z-10 flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Top
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
                          {(isVIP || isPremium) && (
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-elaia-green mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-elaia-gray">
                                Accès aux événements exclusifs
                              </span>
                            </li>
                          )}
                          {isDuo && (
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-elaia-green mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-elaia-gray">
                                Formule pour 2 personnes
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
            ) : null}
          </div>
        )}

        {/* Note frais d'adhésion */}
        {selectedTab !== 'prospects' && (
          <div className="mt-8 text-center">
            <p className="text-sm text-elaia-gray">
              *Frais d'adhésion unique à vie : 120 CHF (offerts pour les formules Premium+)
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 
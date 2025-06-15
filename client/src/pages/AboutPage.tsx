import { Users, Award, Heart, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-8 bg-elaia-beige min-h-screen">
      {/* Header */}
      <div className="bg-elaia-green text-elaia-beige py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Notre histoire</h1>
        <p className="text-lg">Découvrez les parcours qui ont façonné Elaïa Studio</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-elaia-gray mb-8 flex items-center justify-center">
            <Users className="h-8 w-8 mr-3" />
            Notre équipe fondatrice
          </h2>
          
          <div className="max-w-4xl mx-auto text-lg text-elaia-gray leading-relaxed space-y-6">
            <p>
              Nous sommes Albina et Baptist, deux passionnés du mouvement, de la santé et de la transformation humaine. 
              À travers nos parcours respectifs dans le fitness, le Pilates, la médecine et le yoga, nous avons développé une approche 
              globale et humaine du bien-être.
            </p>
            
            <p>
              Elaïa Studio est né de notre envie commune de créer un lieu unique à Gland : un espace élégant, professionnel et accessible, 
              où chacun peut se reconnecter à son corps dans un environnement bienveillant et inspirant.
            </p>
            
            <p>
              Plus qu'un simple studio, Elaïa est un projet de cœur. Notre mission est d'accompagner nos clients avec exigence et douceur, 
              en leur offrant des cours sur mesure, un suivi de qualité, et des outils concrets pour se sentir mieux, durablement.
            </p>
          </div>
        </div>

        {/* Profils des fondateurs */}
        <div className="space-y-12">
          
          {/* Albina Zeqiri */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <div className="h-64 w-full md:w-64 bg-gradient-to-br from-elaia-gold to-elaia-green flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl font-bold mb-2">AZ</div>
                    <div className="text-sm">Coach Sportive CFC</div>
                  </div>
                </div>
              </div>
              <div className="p-8 md:flex-1">
                <h3 className="text-2xl font-bold text-elaia-green mb-4">Albina Zeqiri</h3>
                <div className="text-elaia-gray space-y-4">
              <p>
                    Depuis mon plus jeune âge, le sport a toujours occupé une place centrale dans ma vie. Cette passion m'a naturellement conduite à me former dans ce domaine. J'ai ainsi suivi une formation de trois ans pour obtenir un CFC de coach sportive, puis j'ai poursuivi avec le Brevet fédéral, afin de me spécialiser davantage dans les domaines du mouvement et de la santé.
              </p>
              <p>
                    Au fil des années, j'ai eu la chance de travailler dans plusieurs centres de fitness, tels que Let's Go Fitness, Harmony Fitness et Aquamed. En parallèle, j'ai enrichi mon expérience dans des studios de Pilates Reformer, ce qui m'a permis de développer une expertise variée, une grande capacité d'adaptation, et surtout, de construire un réseau solide et étendu dans le domaine du fitness et du bien-être.
              </p>
              <p>
                    Aujourd'hui, j'accomplis une étape importante de mon parcours en ouvrant mon propre studio à Gland : un espace moderne et chaleureux dédié au Pilates Reformer et à la remise en forme.
              </p>
                </div>
              </div>
            </div>
          </div>

          {/* Baptist Mercereau */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex md:flex-row-reverse">
              <div className="md:flex-shrink-0">
                <div className="h-64 w-full md:w-64 bg-gradient-to-br from-elaia-green to-elaia-mint flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl font-bold mb-2">BM</div>
                    <div className="text-sm">Expert Fitness</div>
                  </div>
                </div>
              </div>
              <div className="p-8 md:flex-1">
                <h3 className="text-2xl font-bold text-elaia-green mb-4">Baptist Mercereau</h3>
                <div className="text-elaia-gray space-y-4">
                  <p>
                    Fort de plus d'une décennie d'expérience dans l'univers du fitness et du bien-être, j'ai eu l'opportunité de me forger une expertise solide en France, au Maroc, à La Réunion et en Suisse. Chaque étape de mon parcours a renforcé ma passion pour l'accompagnement des clients vers leurs objectifs, dans un cadre exigeant, bienveillant et toujours innovant.
                  </p>
                  <p>
                    À travers mes expériences, notamment chez Aquamed où j'ai managé les coaches santé externes et enrichi l'offre de cours collectifs, j'ai appris à piloter des projets ambitieux tout en gardant au cœur de mon action la satisfaction client.
                  </p>
                  <p>
                    Mon objectif est simple : aider chacun à devenir la meilleure version de lui-même.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notre vision */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-elaia-green to-elaia-mint rounded-xl p-8 text-white">
            <div className="text-center mb-8">
              <Target className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold">Notre vision d'avenir</h2>
            </div>
            
            <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-6">
              <p>
                Dans une volonté de transmettre notre passion au plus grand nombre, nous avons l'ambition de créer à terme une <strong>académie de Pilates et de Yoga</strong>.
              </p>
              
              <p>
                Cette académie proposera des formations complètes pour les futurs enseignants, ainsi que des stages immersifs pour les élèves souhaitant approfondir leur pratique ou se reconvertir professionnellement.
              </p>
              
              <p>
                Elle incarnera notre philosophie : faire du mouvement un art de vivre accessible à tous, encadré avec rigueur, humanité et passion. Nous croyons que chacun, élève ou enseignant, peut devenir un relais de bien-être autour de lui.
              </p>
            </div>
          </div>
        </div>

        {/* Nos valeurs */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-elaia-gray text-center mb-12">Nos valeurs fondamentales</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-elaia-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-elaia-gray mb-3">Bienveillance</h3>
              <p className="text-elaia-gray">
                Un accompagnement personnalisé, sans jugement, dans le respect du rythme de chacun.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-elaia-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-elaia-gray mb-3">Excellence</h3>
              <p className="text-elaia-gray">
                Une approche rigoureuse et professionnelle pour des résultats durables et visibles.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-elaia-mint rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-elaia-gray mb-3">Communauté</h3>
              <p className="text-elaia-gray">
                Créer des liens authentiques et un sentiment d'appartenance à notre famille Elaïa.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-elaia-gray mb-4">Prêt à commencer votre parcours ?</h3>
            <p className="text-elaia-gray mb-6">
              Rejoignez-nous pour découvrir une nouvelle approche du bien-être et du mouvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/register" 
                className="btn-primary text-center"
              >
                Découvrir nos offres
              </a>
              <a 
                href="/contact" 
                className="btn-secondary text-center"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
} 
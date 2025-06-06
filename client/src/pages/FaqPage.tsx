import { HelpCircle, Phone, Mail } from 'lucide-react';

export default function FaqPage() {
  return (
    <div className="py-8 bg-elaia-beige min-h-screen">
      {/* Header */}
      <div className="bg-elaia-green text-elaia-beige py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Foire aux questions</h1>
        <p className="text-lg">Trouvez ici les réponses à vos interrogations les plus fréquentes.</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* FAQ Items */}
        <div className="space-y-8">
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-elaia-green mb-3 flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" />
              Qu'est-ce que le Pilates Reformer ?
            </h3>
            <p className="text-elaia-gray">
              Le Pilates Reformer est une méthode d'entraînement douce et précise, basée sur le renforcement des muscles profonds, l'alignement postural et le contrôle du mouvement. Conçu à l'origine pour la rééducation, il est aujourd'hui accessible à tous et permet un renforcement global du corps, sans impact ni surcharge articulaire.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-elaia-green mb-3 flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" />
              Est-ce adapté aux débutants ?
            </h3>
            <p className="text-elaia-gray">
              Oui, tout à fait. Nos cours sont conçus pour s'adapter à tous les niveaux. Si vous débutez, nous vous recommandons de commencer par un cours "découverte" ou "initiation", afin de vous familiariser en douceur avec la machine Reformer et les principes du Pilates.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-elaia-green mb-3 flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" />
              Quelle est la fréquence idéale pour pratiquer le Pilates ?
            </h3>
            <p className="text-elaia-gray">
              Déjà une séance par semaine peut apporter de vrais bénéfices, notamment en matière de mobilité, de posture et de bien-être général. L'idéal reste de pratiquer 2 à 3 fois par semaine pour des résultats visibles et durables. Cela dit, chacun a son rythme, ses contraintes et ses priorités. Notre rôle est de vous accompagner dans votre progression, sans pression ni jugement.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-elaia-green mb-3 flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" />
              Puis-je pratiquer le Pilates si j'ai des douleurs ou une pathologie ?
            </h3>
            <p className="text-elaia-gray">
              Oui. Le Pilates a été initialement développé pour la rééducation physique, puis adapté aux femmes avant/après grossesse. Aujourd'hui, il s'adresse à toutes et tous, quels que soient l'âge ou les douleurs (dos, hanches, genoux, etc.). Nos instructeurs sont formés avec exigence et sauront adapter les exercices à vos besoins spécifiques avec bienveillance et professionnalisme.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-elaia-green mb-3 flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" />
              À partir de quel âge peut-on participer ?
            </h3>
            <p className="text-elaia-gray">
              Nos cours sont accessibles à partir de 14 ans, avec une autorisation parentale. Le Pilates est une excellente activité pour les jeunes, car il développe coordination, conscience corporelle et équilibre sans traumatisme articulaire.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-elaia-green mb-3 flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" />
              Quelle tenue faut-il porter ?
            </h3>
            <p className="text-elaia-gray">
              Une tenue de sport près du corps (legging, t-shirt ajusté) est recommandée. Merci de ne pas porter de jeans, fermetures éclair ou tout vêtement susceptible de rayer les machines. Des chaussettes antidérapantes sont conseillées. L'hygiène est essentielle pour préserver le confort et la sécurité de tous.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-elaia-green mb-3 flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" />
              Dois-je apporter quelque chose ?
            </h3>
            <p className="text-elaia-gray">
              Oui : une bouteille d'eau et une paire de baskets propres exclusivement dédiées à l'usage intérieur (sauf pour les cours pieds nus, comme en Pilates traditionnel). Le matériel nécessaire est fourni sur place.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-elaia-green mb-3 flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" />
              Combien de temps dure un cours ?
            </h3>
            <p className="text-elaia-gray">
              Nos séances durent en général 50 minutes. Nous vous conseillons d'arriver 10 minutes avant pour vous installer confortablement et échanger avec votre coach.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-elaia-green mb-3 flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" />
              Comment réserver un cours ?
            </h3>
            <p className="text-elaia-gray">
              Les réservations se font directement en ligne via notre site ou notre application mobile. Vous pourrez y consulter notre planning en temps réel, gérer vos crédits ou abonnements, et recevoir des rappels automatiques.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-elaia-green mb-3 flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" />
              Proposez-vous des formations pour devenir instructeur ?
            </h3>
            <p className="text-elaia-gray">
              Oui. Très prochainement, Elaïa Studio lancera son académie de formation certifiante pour devenir instructeur de Pilates ou de Yoga. Notre but : transmettre notre passion à la fois aux pratiquants motivés et aux futurs professionnels du bien-être.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-elaia-green mb-3 flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" />
              J'ai d'autres questions, comment vous contacter ?
            </h3>
            <p className="text-elaia-gray">
              Vous pouvez nous écrire via le <a href="/contact" className="text-elaia-gold hover:text-elaia-green">formulaire de contact</a> ou nous appeler directement au{' '}
              <a href="tel:+41797181009" className="text-elaia-gold hover:text-elaia-green">079 718 10 09</a>. 
              Nous sommes là pour vous répondre avec plaisir.
            </p>
          </div>

        </div>

        {/* Règles du studio */}
        <div className="mt-12 bg-elaia-mint rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-elaia-gray mb-6">Règles à respecter dans le studio</h2>
          <ul className="space-y-3 text-elaia-gray">
            <li className="flex items-start">
              <span className="text-elaia-green mr-2">•</span>
              Apporter une paire de baskets propres pour l'intérieur ou pratiquer en chaussettes antidérapantes selon les cours.
            </li>
            <li className="flex items-start">
              <span className="text-elaia-green mr-2">•</span>
              Prévoir une tenue de sport confortable et ajustée – les jeans, fermetures éclair ou vêtements pouvant endommager les machines sont interdits.
            </li>
            <li className="flex items-start">
              <span className="text-elaia-green mr-2">•</span>
              Apporter une bouteille d'eau – l'hydratation fait partie intégrante de votre bien-être.
            </li>
            <li className="flex items-start">
              <span className="text-elaia-green mr-2">•</span>
              Respecter l'espace, les autres pratiquants et le matériel mis à disposition.
            </li>
            <li className="flex items-start">
              <span className="text-elaia-green mr-2">•</span>
              Prévenir en cas de retard ou d'annulation, pour ne pas bloquer une place inutilement.
            </li>
          </ul>
        </div>

        {/* Contact rapide */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-elaia-gray mb-4">Encore des questions ?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+41797181009" 
              className="inline-flex items-center justify-center px-6 py-3 bg-elaia-gold text-elaia-gray rounded-lg hover:bg-elaia-green hover:text-white transition-all"
            >
              <Phone className="h-5 w-5 mr-2" />
              079 718 10 09
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-elaia-gold text-elaia-gold rounded-lg hover:bg-elaia-gold hover:text-elaia-gray transition-all"
            >
              <Mail className="h-5 w-5 mr-2" />
              Nous contacter
            </a>
          </div>
        </div>

      </div>
    </div>
  );
} 
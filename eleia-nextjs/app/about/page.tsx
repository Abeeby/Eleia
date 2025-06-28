'use client'

import React from 'react'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AboutPage = () => {
  const [storyRef, storyInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [teamRef, teamInView] = useInView({ threshold: 0.1, triggerOnce: true })

  const values = [
    {
      title: 'Naturel',
      description: "Nous sélectionnons uniquement des ingrédients d'origine naturelle et biologique pour créer des formules douces et efficaces.",
      icon: '🌿'
    },
    {
      title: 'Durable',
      description: "De la production à l'emballage, nous minimisons notre impact environnemental à chaque étape.",
      icon: '♻️'
    },
    {
      title: 'Éthique',
      description: 'Commerce équitable, approvisionnement responsable et respect du bien-être animal sont au cœur de nos pratiques.',
      icon: '🤝'
    },
    {
      title: 'Transparent',
      description: 'Nous partageons ouvertement nos ingrédients, nos processus et nos partenaires pour une confiance totale.',
      icon: '✨'
    }
  ]

  return (
    <Layout title="À propos - Eleia">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=1600"
            alt="Notre histoire"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-display text-5xl md:text-6xl mb-4 fade-up">
            Notre Histoire
          </h1>
          <p className="text-xl font-light fade-up">
            Une passion pour la beauté naturelle
          </p>
        </div>
      </section>

      {/* Story Section */}
      <motion.section
        ref={storyRef}
        initial={{ opacity: 0, y: 50 }}
        animate={storyInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                L'histoire d'Eleia
              </h2>
              <p className="text-beige-600 mb-4 leading-relaxed">
                Née d'une passion pour les rituels de beauté ancestraux et la puissance 
                des ingrédients naturels, Eleia a vu le jour en 2018. Notre fondatrice, 
                inspirée par les secrets de beauté méditerranéens transmis de génération 
                en génération, a décidé de créer une marque qui honore ces traditions 
                tout en les réinventant pour la femme moderne.
              </p>
              <p className="text-beige-600 mb-4 leading-relaxed">
                Chaque produit Eleia est le fruit d'une recherche approfondie, alliant 
                sagesse ancestrale et innovation scientifique. Nous collaborons avec des 
                botanistes, des chimistes verts et des artisans locaux pour créer des 
                formules qui nourrissent la peau en profondeur.
              </p>
              <p className="text-beige-600 leading-relaxed">
                Aujourd'hui, Eleia est devenue bien plus qu'une marque de cosmétiques. 
                C'est une communauté de femmes qui partagent notre vision d'une beauté 
                authentique, durable et bienveillante.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1556228720-da4c5f67c9db?w=800"
                alt="Fondatrice Eleia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        ref={valuesRef}
        initial={{ opacity: 0 }}
        animate={valuesInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-beige-50"
      >
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-medium text-xl mb-3">{value.title}</h3>
                <p className="text-beige-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Notre Mission
          </h2>
          <p className="text-lg text-beige-600 mb-8 leading-relaxed">
            Chez Eleia, nous croyons que la beauté est un voyage, pas une destination. 
            Notre mission est d'accompagner chaque femme dans ce voyage avec des produits 
            qui respectent sa peau et la planète. Nous nous engageons à créer des soins 
            qui révèlent votre éclat naturel tout en préservant les ressources de demain.
          </p>
          <Link href="/shop" className="btn-primary inline-block">
            Découvrir nos produits
          </Link>
        </div>
      </section>

      {/* Team Section */}
      <motion.section
        ref={teamRef}
        initial={{ opacity: 0 }}
        animate={teamInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-sage-50"
      >
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12">
            Notre Équipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Marie Laurent',
                role: 'Fondatrice & CEO',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
              },
              {
                name: 'Sophie Martin',
                role: 'Directrice R&D',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
              },
              {
                name: 'Emma Dubois',
                role: 'Responsable Durabilité',
                image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={teamInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-medium text-lg">{member.name}</h3>
                <p className="text-beige-600 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl mb-4">
            Rejoignez notre communauté
          </h2>
          <p className="text-beige-600 mb-8 max-w-2xl mx-auto">
            Suivez-nous sur les réseaux sociaux pour des conseils beauté, 
            des nouveautés produits et des moments de partage avec notre communauté.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-beige-600 hover:text-beige-900 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-beige-600 hover:text-beige-900 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
              </svg>
            </a>
            <a href="#" className="text-beige-600 hover:text-beige-900 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
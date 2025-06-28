'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ServiceCard from '@/components/service-card'
import InstructorCard from '@/components/instructor-card'
import TestimonialCard from '@/components/testimonial-card'
import Newsletter from '@/components/newsletter'
import InstagramFeed from '@/components/instagram-feed'

export default function HomePage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [powerRef, powerInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true })

  const services = [
    {
      title: 'SOINS VISAGE',
      subtitle: 'Révélez votre éclat naturel',
      description: 'Des soins personnalisés pour chaque type de peau. Hydratation profonde, anti-âge et éclat.',
      options: ['Hydratation intense', 'Anti-âge', 'Peeling doux', 'Éclat & Détox'],
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800',
    },
    {
      title: 'SOINS CORPS',
      subtitle: 'Une expérience sensorielle unique',
      description: 'Rituels de beauté holistiques pour nourrir votre peau et apaiser votre esprit.',
      options: ['Gommage corporel', 'Enveloppement', 'Massage relaxant', 'Rituel détox'],
      image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800',
    },
    {
      title: 'COSMÉTIQUES',
      subtitle: 'Beauté naturelle et bio',
      description: 'Notre gamme exclusive de produits naturels pour sublimer votre beauté au quotidien.',
      options: ['Sérums', 'Crèmes', 'Masques', 'Huiles précieuses'],
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800',
    }
  ]

  const team = [
    { name: 'Sophia', role: 'Esthéticienne', image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400' },
    { name: 'Emma', role: 'Spa Manager', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400' },
    { name: 'Léa', role: 'Thérapeute', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400' },
    { name: 'Marie', role: 'Conseillère beauté', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
    { name: 'Julie', role: 'Esthéticienne', image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400' },
  ]

  const testimonials = [
    {
      title: 'Une expérience divine',
      text: 'Les soins Eleia ont transformé ma peau. Les produits naturels et l\'expertise de l\'équipe font toute la différence. Je ne peux plus m\'en passer!',
      author: 'Isabelle M.',
      rating: 5
    },
    {
      title: 'Qualité exceptionnelle',
      text: 'J\'adore l\'approche holistique d\'Eleia. Ce n\'est pas juste un soin, c\'est une expérience complète de bien-être. Les résultats sont visibles immédiatement.',
      author: 'Claire L.',
      rating: 5
    },
    {
      title: 'Mon rituel beauté',
      text: 'Depuis que j\'utilise les produits Eleia, ma routine beauté est devenue un moment de plaisir. Des textures divines et des résultats probants.',
      author: 'Alexandra P.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-studio-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=1600"
            alt="Eleia Beauty"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-studio-black/30" />
        </div>
        
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-studio-white"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-2">
            La beauté naturelle
          </h1>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-12">
            sublimée
          </h2>
          <Link href="/booking" className="btn-primary bg-studio-white text-studio-black hover:bg-studio-gray-100">
            Réserver un soin
          </Link>
        </motion.div>
      </section>

      {/* Power of Natural Beauty */}
      <section ref={powerRef} className="space-section">
        <motion.div
          initial={{ opacity: 0 }}
          animate={powerInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="container-narrow text-center"
        >
          <h2 className="text-display mb-12">
            LE POUVOIR DE LA<br />
            BEAUTÉ NATURELLE
          </h2>
          <Link href="/shop" className="btn-outline">
            Découvrir nos produits
          </Link>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="pb-32">
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="space-section bg-studio-white">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-title mb-8">Notre philosophie</h2>
            <p className="text-lg leading-relaxed mb-6">
              Eleia est né de la conviction que la vraie beauté vient de l'intérieur. Nous croyons en une approche 
              holistique qui allie soins de haute qualité, ingrédients naturels et bien-être global.
            </p>
            <p className="text-lg leading-relaxed mb-12">
              Chaque produit, chaque soin est pensé pour révéler votre beauté naturelle tout en respectant 
              votre peau et l'environnement. Parce que prendre soin de soi, c'est aussi prendre soin du monde.
            </p>
            <Link href="/about" className="link-underline text-sm uppercase tracking-wider">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="space-section">
        <div className="container-wide">
          <h2 className="text-title text-center mb-16">Notre équipe d'expertes</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <InstructorCard {...member} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/team" className="link-underline text-sm uppercase tracking-wider">
              Toute l'équipe
            </Link>
          </div>
        </div>
      </section>

      {/* Natural Ingredients Section */}
      <section className="space-section bg-studio-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-4/5">
              <Image
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800"
                alt="Natural ingredients"
                fill
                className="object-cover"
              />
            </div>
            <div className="max-w-xl">
              <h2 className="text-title mb-8">Des ingrédients d'exception</h2>
              <p className="text-lg leading-relaxed mb-6">
                Nous sélectionnons avec soin chaque ingrédient pour sa qualité et ses bienfaits. 
                Huiles précieuses, extraits de plantes, actifs naturels : tout est choisi pour 
                offrir à votre peau le meilleur de la nature.
              </p>
              <p className="text-lg leading-relaxed mb-12">
                Nos formules sont développées dans le respect de votre peau et de l'environnement. 
                Sans parabènes, sans sulfates, non testées sur les animaux et certifiées bio.
              </p>
              <Link href="/ingredients" className="link-underline text-sm uppercase tracking-wider">
                Découvrir nos ingrédients
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-section">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-studio-gray-600 mb-4">Témoignages</p>
            <h2 className="text-title mb-4">Nos clientes parlent</h2>
            <div className="flex items-center justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-studio-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm">4.9 sur 236 avis</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Instagram Feed */}
      <InstagramFeed />

      <Footer />
    </div>
  )
}
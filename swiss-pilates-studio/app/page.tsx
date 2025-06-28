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
      title: 'YOGA',
      subtitle: 'Choose your personal Yoga Journey',
      description: 'Puise dans ta force intérieure pour une nouvelle conscience corporelle et mentale.',
      options: ['Balance', 'Release', 'Reset', 'Aerial'],
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
    },
    {
      title: 'PILATES',
      subtitle: 'Choose your personal Pilates Journey',
      description: 'Vivez un entraînement complet dynamique. Activez votre centre et augmentez force et flexibilité.',
      options: ['Pilates X HIIT', 'Power Pilates', 'Dynamic Pilates', 'Barre Burn', 'Barre Deep'],
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800',
    },
    {
      title: 'REFORMER',
      subtitle: 'Choose your personal Reformer Journey',
      description: 'Libérez votre potentiel et ressentez la différence. Efficacité maximale pour votre meilleure forme.',
      options: ['Foundation', 'Whole Body', 'Booty & Core', 'Intense'],
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800',
    }
  ]

  const instructors = [
    { name: 'Sophie', image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400' },
    { name: 'Marie', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
    { name: 'Laura', image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400' },
    { name: 'Emma', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400' },
    { name: 'Léa', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400' },
    { name: 'Anna', image: 'https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=400' },
    { name: 'Chloé', image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400' },
    { name: 'Amélie', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400' },
    { name: 'Sarah', image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400' },
    { name: 'Julia', image: 'https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=400' },
  ]

  const testimonials = [
    {
      title: 'Cœur, passion et savoir',
      text: 'Je viens de Genève et je fais volontiers le trajet pour les cours de Pilates et l\'atmosphère incomparable sur place. On ressent immédiatement qu\'il y a beaucoup de cœur, de passion et de savoir.',
      author: 'Isabelle',
      rating: 5
    },
    {
      title: 'Rafraîchissant et différent',
      text: 'Concept génial, tout intégré dans un studio (cours sur tapis et Reformer). L\'équipe est compétente, très sympathique et le studio magnifique, conçu avec tant d\'amour du détail.',
      author: 'Claire',
      rating: 5
    },
    {
      title: 'Parfait pour déconnecter',
      text: 'Votre studio est parfaitement situé au centre et agréablement calme. Les séances sont comme de petites vacances à chaque fois. Vous avez créé quelque chose de très spécial ici.',
      author: 'Alexandra',
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
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600"
            alt="Pilates Studio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-studio-black/20" />
        </div>
        
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-studio-white"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-2">
            The perfect union of
          </h1>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-12">
            Modern Yoga & Pilates
          </h2>
          <Link href="/booking" className="btn-primary bg-studio-white text-studio-black hover:bg-studio-gray-100">
            Réserver maintenant
          </Link>
        </motion.div>
      </section>

      {/* Power of Holistic Training */}
      <section ref={powerRef} className="space-section">
        <motion.div
          initial={{ opacity: 0 }}
          animate={powerInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="container-narrow text-center"
        >
          <h2 className="text-display mb-12">
            THE POWER OF<br />
            HOLISTIC TRAINING
          </h2>
          <Link href="/courses" className="btn-outline">
            Trouver un cours
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
            <h2 className="text-title mb-8">Un lieu spécial pour vous</h2>
            <p className="text-lg leading-relaxed mb-6">
              Swiss Pilates est un studio de Yoga et Pilates d'inspiration traditionnelle avec une orientation moderne. 
              Un lieu de transformation, de retraite et de ressourcement, un espace pour créer des liens avec les autres 
              et avec vous-même, et enfin, pour vous défier et grandir.
            </p>
            <p className="text-lg leading-relaxed mb-12">
              Ici commence votre voyage vers une nouvelle conscience corporelle et mentale. Nous ne nous concentrons pas 
              sur des idéaux conventionnels, mais nous vous offrons l'espace pour votre épanouissement authentique. 
              Il s'agit de plus que du mouvement. Il s'agit de vous.
            </p>
            <Link href="/about/philosophy" className="link-underline text-sm uppercase tracking-wider">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="space-section">
        <div className="container-wide">
          <h2 className="text-title text-center mb-16">Rencontrez vos instructeurs</h2>
          <div className="instructors-grid">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <InstructorCard {...instructor} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/about/team" className="link-underline text-sm uppercase tracking-wider">
              Notre équipe
            </Link>
          </div>
        </div>
      </section>

      {/* Well-Being Section */}
      <section className="space-section bg-studio-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-4/5">
              <Image
                src="https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?w=800"
                alt="Well-being"
                fill
                className="object-cover"
              />
            </div>
            <div className="max-w-xl">
              <h2 className="text-title mb-8">Votre bien-être est notre passion</h2>
              <p className="text-lg leading-relaxed mb-6">
                Chaque personne est unique. C'est pourquoi chez Swiss Pilates, nous proposons des routines holistiques 
                adaptées exactement à votre niveau et à vos besoins. Composez votre programme de bien-être individuel 
                à partir de notre offre de cours variée.
              </p>
              <p className="text-lg leading-relaxed mb-12">
                Swiss Pilates unit régénération, renforcement et spiritualité en un seul lieu. 
                Pour un voyage de self-care sans compromis.
              </p>
              <Link href="/about/philosophy" className="link-underline text-sm uppercase tracking-wider">
                Plus sur notre philosophie
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-section">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-studio-gray-600 mb-4">Ce que vous dites</p>
            <h2 className="text-title mb-4">Amour des clients</h2>
            <div className="flex items-center justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-studio-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm">5.00 sur 147 avis</span>
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
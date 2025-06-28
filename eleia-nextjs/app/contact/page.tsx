'use client'

import React, { useState } from 'react'
import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Téléphone',
      content: '+33 1 23 45 67 89',
      link: 'tel:+33123456789'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'contact@eleia.fr',
      link: 'mailto:contact@eleia.fr'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Adresse',
      content: '12 Rue de la Paix, 75002 Paris',
      link: '#'
    }
  ]

  return (
    <Layout title="Contact - Eleia">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-beige-50">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-beige-600 max-w-2xl mx-auto">
            Une question? Un conseil personnalisé? Notre équipe est là pour vous accompagner 
            dans votre parcours beauté.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-2xl mb-6">Restons en contact</h2>
              <p className="text-beige-600 mb-8">
                Nous serions ravis de vous entendre. N'hésitez pas à nous contacter 
                pour toute question ou suggestion.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    className="flex items-start space-x-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-sage-600 group-hover:text-sage-700 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{info.title}</h3>
                      <p className="text-beige-600 text-sm">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-12">
                <h3 className="font-medium text-lg mb-4">Horaires d'ouverture</h3>
                <div className="space-y-2 text-sm text-beige-600">
                  <p>Lundi - Vendredi: 9h00 - 18h00</p>
                  <p>Samedi: 10h00 - 16h00</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 shadow-sm border border-beige-100">
                <h2 className="font-display text-2xl mb-6">Envoyez-nous un message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-beige-300 focus:border-beige-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-beige-300 focus:border-beige-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-beige-300 focus:border-beige-500 focus:outline-none transition-colors"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="question">Question sur un produit</option>
                      <option value="order">Commande et livraison</option>
                      <option value="advice">Conseil beauté</option>
                      <option value="partnership">Partenariat</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-beige-300 focus:border-beige-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="consent" className="text-sm text-beige-600">
                      J'accepte que mes données soient utilisées pour traiter ma demande 
                      conformément à notre politique de confidentialité.
                    </label>
                  </div>

                  <button type="submit" className="btn-primary w-full md:w-auto">
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-beige-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl mb-4">Nous trouver</h2>
            <p className="text-beige-600">
              Visitez notre boutique phare au cœur de Paris
            </p>
          </div>
          
          {/* Placeholder for map */}
          <div className="bg-beige-200 h-96 flex items-center justify-center">
            <p className="text-beige-600">Carte interactive</p>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl mb-4">
            Vous avez des questions?
          </h2>
          <p className="text-beige-600 mb-8 max-w-2xl mx-auto">
            Consultez notre FAQ pour trouver des réponses aux questions les plus fréquentes 
            sur nos produits, la livraison et bien plus encore.
          </p>
          <Link href="/faq" className="btn-secondary">
            Consulter la FAQ
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
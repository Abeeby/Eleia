'use client'

import React from 'react'
import Layout from '@/components/Layout'
import ImageCarousel from '@/components/ImageCarousel'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const HomePage = () => {
  // Animation hooks
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [featuredRef, featuredInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true })

  // Mock data for hero carousel
  const heroImages = [
    {
      src: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1600',
      alt: 'Collection Printemps',
      title: 'Collection Printemps',
      subtitle: 'Découvrez notre nouvelle gamme de soins naturels'
    },
    {
      src: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1600',
      alt: 'Soins du visage',
      title: 'Révélez votre éclat',
      subtitle: 'Des formules botaniques pour une peau radieuse'
    }
  ]

  // Mock featured products
  const featuredProducts = [
    {
      id: '1',
      name: 'Sérum Vitamine C Éclat',
      price: 58.00,
      image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600',
      secondaryImage: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600',
      category: 'Soins du visage',
      slug: 'serum-vitamine-c-eclat',
      isNew: true
    },
    {
      id: '2',
      name: 'Huile Nourrissante Rose',
      price: 45.00,
      image: 'https://images.unsplash.com/photo-1608571424021-39c5ad998fb2?w=600',
      secondaryImage: 'https://images.unsplash.com/photo-1620756235772-5832077ffe53?w=600',
      category: 'Soins du corps',
      slug: 'huile-nourrissante-rose'
    },
    {
      id: '3',
      name: 'Crème Hydratante Aloe',
      price: 42.00,
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600',
      secondaryImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600',
      category: 'Soins du visage',
      slug: 'creme-hydratante-aloe'
    },
    {
      id: '4',
      name: 'Masque Purifiant Argile',
      price: 35.00,
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600',
      category: 'Soins du visage',
      slug: 'masque-purifiant-argile',
      isSoldOut: true
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen">
        <ImageCarousel
          images={heroImages}
          autoplay={true}
          aspectRatio="aspect-[16/9] h-screen"
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 hero-gradient" />
      </section>

      {/* Introduction Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl mb-6">
            La beauté naturelle réinventée
          </h1>
          <p className="text-lg text-beige-600 font-light leading-relaxed">
            Chez Eleia, nous croyons en la puissance des ingrédients naturels. 
            Nos formules botaniques sont conçues pour révéler votre beauté 
            authentique tout en respectant votre peau et l'environnement.
          </p>
        </div>
      </motion.section>

      {/* Featured Products */}
      <motion.section
        ref={featuredRef}
        initial={{ opacity: 0 }}
        animate={featuredInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-beige-50"
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Nos Best-sellers
            </h2>
            <p className="text-beige-600">
              Les favoris de nos clientes pour une routine beauté naturelle
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={featuredInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop" className="btn-primary inline-block">
              Découvrir tous nos produits
            </Link>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        initial={{ opacity: 0 }}
        animate={aboutInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                Notre philosophie
              </h2>
              <p className="text-beige-600 mb-4 leading-relaxed">
                Inspirés par la nature méditerranéenne, nous sélectionnons 
                méticuleusement chaque ingrédient pour ses propriétés bienfaisantes. 
                Nos formules allient tradition et innovation pour offrir des soins 
                efficaces et sensoriels.
              </p>
              <p className="text-beige-600 mb-6 leading-relaxed">
                De la récolte éthique à l'emballage recyclable, chaque étape 
                de notre processus reflète notre engagement envers la durabilité 
                et le respect de l'environnement.
              </p>
              <Link href="/about" className="link-underline text-beige-900 font-medium">
                En savoir plus sur notre histoire
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800"
                  alt="Notre philosophie"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <section className="py-20 bg-sage-100">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl mb-4">
            Restez connecté
          </h2>
          <p className="text-beige-600 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir des conseils beauté, 
            des offres exclusives et être les premiers informés de nos nouveautés.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-grow px-6 py-3 bg-white border border-sage-300 focus:border-sage-500 focus:outline-none"
            />
            <button type="submit" className="btn-primary">
              S'inscrire
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage
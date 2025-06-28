'use client'

import React, { useState } from 'react'
import Layout from '@/components/Layout'
import ProductCard from '@/components/ProductCard'
import CategoryFilter from '@/components/CategoryFilter'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  // Mock categories
  const categories = [
    { id: 'skincare', name: 'Soins du visage', count: 12 },
    { id: 'body', name: 'Soins du corps', count: 8 },
    { id: 'wellness', name: 'Bien-être', count: 6 },
    { id: 'sets', name: 'Coffrets', count: 4 },
  ]

  // Mock products
  const allProducts = [
    {
      id: '1',
      name: 'Sérum Vitamine C Éclat',
      price: 58.00,
      image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600',
      secondaryImage: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600',
      category: 'skincare',
      slug: 'serum-vitamine-c-eclat',
      isNew: true
    },
    {
      id: '2',
      name: 'Huile Nourrissante Rose',
      price: 45.00,
      image: 'https://images.unsplash.com/photo-1608571424021-39c5ad998fb2?w=600',
      secondaryImage: 'https://images.unsplash.com/photo-1620756235772-5832077ffe53?w=600',
      category: 'body',
      slug: 'huile-nourrissante-rose'
    },
    {
      id: '3',
      name: 'Crème Hydratante Aloe',
      price: 42.00,
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600',
      secondaryImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600',
      category: 'skincare',
      slug: 'creme-hydratante-aloe'
    },
    {
      id: '4',
      name: 'Masque Purifiant Argile',
      price: 35.00,
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600',
      category: 'skincare',
      slug: 'masque-purifiant-argile',
      isSoldOut: true
    },
    {
      id: '5',
      name: 'Baume Corps Karité',
      price: 38.00,
      image: 'https://images.unsplash.com/photo-1556228841-a3c527ebefe5?w=600',
      category: 'body',
      slug: 'baume-corps-karite'
    },
    {
      id: '6',
      name: 'Eau Florale Lavande',
      price: 28.00,
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600',
      secondaryImage: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600',
      category: 'wellness',
      slug: 'eau-florale-lavande',
      isNew: true
    },
    {
      id: '7',
      name: 'Coffret Découverte',
      price: 95.00,
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600',
      category: 'sets',
      slug: 'coffret-decouverte'
    },
    {
      id: '8',
      name: 'Gommage Doux Sucre',
      price: 32.00,
      image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600',
      category: 'body',
      slug: 'gommage-doux-sucre'
    },
  ]

  // Filter products by category
  const filteredProducts = activeCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory)

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <Layout title="Boutique - Eleia">
      {/* Header */}
      <section className="pt-32 pb-12 bg-beige-50">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl mb-4">
            Notre Boutique
          </h1>
          <p className="text-lg text-beige-600 max-w-2xl mx-auto">
            Découvrez notre collection complète de produits de beauté naturels, 
            conçus avec soin pour sublimer votre routine quotidienne.
          </p>
        </div>
      </section>

      {/* Filters and Sorting */}
      <section className="py-8 border-b border-beige-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Filter */}
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            {/* Sort Dropdown */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-beige-600">Trier par:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white border border-beige-300 text-sm focus:outline-none focus:border-beige-500"
              >
                <option value="featured">En vedette</option>
                <option value="name">Nom (A-Z)</option>
                <option value="price-asc">Prix (croissant)</option>
                <option value="price-desc">Prix (décroissant)</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mb-6">
            <p className="text-sm text-beige-600">
              {sortedProducts.length} produits trouvés
            </p>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </motion.div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-beige-600">
                Aucun produit trouvé dans cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-sage-50">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl mb-4">
            Besoin de conseils?
          </h2>
          <p className="text-beige-600 mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts est là pour vous aider à trouver les produits 
            parfaits pour votre type de peau et vos besoins spécifiques.
          </p>
          <Link href="/contact" className="btn-primary">
            Contactez-nous
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default ShopPage
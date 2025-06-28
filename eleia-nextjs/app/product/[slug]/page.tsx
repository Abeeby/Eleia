'use client'

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ProductCard from '@/components/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

const ProductPage = () => {
  const params = useParams()
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [selectedSize, setSelectedSize] = useState('50ml')
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')

  // Mock product data - in real app, fetch based on slug
  const product = {
    id: '1',
    name: 'Sérum Vitamine C Éclat',
    price: 58.00,
    images: [
      'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800',
      'https://images.unsplash.com/photo-1620756235772-5832077ffe53?w=800',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800',
    ],
    category: 'Soins du visage',
    slug: 'serum-vitamine-c-eclat',
    shortDescription: 'Un sérum illuminateur enrichi en vitamine C pure pour révéler l'éclat naturel de votre peau.',
    sizes: ['30ml', '50ml'],
    ingredients: 'Aqua, Vitamin C (Ascorbic Acid), Hyaluronic Acid, Glycerin, Aloe Vera Extract, Vitamin E, Citrus Extract',
    description: "Notre Sérum Vitamine C Éclat est une formule concentrée qui combine la puissance de la vitamine C pure avec des ingrédients botaniques soigneusement sélectionnés.\n\nCe sérum léger pénètre rapidement pour:\n• Illuminer et unifier le teint\n• Réduire l'apparence des taches pigmentaires\n• Stimuler la production de collagène\n• Protéger contre les radicaux libres\n\nEnrichi en acide hyaluronique et en extraits d'aloès, il hydrate en profondeur tout en révélant l'éclat naturel de votre peau.",
    howToUse: "Appliquez 2-3 gouttes sur une peau propre et sèche, matin et soir. Massez délicatement du centre du visage vers l'extérieur. Suivez avec votre crème hydratante habituelle. Pour une protection optimale, utilisez toujours un écran solaire pendant la journée.",
    benefits: [
      'Illumine et unifie le teint',
      'Réduit les signes de fatigue',
      'Protège contre le stress oxydatif',
      'Hydrate et repulpe la peau'
    ]
  }

  // Related products
  const relatedProducts = [
    {
      id: '2',
      name: 'Crème Hydratante Aloe',
      price: 42.00,
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600',
      category: 'Soins du visage',
      slug: 'creme-hydratante-aloe'
    },
    {
      id: '3',
      name: 'Masque Purifiant Argile',
      price: 35.00,
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600',
      category: 'Soins du visage',
      slug: 'masque-purifiant-argile'
    },
    {
      id: '4',
      name: 'Eau Florale Rose',
      price: 28.00,
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600',
      category: 'Soins du visage',
      slug: 'eau-florale-rose'
    }
  ]

  const handleAddToCart = () => {
    console.log(`Added ${quantity} x ${product.name} (${selectedSize}) to cart`)
  }

  return (
    <Layout title={`${product.name} - Eleia`}>
      <div className="pt-24 pb-16">
        {/* Breadcrumbs */}
        <div className="container-custom mb-8">
          <nav className="text-sm text-beige-600">
            <Link href="/" className="hover:text-beige-900">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-beige-900">Boutique</Link>
            <span className="mx-2">/</span>
            <span className="text-beige-900">{product.name}</span>
          </nav>
        </div>

        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="w-full aspect-square"
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative aspect-square bg-beige-50">
                      <Image
                        src={image}
                        alt={`${product.name} - Vue ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="w-full"
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index} className="cursor-pointer">
                    <div className="relative aspect-square bg-beige-50">
                      <Image
                        src={image}
                        alt={`${product.name} - Miniature ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <p className="text-sm text-beige-600 uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <h1 className="font-display text-3xl md:text-4xl mb-4">
                  {product.name}
                </h1>
                <p className="text-2xl text-beige-900">{product.price.toFixed(2)} €</p>
              </div>

              <p className="text-beige-600 mb-8 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Size Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">Taille</label>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-2 border transition-all ${
                        selectedSize === size
                          ? 'border-beige-900 bg-beige-900 text-white'
                          : 'border-beige-300 hover:border-beige-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex gap-4 mb-8">
                <div className="flex items-center border border-beige-300">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-beige-50"
                  >
                    -
                  </button>
                  <span className="px-6 py-3 border-x border-beige-300">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-beige-50"
                  >
                    +
                  </button>
                </div>
                <button onClick={handleAddToCart} className="btn-primary flex-grow">
                  Ajouter au panier
                </button>
              </div>

              {/* Benefits */}
              <div className="border-t border-beige-200 pt-6">
                <h3 className="font-medium mb-4">Bénéfices clés</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-sage-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-beige-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-16">
            <div className="border-b border-beige-200">
              <div className="flex gap-8">
                {['description', 'ingredients', 'utilisation'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 capitalize transition-all ${
                      activeTab === tab
                        ? 'border-b-2 border-beige-900 text-beige-900 font-medium'
                        : 'text-beige-600 hover:text-beige-900'
                    }`}
                  >
                    {tab === 'utilisation' ? 'Comment utiliser' : tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="py-8">
              {activeTab === 'description' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="prose prose-beige max-w-none"
                >
                  <p className="whitespace-pre-line text-beige-700 leading-relaxed">
                    {product.description}
                  </p>
                </motion.div>
              )}

              {activeTab === 'ingredients' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-beige-700 mb-4">
                    <strong>INCI:</strong> {product.ingredients}
                  </p>
                  <p className="text-sm text-beige-600">
                    Tous nos produits sont formulés sans parabènes, sulfates, phtalates 
                    et autres ingrédients controversés. Non testé sur les animaux.
                  </p>
                </motion.div>
              )}

              {activeTab === 'utilisation' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-beige-700 leading-relaxed">
                    {product.howToUse}
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <section className="mt-16">
            <h2 className="font-display text-2xl mb-8 text-center">
              Vous pourriez aussi aimer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} {...relatedProduct} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default ProductPage
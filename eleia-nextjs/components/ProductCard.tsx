import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  secondaryImage?: string
  category: string
  slug: string
  isNew?: boolean
  isSoldOut?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  secondaryImage,
  category,
  slug,
  isNew = false,
  isSoldOut = false,
}) => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <Link href={`/product/${slug}`}>
      <motion.article
        className="product-card relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-beige-100">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-opacity duration-500"
            style={{ opacity: isHovered && secondaryImage ? 0 : 1 }}
          />
          {secondaryImage && (
            <Image
              src={secondaryImage}
              alt={`${name} - vue alternative`}
              fill
              className="object-cover transition-opacity duration-500 absolute inset-0"
              style={{ opacity: isHovered ? 1 : 0 }}
            />
          )}

          {/* Badges */}
          {isNew && (
            <span className="absolute top-4 left-4 bg-sage-500 text-white text-xs px-3 py-1 uppercase tracking-wider">
              Nouveau
            </span>
          )}
          {isSoldOut && (
            <span className="absolute top-4 right-4 bg-beige-900 text-white text-xs px-3 py-1 uppercase tracking-wider">
              Épuisé
            </span>
          )}

          {/* Quick View Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/10 flex items-center justify-center"
          >
            <button className="bg-white text-beige-900 px-6 py-2 text-sm tracking-wider uppercase hover:bg-beige-100 transition-colors">
              Aperçu rapide
            </button>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="pt-4">
          <p className="text-xs text-beige-600 uppercase tracking-wider mb-1">
            {category}
          </p>
          <h3 className="font-medium text-sm mb-2 group-hover:text-beige-600 transition-colors">
            {name}
          </h3>
          <p className="text-sm">
            {isSoldOut ? (
              <span className="text-beige-500">Épuisé</span>
            ) : (
              <span>{price.toFixed(2)} €</span>
            )}
          </p>
        </div>

        {/* Add to Cart Button (visible on hover) */}
        {!isSoldOut && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className="w-full mt-3 btn-secondary text-sm"
            onClick={(e) => {
              e.preventDefault()
              // Add to cart logic here
              console.log(`Added ${name} to cart`)
            }}
          >
            Ajouter au panier
          </motion.button>
        )}
      </motion.article>
    </Link>
  )
}

export default ProductCard
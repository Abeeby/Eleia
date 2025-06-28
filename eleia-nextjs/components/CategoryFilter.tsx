'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface CategoryFilterProps {
  categories: {
    id: string
    name: string
    count: number
  }[]
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="mb-8">
      {/* Desktop Filter */}
      <div className="hidden md:flex items-center justify-center space-x-8">
        <button
          onClick={() => onCategoryChange('all')}
          className={`relative text-sm uppercase tracking-widest transition-colors ${
            activeCategory === 'all' 
              ? 'text-beige-900 font-medium' 
              : 'text-beige-600 hover:text-beige-900'
          }`}
        >
          Tous les produits
          {activeCategory === 'all' && (
            <motion.div
              layoutId="activeCategory"
              className="absolute -bottom-2 left-0 right-0 h-px bg-beige-900"
              initial={false}
            />
          )}
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`relative text-sm uppercase tracking-widest transition-colors ${
              activeCategory === category.id 
                ? 'text-beige-900 font-medium' 
                : 'text-beige-600 hover:text-beige-900'
            }`}
          >
            {category.name}
            <span className="ml-2 text-xs">({category.count})</span>
            {activeCategory === category.id && (
              <motion.div
                layoutId="activeCategory"
                className="absolute -bottom-2 left-0 right-0 h-px bg-beige-900"
                initial={false}
              />
            )}
          </button>
        ))}
      </div>

      {/* Mobile Filter - Dropdown */}
      <div className="md:hidden">
        <select
          value={activeCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full px-4 py-3 bg-white border border-beige-300 text-sm focus:outline-none focus:border-beige-500"
        >
          <option value="all">Tous les produits</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name} ({category.count})
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default CategoryFilter
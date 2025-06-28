'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '/', label: 'Accueil' },
    { href: '/shop', label: 'Boutique' },
    { href: '/about', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-display tracking-wider">ELEIA</h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-light tracking-widest uppercase link-underline ${
                    pathname === item.href ? 'text-beige-900' : 'text-beige-700'
                  } hover:text-beige-900 transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-beige-700 hover:text-beige-900 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="text-beige-700 hover:text-beige-900 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button className="text-beige-700 hover:text-beige-900 transition-colors relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-terracotta-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 relative z-50"
            >
              <motion.span
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 6 : 0,
                }}
                className="block w-7 h-0.5 bg-beige-900"
              />
              <motion.span
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                }}
                className="block w-7 h-0.5 bg-beige-900"
              />
              <motion.span
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -6 : 0,
                }}
                className="block w-7 h-0.5 bg-beige-900"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute inset-y-0 right-0 w-full bg-cream shadow-xl"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-6">
                <nav className="flex-grow">
                  <ul className="space-y-8">
                    {menuItems.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-2xl font-light tracking-wider text-beige-800 hover:text-beige-900 transition-colors"
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <div className="border-t border-beige-200 pt-8">
                  <div className="flex space-x-6">
                    <button className="text-beige-700 hover:text-beige-900">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </button>
                    <button className="text-beige-700 hover:text-beige-900">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
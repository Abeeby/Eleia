import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-studio-black text-studio-white">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-2xl mb-4">ELEIA</h3>
            <div className="space-y-2 text-sm opacity-80">
              <p>Rue du Rhône 114</p>
              <p>1204 Genève</p>
              <p>hello@eleia.com</p>
              <p>+41 22 555 0123</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Boutique</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/shop" className="hover:opacity-100 transition-opacity">Tous les produits</Link></li>
              <li><Link href="/shop/visage" className="hover:opacity-100 transition-opacity">Soins visage</Link></li>
              <li><Link href="/shop/corps" className="hover:opacity-100 transition-opacity">Soins corps</Link></li>
              <li><Link href="/shop/coffrets" className="hover:opacity-100 transition-opacity">Coffrets cadeaux</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Informations</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/about" className="hover:opacity-100 transition-opacity">À propos</Link></li>
              <li><Link href="/ingredients" className="hover:opacity-100 transition-opacity">Nos ingrédients</Link></li>
              <li><Link href="/sustainability" className="hover:opacity-100 transition-opacity">Durabilité</Link></li>
              <li><Link href="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-studio-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <Link href="/legal" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
              Mentions légales
            </Link>
            <Link href="/privacy" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
              Protection des données
            </Link>
            <Link href="/cgv" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
              CGV
            </Link>
          </div>
          
          <p className="text-sm opacity-60">
            © {currentYear} Eleia. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-studio-black text-studio-white">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-2xl mb-4">SWISS PILATES STUDIO</h3>
            <div className="space-y-2 text-sm opacity-80">
              <p>Rue du Rhône 114</p>
              <p>1204 Genève</p>
              <p>contact@swiss-pilates.ch</p>
              <p>+41 22 555 0123</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Studio</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/booking" className="hover:opacity-100 transition-opacity">Réserver</Link></li>
              <li><Link href="/pricing" className="hover:opacity-100 transition-opacity">Tarifs</Link></li>
              <li><Link href="/courses" className="hover:opacity-100 transition-opacity">Cours</Link></li>
              <li><Link href="/events" className="hover:opacity-100 transition-opacity">Événements</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">À propos</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/about/studio" className="hover:opacity-100 transition-opacity">Studio</Link></li>
              <li><Link href="/about/philosophy" className="hover:opacity-100 transition-opacity">Philosophie</Link></li>
              <li><Link href="/about/team" className="hover:opacity-100 transition-opacity">Équipe</Link></li>
              <li><Link href="/academy" className="hover:opacity-100 transition-opacity">Academy</Link></li>
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
          </div>
          
          <p className="text-sm opacity-60">
            © {currentYear} Swiss Pilates Studio
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
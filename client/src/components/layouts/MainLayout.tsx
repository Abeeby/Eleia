import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, Calendar, CreditCard, LogOut, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';
import { useAuthStore } from '../../store/authStore';
import toast from 'react-hot-toast';

export default function MainLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Déconnexion réussie');
    navigate('/');
  };

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Planning', href: '/schedule' },
    { name: 'Offre Welcome', href: '/pricing', highlight: true },
    { name: 'Tarifs', href: '/pricing' },
    { name: 'Notre histoire', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const userNavigation = [
    { name: 'Tableau de bord', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Mes réservations', href: '/bookings', icon: Calendar },
    { name: 'Mon abonnement', href: '/subscription', icon: CreditCard },
    { name: 'Mon profil', href: '/profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-elaia-beige">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <span className="text-3xl font-alex text-elaia-gray">Elaïa</span>
                <span className="ml-2 text-sm font-montserrat uppercase tracking-wider text-elaia-gray">Studio</span>
              </Link>

              {/* Navigation principale */}
              <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                      item.highlight 
                        ? 'text-elaia-gold font-bold bg-elaia-gold/10 rounded px-2 py-1 hover:bg-elaia-gold/20' 
                        : 'text-elaia-gray hover:text-elaia-gold'
                    }`}
                  >
                    {item.name}
                    {item.highlight && <span className="ml-1">✨</span>}
                  </Link>
                ))}
              </div>
            </div>

            {/* Menu utilisateur */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              {isAuthenticated ? (
                <div className="relative ml-3">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-elaia-gray">
                      Bonjour, {user?.first_name}
                    </span>
                    <div className="relative group">
                      <button className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-elaia-gold focus:ring-offset-2">
                        <div className="h-8 w-8 rounded-full bg-elaia-green flex items-center justify-center text-white">
                          {user?.first_name?.[0]}{user?.last_name?.[0]}
                        </div>
                      </button>
                      
                      {/* Dropdown menu */}
                      <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {user?.role === 'admin' && (
                          <>
                            <Link
                              to="/admin"
                              className="flex items-center px-4 py-2 text-sm text-elaia-gray hover:bg-gray-100"
                            >
                              <LayoutDashboard className="mr-3 h-4 w-4" />
                              Administration
                            </Link>
                            <hr className="my-1" />
                          </>
                        )}
                        {userNavigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="flex items-center px-4 py-2 text-sm text-elaia-gray hover:bg-gray-100"
                          >
                            <item.icon className="mr-3 h-4 w-4" />
                            {item.name}
                          </Link>
                        ))}
                        <hr className="my-1" />
                        <button
                          onClick={handleLogout}
                          className="flex w-full items-center px-4 py-2 text-sm text-elaia-gray hover:bg-gray-100"
                        >
                          <LogOut className="mr-3 h-4 w-4" />
                          Déconnexion
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link to="/login" className="text-sm font-medium text-elaia-gray hover:text-elaia-gold">
                    Connexion
                  </Link>
                  <Link to="/register" className="btn-primary text-sm">
                    Inscription
                  </Link>
                </div>
              )}
            </div>

            {/* Menu mobile */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-elaia-gray hover:bg-gray-100 hover:text-elaia-gold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-elaia-gold"
              >
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Menu mobile ouvert */}
        {isMobileMenuOpen && (
          <div className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
                    item.highlight
                      ? 'border-elaia-gold bg-elaia-gold/10 text-elaia-gold font-bold'
                      : 'border-transparent text-elaia-gray hover:border-elaia-gold hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  {item.highlight && <span className="ml-2">✨</span>}
                </Link>
              ))}
            </div>
            {isAuthenticated ? (
              <div className="border-t border-gray-200 pb-3 pt-4">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-elaia-green flex items-center justify-center text-white">
                      {user?.first_name?.[0]}{user?.last_name?.[0]}
                    </div>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-elaia-gray">
                      {user?.first_name} {user?.last_name}
                    </div>
                    <div className="text-sm font-medium text-gray-500">{user?.email}</div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  {user?.role === 'admin' && (
                    <Link
                      to="/admin"
                      className="block px-4 py-2 text-base font-medium text-elaia-gray hover:bg-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Administration
                    </Link>
                  )}
                  {userNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-base font-medium text-elaia-gray hover:bg-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-base font-medium text-elaia-gray hover:bg-gray-100"
                  >
                    Déconnexion
                  </button>
                </div>
              </div>
            ) : (
              <div className="border-t border-gray-200 pb-3 pt-4">
                <div className="space-y-1">
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-base font-medium text-elaia-gray hover:bg-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Connexion
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-2 text-base font-medium text-elaia-gray hover:bg-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Inscription
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Contenu principal */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-elaia-mint mt-auto">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-elaia-gray mb-4">Contact</h3>
              <div className="text-sm text-elaia-gray space-y-2">
                <p>
                  <a href="mailto:contact@elaia-studio.ch" className="hover:text-elaia-gold">
                    contact@elaia-studio.ch
                  </a>
                </p>
                <p>
                  <a href="tel:+41797181009" className="hover:text-elaia-gold">
                    079 718 10 09
                  </a>
                </p>
                <p>rue de l'Etraz 14, 1196 Gland</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-elaia-gray mb-4">Mentions légales</h3>
              <div className="text-sm text-elaia-gray space-y-2">
                <p>
                  <Link to="/legal" className="hover:text-elaia-gold">
                    Mentions légales
                  </Link>
                </p>
                <p>
                  <Link to="/faq" className="hover:text-elaia-gold">
                    FAQ
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-elaia-gray mb-4">Langues</h3>
              <div className="text-sm text-elaia-gray">
                <p>Nous pouvons vous répondre en :</p>
                <p>Français • Anglais • Espagnol • Albanais</p>
              </div>
            </div>
          </div>
          <div className="mt-6 border-t border-elaia-green/20 pt-6 text-center">
            <p className="text-sm text-elaia-gray">
              © 2025 Elaïa Studio – Pilates Reformer à Gland. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
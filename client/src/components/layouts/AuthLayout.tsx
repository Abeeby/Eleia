import { Outlet, Link } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-elaia-beige flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex justify-center items-center">
          <span className="text-5xl font-alex text-elaia-gray">Elaïa</span>
          <span className="ml-2 text-lg font-montserrat uppercase tracking-wider text-elaia-gray">Studio</span>
        </Link>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl rounded-lg sm:px-10">
          <Outlet />
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link to="/" className="text-sm text-elaia-gray hover:text-elaia-gold">
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  );
} 
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, Check } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuthStore } from '../store/authStore';

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  city: string;
  postal_code: string;
  acceptTerms: boolean;
}

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register: registerUser, isLoading } = useAuthStore();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const password = watch('password');

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const { confirmPassword, acceptTerms, ...userData } = data;
      await registerUser(userData);
      toast.success('Inscription réussie ! Bienvenue chez Elaïa Studio');
      navigate('/dashboard');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Erreur lors de l\'inscription');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-elaia-gray text-center mb-2">
        Créer votre compte
      </h2>
      <p className="text-center text-elaia-gray mb-6">
        Rejoignez Elaïa Studio et commencez votre transformation
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Nom et Prénom */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-elaia-gray">
              Prénom
            </label>
            <input
              {...register('first_name', { required: 'Le prénom est requis' })}
              type="text"
              className="input-field mt-1"
              placeholder="Marie"
            />
            {errors.first_name && (
              <p className="mt-1 text-sm text-red-600">{errors.first_name.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-elaia-gray">
              Nom
            </label>
            <input
              {...register('last_name', { required: 'Le nom est requis' })}
              type="text"
              className="input-field mt-1"
              placeholder="Dupont"
            />
            {errors.last_name && (
              <p className="mt-1 text-sm text-red-600">{errors.last_name.message}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-elaia-gray">
            Email
          </label>
          <input
            {...register('email', {
              required: 'L\'email est requis',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email invalide',
              },
            })}
            type="email"
            className="input-field mt-1"
            placeholder="marie.dupont@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Téléphone */}
        <div>
          <label className="block text-sm font-medium text-elaia-gray">
            Téléphone
          </label>
          <input
            {...register('phone', {
              required: 'Le téléphone est requis',
              pattern: {
                value: /^(\+41|0)[0-9]{9}$/,
                message: 'Format invalide (ex: +41791234567 ou 0791234567)',
              },
            })}
            type="tel"
            className="input-field mt-1"
            placeholder="+41 79 123 45 67"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Adresse */}
        <div>
          <label className="block text-sm font-medium text-elaia-gray">
            Adresse
          </label>
          <input
            {...register('address', { required: 'L\'adresse est requise' })}
            type="text"
            className="input-field mt-1"
            placeholder="Rue de la Gare 10"
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
          )}
        </div>

        {/* Ville et Code postal */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-elaia-gray">
              Ville
            </label>
            <input
              {...register('city', { required: 'La ville est requise' })}
              type="text"
              className="input-field mt-1"
              placeholder="Gland"
            />
            {errors.city && (
              <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-elaia-gray">
              Code postal
            </label>
            <input
              {...register('postal_code', {
                required: 'Le code postal est requis',
                pattern: {
                  value: /^[0-9]{4}$/,
                  message: 'Code postal invalide',
                },
              })}
              type="text"
              className="input-field mt-1"
              placeholder="1196"
            />
            {errors.postal_code && (
              <p className="mt-1 text-sm text-red-600">{errors.postal_code.message}</p>
            )}
          </div>
        </div>

        {/* Mot de passe */}
        <div>
          <label className="block text-sm font-medium text-elaia-gray">
            Mot de passe
          </label>
          <div className="relative mt-1">
            <input
              {...register('password', {
                required: 'Le mot de passe est requis',
                minLength: {
                  value: 6,
                  message: 'Le mot de passe doit contenir au moins 6 caractères',
                },
              })}
              type={showPassword ? 'text' : 'password'}
              className="input-field pr-10"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        {/* Confirmer le mot de passe */}
        <div>
          <label className="block text-sm font-medium text-elaia-gray">
            Confirmer le mot de passe
          </label>
          <div className="relative mt-1">
            <input
              {...register('confirmPassword', {
                required: 'Veuillez confirmer votre mot de passe',
                validate: value => value === password || 'Les mots de passe ne correspondent pas',
              })}
              type={showConfirmPassword ? 'text' : 'password'}
              className="input-field pr-10"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Conditions générales */}
        <div className="flex items-start">
          <input
            {...register('acceptTerms', {
              required: 'Vous devez accepter les conditions générales',
            })}
            type="checkbox"
            className="h-4 w-4 text-elaia-gold border-gray-300 rounded focus:ring-elaia-gold mt-0.5"
          />
          <label className="ml-2 block text-sm text-elaia-gray">
            J'accepte les{' '}
            <Link to="/terms" className="text-elaia-gold hover:text-elaia-green">
              conditions générales
            </Link>{' '}
            et la{' '}
            <Link to="/privacy" className="text-elaia-gold hover:text-elaia-green">
              politique de confidentialité
            </Link>
          </label>
        </div>
        {errors.acceptTerms && (
          <p className="mt-1 text-sm text-red-600">{errors.acceptTerms.message}</p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Inscription...' : 'Créer mon compte'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <span className="text-sm text-gray-500">Déjà inscrit ?</span>{' '}
        <Link to="/login" className="text-sm text-elaia-gold hover:text-elaia-green">
          Se connecter
        </Link>
      </div>

      {/* Offre Welcome */}
      <div className="mt-6 p-4 bg-gradient-to-r from-elaia-gold/10 to-elaia-green/10 rounded-lg border border-elaia-gold/20">
        <div className="flex items-center">
          <Check className="h-5 w-5 text-elaia-gold mr-2" />
          <p className="text-sm font-medium text-elaia-gray">
            Offre Welcome : 1 séance achetée + 2 offertes pour 45 CHF
          </p>
        </div>
      </div>
    </div>
  );
} 
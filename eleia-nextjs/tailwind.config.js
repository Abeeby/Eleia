/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Crimson Text', 'Georgia', 'serif'],
        'display': ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        cream: '#FAF9F6',
        beige: {
          50: '#FDFCFB',
          100: '#FAF9F6',
          200: '#F5F2ED',
          300: '#EAE4DB',
          400: '#D4C8B8',
          500: '#B8A88F',
          600: '#9B8A6F',
          700: '#7A6B56',
          800: '#5C5143',
          900: '#3E362D',
        },
        sage: {
          50: '#F6F9F6',
          100: '#E8F0E8',
          200: '#D1E0D1',
          300: '#A8C3A8',
          400: '#7FA67F',
          500: '#628962',
          600: '#4D6B4D',
          700: '#3A523A',
          800: '#2B3C2B',
          900: '#1D281D',
        },
        terracotta: {
          50: '#FDF8F6',
          100: '#FAEEE9',
          200: '#F4D9CE',
          300: '#E8B5A0',
          400: '#D78B6C',
          500: '#C46A47',
          600: '#A85538',
          700: '#87422C',
          800: '#6B3524',
          900: '#522A1D',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-up': 'fadeUp 0.5s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
      },
      letterSpacing: {
        'widest': '0.2em',
      }
    },
  },
  plugins: [],
}
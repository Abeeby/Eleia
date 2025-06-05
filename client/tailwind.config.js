/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'elaia': {
          'beige': '#FAF9F6',
          'green': '#6A7352',
          'gold': '#D6B88F',
          'gray': '#3F3F3F',
          'light-gray': '#D8D3C3',
          'mint': '#BFCBB6'
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'alex': ['Alex Brush', 'cursive']
      }
    },
  },
  plugins: [],
}


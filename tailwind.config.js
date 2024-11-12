/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#15100E',
        accent: '#FF6B35',
        secondary: '#D4D4D4',
        'deep-brown': {
          DEFAULT: '#15100E',
          50: '#241A17',
          100: '#1F1613',
          200: '#1A1412',
          300: '#15100E',
          400: '#100C0A',
          500: '#0B0807',
          600: '#060403',
          700: '#020101',
          800: '#000000',
          900: '#000000'
        }
      }
    },
  },
  plugins: [],
};
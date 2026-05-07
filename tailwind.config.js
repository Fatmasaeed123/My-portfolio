/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1E0E1E',
        'brand-midnight': '#101026',
        'brand-deep': '#0A0A1F',
        'brand-purple': '#A78BFA',
        'brand-pink': '#D4A5A5',
      },
      fontFamily: {

        serif: ['Playfair Display', 'serif'],

        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
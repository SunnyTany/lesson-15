/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        tomato: 'tomato'
      },
      fontFamily: {
        main: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}


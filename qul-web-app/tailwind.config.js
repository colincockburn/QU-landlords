/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Raleway', 'sans-serif']
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
      },
      colors: {
        'qul-red': '#D32F2F',
        'qul-red-dark': '#B71C1C',
        'qul-gray': '#777777',
        'qul-dark-gray': '#333333',
        'qul-bg': '#F4F4F4',
      },
      maxWidth: {
        'maxw': '1000px', 
      },      
      maxHeight: {
        '800px': '800px',
        '500px': '500px',
        '1000px': '1000px'
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'exp-img': "url('./Images/exportt.svg')",
       
      },
      colors: {
        'main-green': '#3AB44A;',
        '#FAFFFB': '#FAFFFB',
      },
      width: {
        '39-per': '39%',
      },
    },
  },
  plugins: [],
}

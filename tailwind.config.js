/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode:'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily:{
        'Nunito':['Nunito','Sans']
      },
      
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
    },
  },
  plugins: [],
}
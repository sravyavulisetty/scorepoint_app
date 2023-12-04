/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      fontFamily: {
        'poppins':['Poppins','sans-serif']
      },
      textColor: {
        'textcolor':'var(--text-color)'
      },
      backgroundColor:{
        'bgcolor':'var(--bg-color)',
        'bgbutton':'var(--bg-button)'
      },
      borderColor:{
        'bordercolor':'var(--border-color)'
      },
      width:{
        'width':'45%'
      },
      backgroundImage:{
        'bgimage':'url("./wepik-export-20231121201325zvo9.jpeg")',
        'bggradient':'linear-gradient(90deg, rgb(63, 81, 181) 10%, rgb(14, 165, 233) 30%, rgb(16, 185, 129) 90%)'
      },
      boxShadow:{
        'custom':'5px 5px 5px rgb(63, 81, 181)'
      },
      display: "[group-hover]"
    },
    
  },
  plugins: [],
}


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
        'roboto': ['Roboto', 'sans-serif']
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
    },
    
  },
  plugins: [],
}


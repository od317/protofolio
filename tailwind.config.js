/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
  mode:'jit',
  darkMode: 'class',
  content: [
    './index.html',
     './src/App.vue',
    './src/assets/base.css',
    './src/**/*.{vue,js}'
  ],
  theme: {
    extend: {
      colors:{
        dark1:'#0F3D3E',
        dark2:'#E2DCC8',
        dark3:'#100F0F',
        blue1:'#7DB9B6',
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      }
    },
  },
  plugins: [],
}

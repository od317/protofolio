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
        light1:'#0F3D3E',
        light2:'#F1F1F1',
        light3:'#100F0F',
        blue1:'#7DB9B6',
        dark1:'#654E92',
        dark2:'#121212',
        dark3:'#E8E2E2',
        blue2:'#B9E0FF',
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
      },animation: {
        's1':'s1 3s  linear infinite',
    },
      keyframes: {
      's1':{
        '0%': {
          'background':'rgba(38, 38, 38,1)',
        },
        '50%': {
          'background':'rgba(38, 38, 38, .5)',        
        },
        '100%': {
          'background':'rgba(38, 38, 38,1)',        
        },
      },
    },
    },
  },
  plugins: [],
}

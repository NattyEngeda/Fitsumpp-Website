/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#00cc8f","100":"#84e184","200":"#00e600","300":"#00cc00","400":"#00b300","500":"#009900","600": "#008000","700":"#006600","800":"#004d00","900":"#1e7b1e"},
        secondary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#0091e6","400":"#0081cc","500":"#0072b5","600":"#006199","700":"#005180","800":"#1e40af","900":"#1e3a8a"},
        three: {"50":"#eff6ff","100":"#fdac53","200":"#fda94e","300":"#fd9c35","400":"#fd901c","500":" #fc8403","600":"#e37602","700":"#ca6902","800":"#b15c02","900":"#974f02"},
        four: {"50":"#eff6ff","100":"#fdac53","200":"#fda94e","300":"#fd9c35","400":"#fd901c","500":" #6b5b95","600":"#e37602","700":"#ca6902","800":"#b15c02","900":"#974f02"},
        Random: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},

      }
    },
    fontFamily: {
      'body': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ],
      'sans': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ],
  'Sora' : ['Sora', 'sans-serif'],
    },
  },
  plugins: [
    // require('flowbite/plugin'),
  ],
}
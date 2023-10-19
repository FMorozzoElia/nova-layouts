/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./public/**/*.html', './index.html'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      amber: colors.amber,
      orange: colors.orange,
      teal: colors.teal,
      cyan: colors.cyan,
      green: colors.green,
      'gray': {
        50:  '#F5F6F7',
        100: '#E1E4E6',
        200: '#BAC1C4',
        300: '#889499',
        400: '#617177',
        500: '#394D55',
        600: '#2E3E44',
        700: '#222E33',
        800: '#171F22',
        900: '#0B0F11',
      },
      'primary': {
        50:  '#FCEAE3',
        100: '#F8CCBC',
        200: '#F4AE95',
        300: '#EF906E',
        400: '#EB7247',
        500: '#E75420',
        600: '#BF451A',
        700: '#963715',
        800: '#6E280F',
        900: '#45190A',
      },
      'secondary': {
        50:  '#E4F0F2',
        100: '#BEDCE0',
        200: '#97C7CE',
        300: '#71B2BC',
        400: '#4B9EAA',
        500: '#258998',
        600: '#1F717D',
        700: '#185963',
        800: '#124148',
        900: '#0B292E',
      },
      'white': '#ffffff',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

  
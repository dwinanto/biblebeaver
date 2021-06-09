const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: {
      content: ['_site/**/*.html'],
      options: {
        safelist: [],
      },
    },
    theme: {
      extend: {
        colors: {
          'light-blue': colors.lightBlue,
          cyan: colors.cyan,          
          change: 'transparent',
        },
      },
    },
    variants: {},
    plugins: [],
  }
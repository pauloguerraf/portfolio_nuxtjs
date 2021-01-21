module.exports = {
  theme: {
    darkMode: 'media',
    backdropFilter: {
     'none': 'none',
     'blur': 'blur(30px)',
    },
    extend: {
      colors: {
        primary: '#2852DC',
        secondary: '#FAB152',
        terciary: '#00CEA7',
        background: '#F4E1D2',
      },
      fontFamily: {
        logo: ["Arvo", "sans-serif"],
        menu: ["Playfair Display"]
      },

    },
    scale: {
       '0': '0',
       '25': '.25',
       '50': '.5',
       '75': '.75',
       '90': '.9',
       '95': '.95',
       '100': '1',
       '105': '1.05',
       '110': '1.1',
       '125': '1.25',
       '150': '1.5',
       '200': '2',
      }
  },
  plugins: [
  ]
}

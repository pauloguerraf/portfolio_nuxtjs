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
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  plugins: [
  ]
}

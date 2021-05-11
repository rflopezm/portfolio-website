module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: '#fff',
        gray: '#b2b5ba',
        text: '#000',
        primary: '#10375c',
        secondary: '#8c6e3c',
        menu: 'white',
        title: '#8c6e3c',
        'menu-hover': 'white',
        'menu-active': 'white',
      },

      fontFamily: {
        main: ['Roboto', 'sans-serif'],
        menu: ['Roboto', 'sans-serif'],
        button: ['Roboto', 'sans-serif'],
        paragraph: ['Roboto', 'sans-serif'],
        title: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
};

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'forest': "url('/src/assets/images/PokeForest.png')",
        'back': "url('/src/assets/images/Back.png')",
        'pokedex': "url('/src/assets/images/Pokedex.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'bounce-short': 'bounce 2s infinite'
      },
      backgroundImage: theme => ({
        'forest'     : "url('/src/assets/images/PokeForest.png')",
        'back'       : "url('/src/assets/images/Back.png')",
        'pokedex'    : "url('/src/assets/images/Pokedex.png')",
        'pokedexList': "url('/src/assets/images/PokedexList.png')",
      })
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {},
  },
  plugins: [],
}

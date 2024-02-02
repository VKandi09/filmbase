module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      screens: {
        "other" : {'min' : '340px', 'max' : '1200px'}
      },
      colors: {
        darkbg : "slate-800",
      }
    },
  },
  plugins: [],
}
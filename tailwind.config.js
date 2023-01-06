/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./img/HomeTabsSectionWhy--highlight-best-roi.svg)",
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': '#1292ee',
      'white': '#fff',
      'gray': '#5b6b7b'

    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        WorkSans: ['Work Sans', 'sans-serif'],
      },
      colors: {
        'primary-dark': '#171918',
        'primary-green': '#27AE60',
        'divider-gray': '#A3A3A3',
        'primary-gray': '#3A3B3B',
      },
    },
  },
  plugins: [],
};

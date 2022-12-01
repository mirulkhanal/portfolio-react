/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '3rem',
      },
      fontFamily: {
        WorkSans: ['Work Sans', 'sans-serif'],
      },
      colors: {
        'primary-dark': '#171918',
        'primary-green': '#27AE60',
        'divider-gray': '#A3A3A3',
        'primary-gray': '#3A3B3B',
        'faded-pink': '#E08DAC',
        'matte-yellow': '#FFEC51',
        // 'test-color': '#FF4A1C',
        'pastel-red': '#FF4A1C',
        'primary-teal': '#00bfa5',
        'python-blue': '#346F9E',
      },
    },
  },
  plugins: [],
};

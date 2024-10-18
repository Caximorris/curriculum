/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-teal': '#8fcfcf',
        'dark-teal': '#214e47',
      },
      boxShadow: {
        'light-shadow': '6px 6px 12px #000000, -6px 6px 16px #000000, 6px -6px 16px #000000, -6px -6px 16px #000000',
        'dark-shadow': '6px 6px 12px #ffffff,  -6px -6px 12px #ffffff,  -6px 6px 12px #ffffff,  6px -6px 12px #ffffff',
      },
    },
  },
  plugins: [],
};
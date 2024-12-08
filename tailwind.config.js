/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        'screen-56': 'calc(100vh - 56px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
};


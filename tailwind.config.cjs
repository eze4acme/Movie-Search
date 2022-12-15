/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '645px',

      'md': '960px',

      'lg': '1440px',
    },
    extend: {},
  },
  plugins: [],
}

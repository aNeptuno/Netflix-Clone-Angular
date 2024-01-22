/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,js}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '885px',
      }
    },
  },
  plugins: [],
}

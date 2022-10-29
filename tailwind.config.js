/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit-12': 'repeat(auto-fit, minmax(12rem, 1fr))',
      }
    },
  },
  plugins: [],
}

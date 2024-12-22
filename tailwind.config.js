/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // poiret: ['Poiret One', 'sans-serif'],
      },
      colors: {
        selRed: '#FFB6C1'
      }
    },
  },
  plugins: [],
}
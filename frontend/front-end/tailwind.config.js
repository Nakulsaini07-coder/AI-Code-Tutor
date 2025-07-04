/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ this enables dark mode via class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
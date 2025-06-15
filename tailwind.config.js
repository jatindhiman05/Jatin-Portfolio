/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // Inside the export default object
  daisyui: {
    themes: ["light", "dark", "cupcake"], // Add your preferred themes
  },
}
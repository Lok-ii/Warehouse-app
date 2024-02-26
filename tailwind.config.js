/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        buttonColor: "#7164f0",
        tabColor: "#e8e6f9"
      }
    },
  },
  plugins: [],
}
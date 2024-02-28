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
      },
      screens: {
        'mobile-small' : '321px',
        'mobile-medium' : '426px',
        'mobile-large' : '476px',

        'tablet': '769px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1025px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1281px',
        // => @media (min-width: 1280px) { ... }
      },
      boxShadow: {
        '3xl': '0 0 1rem 0.3rem rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
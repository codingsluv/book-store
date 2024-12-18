/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : "#CE2E69",
        'secondary' : "#F5F5F5",
        'blackBg' : "#000000",
        'favorites' : "#F5F5F5",
      },
      fontFamily: {
        'primary' : ['Montserrat', 'sans-serif'],
        'secondary' : ['Nunito Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


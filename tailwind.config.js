/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      backgroundImage: {
        "hero-main": "url('/src/assets/hero/hero-main.png')",
        "partners-bg": "url('/src/assets/partners/partners-bg.png')",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        deluxe: "deluxe",
        bebas: ["Bebas Neue", "sans-serif"],
      },
      colors: {
        cardsBg: "#1D1D1D",
      },
    },
  },
  plugins: [],
};

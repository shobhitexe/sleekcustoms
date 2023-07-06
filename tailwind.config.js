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
        "hero-main": "url('/hero/hero-main.png')",
        "hero-mob": "url('/hero/hero-mob.jpg')",
        "partners-bg": "url('/partners/partners-bg.png')",
        "about-bg": "url('/about/SBG.png')",
        "contact-bg": "url('/contact/contact-bg.png')",
        "portfolio-head": "url('/portfolio/pf-head.png')",
        "auto-detailing-bg": "url('/autoDetailing/AD-bg.png')",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        deluxe: "deluxe",
        bebas: ["Bebas Neue", "sans-serif"],
      },
      colors: {
        cardsBg: "#1D1D1D",
        priceText: "#36C3F2",
      },
    },
  },
  plugins: [],
};

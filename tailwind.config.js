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
        "hero-main": "url('/images/hero/hero-main.webp')",
        "hero-mob": "url('/images/hero/hero-mob.webp')",
        "partners-bg": "url('/images/partners/partners-bg.webp')",
        "about-bg": "url('/images/about/SBG.webp')",
        "contact-bg": "url('/images/contact/contact-bg.webp')",
        "portfolio-head": "url('/images/portfolio/pf-head.webp')",
        "auto-detailing-bg": "url('/images/autoDetailing/AD-bg.webp')",
        "paint-correction-bg": "url('/images/PaintCorrection/paintHead.webp')",
        "ceramic-coating-bg":
          "url('/images/CeramicCoating/CeramicCoatingMain.webp')",
        "ceramic-benifits-bg": "url('/images/ServicesComponent/AD-1.webp')",
        "paint-protection-bg": "url('/images/PaintProtection/paint.webp')",
        "about-main-bg": "url('/images/about/about-main.webp')",
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

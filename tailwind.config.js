/** @type {import('tailwindcss').Config} */

export default  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
/** @type {import('tailwindcss').Config} */
  //dark mode with tailwind
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('img/hero-bg.svg')",
      },
      boxShadow: {
        'autofill': '0 0 0 1000px rgba(220, 237, 247, 0.5) inset', // Adjust the color and opacity as needed
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        primaryColor: "#000",
        DarkprimaryColor: "#000E85",
        secondaryColor: "",
        "stars":"#603CFF",
        "ParagraphText":"#4A4A4A",
        "btn-base-light":"#000",
        "btn-base-dark":"#603CFF",
        "DarkText":"#BFC5FA"

      },
      fontFamily: {
        inter: ["inter", "sans-serif"],

      },
      fontSize: {},
      animation: {
        "fade-in": "fade-in 1s ease-in-out",
        "fade-out": "fade-out 1s ease-in-out",
        "zoom-in": "zoom-in 0.5s ease-in-out",
        "zoom-out": "zoom-out 0.5s ease-in-out",
        "fade-right": "fade-right 1s ease-in-out",
        "fade-left": "fade-left 1s ease-in-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "fade-out": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "zoom-in": {
          "0%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
        "zoom-out": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.8)" },
        },
        "fade-right": {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "fade-left": {
          "0%": { opacity: 0, transform: "translateX(-100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

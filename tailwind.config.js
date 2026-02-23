/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          gold: "#D4AF37",       // Classic Gold
          "gold-light": "#F4DFC8", // Champagne Gold
          "gold-dark": "#AA8C2C",  // Antique Gold
          dark: "#0F0F0F",       // Deep Black
          "dark-light": "#1A1A1A", // Charcoal
          cream: "#F9F7F2",      // Off-white/Cream
          "cream-dark": "#E6E2D6", // Darker Cream for borders
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};

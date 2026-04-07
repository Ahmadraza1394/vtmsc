/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#678D34",
          secondary: "#9B3830",
        },
        background: {
          light: "#F5F7F0",
          main: "#FFFFFF",
        },
        banner: "#9B3830",
        footer: {
          dark: "#1A1A1A",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        lato: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

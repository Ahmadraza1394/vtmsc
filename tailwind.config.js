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
          primary: "#6F9A37",
        },
        background: {
          light: "#F5F7F0",
          main: "#FFFFFF",
        },
        banner: "#90221A",
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

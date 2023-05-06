/** @type {import('tailwindcss').Config} */
const defaultColors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        primary: "#1A0E37",
        secondry: "#26164B",
        primaryYellow: "#FFB800",
        textWhite: "white",
      },
    },
  },
  plugins: [],
};

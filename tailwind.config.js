/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: "Montserrat, sans-serif",
      display: "Fraunces, serif",
    },
    extend: {
      colors: {
        cyan: "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        darkblue: "hsl(212, 21%, 14%)",
        grayishblue: "hsl(228, 12%, 48%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "14px" },
      });
    }),
  ],
};

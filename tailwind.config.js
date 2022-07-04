/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        mainBG: "#011627",
        mainBlue: "#4D5BCE",
        mainGreen: "#43D9AD",
        mainPink: "#E99287",
        mainWhite: "#E5E9F0",
        mainGray: "#607B96",
        mainOrange: "#FEA55F",
        secondaryGray: "#1E2D3D",
      },
    },
  },
  plugins: [],
};

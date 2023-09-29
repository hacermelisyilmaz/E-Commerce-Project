/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#252B42",
      secondary: "#23A6F0",
      tertiary: "#737373",
      oldgray: "#BDBDBD",
      price: "#23856D",
      star: "#FFCE31",
      iconorange: "#E77C40",
      lightgray: "#FAFAFA",
    },
  },
  plugins: [require("flowbite/plugin")],
};

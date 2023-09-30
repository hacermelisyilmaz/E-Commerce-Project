/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      star: "#FFCE31",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#252B42",
          secondary: "#23A6F0",
          accent: "#737373",
          neutral: "#BDBDBD",
          success: "#23856D",
          warning: "#E77C40",
          info: "#FAFAFA",
        },
      },
    ],
  },
};

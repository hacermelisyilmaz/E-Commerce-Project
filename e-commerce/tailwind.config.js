/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#252B42",
          "primary-focus": "#2A7CC7",
          secondary: "#23A6F0",
          "secondary-content": "#8EC2F2",
          "secondary-focus": "#B2E3FF",
          accent: "#737373",
          neutral: "#BDBDBD",
          success: "#23856D",
          "success-content": "#2DC071",
          warning: "#E77C40",
          "warning-content": "#FFCE31",
          info: "#FAFAFA",
          error: "#E74040",
        },
      },
    ],
  },
};

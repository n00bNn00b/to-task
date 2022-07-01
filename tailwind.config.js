/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e44232",
          secondary: "#fcc34e",
          accent: "#37cdbe",
          neutral: "#6a8568",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
    ],
  },
};

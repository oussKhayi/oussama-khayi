/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f1830",
        secondary: "#54d2d4",
        legend: "#0f1830",
        thirdly: "#e75a36",
      },
    },
  },
  plugins: [],
};

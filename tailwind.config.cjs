/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        base: ["Cabinet Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}

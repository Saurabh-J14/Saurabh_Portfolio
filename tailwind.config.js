/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'], // set DM Sans as default
      },
    },
    fontFamily: {
      signature: ["DM Sans"],
    },
  },
  plugins: [],
}


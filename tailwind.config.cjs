/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  variants: {
    underline: ['hover']
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

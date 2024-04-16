/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,tsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        opacity: {
          '0%':{opacity:'0'},
          '100%':{opacity:'1'}
      }
    },
  },
  plugins: [],
}
}


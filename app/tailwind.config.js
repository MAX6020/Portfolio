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
    screens:{
      sm:{min:'320px',max:'480px'},
      md:{min:'481px',max:'768px'},
      lg:{min:'769px',max:'1024px'},
      xl:{min:'1025px',max:'1280px'},
      xl2:{min:'1281px',max:'1440px'}
    }
  },
  plugins: [],
}
}


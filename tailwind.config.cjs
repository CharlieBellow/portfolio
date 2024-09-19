/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        bgDark: '#2c3035',
        text: '#dfdfdf',
        action: '#61dafb',
        "blue-dark": '#2B4C7E',
				"blue-light": '#567EBB',
				white: "#ECECEC",
				"gray-light": "#DCE0E6",
				"gray-dark": "#606D80"
      },
    },
  },
  plugins: [],
}

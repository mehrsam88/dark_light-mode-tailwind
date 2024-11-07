/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "purple-medium": "#2C2D5B",
        "dark-red": "#F67366",
        "primary-50": "#E8EEFF",
        "cream-light": "#FFF6DF",
        "black-light": "#333333",
        "black-dark": "#141414",
      },
      boxShadow: {
        "10xl": "0px 0px 100px 5px rgba(0,0,0,1)",
      },
      fontFamily: {
        "lato-regular": ["Lato-regular"],
        "lato-black": ["Lato-black"],
        "lato-bold": ["Lato-bold"],
        "lato-light": ["Lato-light"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

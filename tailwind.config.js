/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        omkaraPurple: "#7A6AAE",
        omkaraDeep: "#5E4C9C",
        omkaraLavender: "#E9E6F5",
        omkaraLight: "#F7F6FB",
        omkaraText: "#3A3552",
      },
    },
  },
  plugins: [],
};


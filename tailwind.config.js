/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "481px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};

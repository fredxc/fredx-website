/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#282521",
        "soft-green": "#959C91",
        "light-cream": "#F6F7F6",
        "test-color": "#A89986",
      },
      fontFamily: {
        sans: ["Cabinet Grotesk", "system-ui", "sans-serif"],
        heading: ["General Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        "7xl": "6rem",
        "8xl": "10rem",
        "9xl": "12rem",
      },
      maxWidth: {
        "7xl": "75rem",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#282521",
        "soft-green": "#959C91",
        "light-cream": "#F6F7F6",
      },
      fontFamily: {
        sans: ["Cabinet Grotesk", "system-ui", "sans-serif"],
        heading: ["General Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        "8xl": "10rem",
      },
      maxWidth: {
        "7xl": "75rem",
      },
    },
  },
  plugins: [],
};

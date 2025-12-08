/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro Text", "Inter", "system-ui", "Helvetica Neue", "sans-serif"],
      },
      animation: {
        "fade-up": "fade-up 0.9s ease forwards",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "rgb-black": "rgba(0, 0, 0, 0.75)",
      },
    },
  },
  plugins: [],
};

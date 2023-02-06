/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        img1: "url('./src/assets/pexels-tima-miroshnichenko-7991579.jpg')",
        img2: "url('./src/assets/pexels-tima-miroshnichenko-7991158.jpg')",
        img3: "url('./src/assets/pexels-tima-miroshnichenko-7991327.jpg')",
      },
    },
  },
  plugins: [],
};

const { heroImageSlider } = require("./constants");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "slide-1": `url(${heroImageSlider[0].url})`,
        "slide-2": `url(${heroImageSlider[1].url})`,
        "slide-3": `url(${heroImageSlider[2].url})`,
        "slide-4": `url(${heroImageSlider[3].url})`,
        "slide-5": `url(${heroImageSlider[4].url})`,
        "slide-6": `url(${heroImageSlider[5].url})`,
      },
    },
  },
  plugins: [],
};

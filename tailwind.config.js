/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [
    require("@tailwindcss/aspect-ratio"), // Correctly includes aspect-ratio plugin
    require("daisyui"), // Correctly includes daisyUI plugin
  ],
};

/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 1.5s ease-in-out",
        "slide-up": "slide-up 1.5s ease-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "slide-up": {
          "0%": { transform: "translateY(50%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [
    require("@tailwindcss/aspect-ratio"), // Correctly includes aspect-ratio plugin
    require("daisyui"), // Correctly includes daisyUI plugin
  ],
};

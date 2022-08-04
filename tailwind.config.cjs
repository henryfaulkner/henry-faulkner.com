/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],

        sans: ["Manrope", "sans-serif"],
        serif: ["serif"],
      },
      screens: {
        "3xl": "1633px",
        "1.5xl": "1333px",
        "lt-2xl": { max: "1535px" },

        "lt-xl": { max: "1279px" },

        "lt-lg": { max: "1023px" },

        "lt-md": { max: "767px" },

        "lt-sm": { max: "639px" },

        "xsm": "439px",
        "lt-xsm": { max: "439px" },

        "xxsm": "400px",
        "lt-xxsm": { max: "400px" },

        'coarse': { 'raw': '(pointer: coarse)' },
        'fine': { 'raw': '(pointer: fine)' },
      },
      container: {
        center: "true",
      },
      colors: {
        primary: "#54ddff"
      }
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")]
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        circe: ["Circe", "sans-serif"],
        circeExtraLight: ["Circe Extra Light", "sans-serif"],
        circeLight: ["Circe Light", "sans-serif"],
        circeBold: ["Circe Bold", "sans-serif"],

        sans: ["Manrope", "sans-serif"],
        serif: ["serif"],
      },
      screens: {
        "3xl": "1633px",
        "1.5xl": "1333px",
        "lt-2xl": { max: "1535px" },

        "lt-xl": { max: "1279px" },

        "lt-lg": { max: "1080px" },

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
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          light: '#e76f51',
          DEFAULT: '#54DDFF',
          dark: '#54DDFF',
        },
        secondary: {
          light: '#264653',
          DEFAULT: '#FFF',
          dark: '#FFF',
        },
        tertiary: {
          light: '#2a9d8f',
          DEFAULT: '#D1D5DB',
          dark: '#D1D5DB',
        },
        primaryBg: {
          light: '#e9c46a',
          DEFAULT: '#000',
          dark: '#000',
        },
        footerBg: {
          light: '#f4a261',
          DEFAULT: '#E5E7EB',
          dark: '#E5E7EB',
        }
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")], 
  safelist: [
    {
      pattern: /bg-(primary|secondary|tertiary|primaryBg|footerBg)-(light|dark)/,
      variants: ['lg']
    },
    {pattern: /text-(primary|secondary|tertiary|primaryBg|footerBg)-(light|dark)/},
    {pattern: /fill-(primary|secondary|tertiary|primaryBg|footerBg)-(light|dark)/},
  ]
}

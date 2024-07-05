/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        light: {
          primary: "#EEEEEE",
          secondary: "#686D76",
          tertiary: "#222831",
        },
        dark: {
          primary: "#222831",
          secondary: "#EEEEEE",
        },
        // special: "#A51C30",
        special: "#DC5F00",
      },
    },
  },
  plugins: [],
};
// module.exports = {
//   darkMode: "selector",
//   // ...
// };

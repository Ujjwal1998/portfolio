/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#EEEEEE",
        secondary: "#686D76",
        tertiary: "#373A40",
        special: "DC5F00",
      },
    },
  },
  plugins: [],
};

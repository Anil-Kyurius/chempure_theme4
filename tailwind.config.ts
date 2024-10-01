/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primart_clr: "#15426e",
      },
      fontFamily: {
        Montserrat: ["var(--font-montserrat)"],
        Roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
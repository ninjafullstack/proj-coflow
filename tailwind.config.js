/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sf: ["var(--font-fs)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#C73E00",
        "primary-focus": "#e36227",
        lightgray: "#F9FAFB",
        deepgray: "#2E2E2E",
        headers: "#222",
        dark: "#161616",
        semihead: '#9B9B9B',
        greyhead: '#6A7080',
        grayline: '#E3E3E3',
      },
      boxShadow: {
        "3xl": "6px 6px 24px 0px rgba(238, 238, 238, 0.70)",
      },
    },
  },
  plugins: [require("daisyui"), "prettier-plugin-tailwindcss"],
};

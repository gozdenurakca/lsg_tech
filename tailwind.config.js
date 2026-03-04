/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0066cc",
          dark: "#004c99",
          light: "#3385d6",
        },
        secondary: {
          DEFAULT: "#00b894",
          dark: "#00a383",
          light: "#33c9a8",
        },
        dark: "#1a1a2e",
        gray: {
          DEFAULT: "#4a4a5e",
          light: "#f8f9fa",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

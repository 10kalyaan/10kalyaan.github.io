/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#071013",
        panel: "#0d171b",
        line: "#203138",
        mint: "#74f2ce",
        amber: "#f6c177",
        coral: "#ff8f70",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 16px 60px rgba(116, 242, 206, 0.12)",
      },
    },
  },
  plugins: [],
};

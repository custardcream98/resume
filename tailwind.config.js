const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      sans: ["Noto Sans KR", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      boxShadow: {
        section: "0 0 60px -10px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        black: "#222222",
        gray: "#E9E9E9",
        white: "#F0F0F0",
        blue1: "#0938F0",
        blue2: "#094AF0",
        blue3: "#0961F0",
        blue4: "#0978F0",
        blue5: "#03B8F4",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss"), "accessibility"],
  // accessibility 플러그인을 이용하면 Tailwind에서 제공하는 sr-only 스타일을 사용할 수 있습니다.
};

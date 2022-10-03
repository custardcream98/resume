const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        pc: "1fr 2fr",
      },
      fontFamily: {
        sans: ["Noto Sans KR", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: "#222222",
        gray: "#E9E9E9",
        textgray: "#737373",
        darkgray: "#B0B0B0",
        smokewhite: "#fcfdfe",
        blue1: "#0938F0",
        blue2: "#0961F0",
        blue3: "#0978F0",
        blue4: "#03B8F4",
      },
      fontSize: {
        "3xl": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "4xl": [
          "2.5rem",
          {
            lineHeight: "2.5rem",
            letterSpacing: "-0.02em",
            fontWeight: "900",
          },
        ],
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss"), "accessibility"],
  // accessibility 플러그인을 이용하면 Tailwind에서 제공하는 sr-only 스타일을 사용할 수 있습니다.
};

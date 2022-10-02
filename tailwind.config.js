const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      // boxShadow: {
      //   material1:
      //     "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      //   material2:
      //     "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      // },
      fontFamily: {
        sans: ["Noto Sans KR", ...defaultTheme.fontFamily.sans],
      },
      backgroundSize: {
        16: "4rem",
      },
      colors: {
        black: "#222222",
        gray: "#E9E9E9",
        textgray: "#737373",
        darkgray1: "#909090",
        darkgray2: "#B0B0B0",
        smokewhite: "#fcfdfe",
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

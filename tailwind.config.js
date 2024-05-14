/** @type {import('tailwindcss').Config} */

const colors = {
  white: "#ffffff",
  black: "#000000",
  gray: "#555555",
  invalid: "#F6546A",

  primary: "#0F172A",

  secondary: "#9B9DA3",
  tertiary: "#6865FE",
  whiteSmull: "#CBD5E1",
  backGround: "#F9FAFE",
  green: "#008379",
  yellow: "#FFB24D",
};

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    backgroundColor: {
      ...colors,
    },
    borderColor: {
      ...colors,
      "border-1": "#DADADA",
    },
    colors: {
      ...colors,
    },
    fontSize: {
      ssm: "0.5rem",
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
    },
    fontFamily: {
      urbaninst: ["Urbanist", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4x0": "6px",
        "4xl": "0.5rem",
        "4x2": "1rem",
        "4x3": "2rem",
      },

      margin: {
        0: "0",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
      },
      padding: {
        0: "0",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
      },
    },
  },
  plugins: [],
};

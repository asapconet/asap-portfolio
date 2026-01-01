//  @asapconet Design System - https://www.figma.com/file/XkTL6YWWU9shWiCDYM9H8l/Portfolio-(Community)?type=design&node-id=0-1&mode=design&t=Pp4d60kHVutPxaB9-0

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      transitionDuration: {
        fast: "150ms",
        base: "220ms",
        slow: "320ms",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      borderRadius: {
        4: "4px",
        5: "5px",
        6: "6px",
        8: "8px",
        12: "12px",
        15: "15px",
        20: "20px",
      },
      maxWidth: {
        "100": "100px",
        "9xl": "1500px",
        "screen-3xl": "1650px",
      },
      height: {
        "90vh": "90vh",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "34px",
        xl: "70px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      fira: ["Fira Code", "monospace"],
      sans: ["Fira Code", "sans-serif"],
    },
    fontSize: {
      xxs: "10px",
      xs: "12px",
      xs2: "13px",
      sm: "14px",
      base: "16px",
      md: "18px",
      md2: "19px",
      lg: "20px",
      lg2a: "21px",
      lg2: "24px",
      xl: "28px",
      "2xl": "32px",
      "2xl2": "34px",
      "3xl": "39px",
      "4xl": "48px",
      "5xl": "60px",
      "6xl": "72px",
    },
    dropShadow: {
      none: "none",
    },
    colors: {
      transparent: "transparent",
      background: "#282C33",
      black: "#000000",
      white: "#FFFFFF",
      pri: "#C778DD",
      sec: "#ABB2BF",
    },
  },
  plugins: [],
};

module.exports = config;

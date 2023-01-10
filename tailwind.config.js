/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        sm: ".0938rem",
      },
      borderRadius: {
        base: "1.1875rem",
      },
      colors: {
        primaryGray: {
          50: "#E2E2E2",
          100: "#EDEDED",
          200: "#F4F4F4",
          300: "#9A9A9A",
          400: "#878787",
        },
        purple: "#5602E0",
      },
      fontFamily: {
        neuf: "NeufileGrotesk",
      },
      fontSize: {
        "2.5xl": "1.75rem",
        "3.5xl": "2.125rem",
        "5.5xl": "3.25rem",
        "6.5xl": "4rem",
        "7.8xl": "5.375rem",
      },
      lineHeight: {
        loose: "1.2143",
        light: "1.2308",
        snug: "1.4",
        extra_snug: "1.6",
        tighter: "1.33",
        8.5: "2.125rem",
        16: "4rem",
        18: "4.5rem",
      },
      letterSpacing: {
        tightest: "0.03em",
        tight: "0.02em",
        tighter: "0.015em",
        wide: "0.01em",
        wider: "0.0125em",
      },
      maxHeight: {
        412: "25.75rem",
      },
      maxWidth: {
        189.25: "47.3125rem",
        201.5: "50.375rem",
        202.75: "50.6875rem",
        "8xl": "90rem",
        "9xl": "100rem",
      },
      minHeight: {
        412: "25.75rem",
        177: "44.25rem",
      },
      spacing: {
        0.2: "0.09375rem",
        0.75: "0.1875rem",
        2.75: "0.6875rem",
        4.5: "1.1875rem",
        5.1: "1.3125rem",
        6.25: "1.5625rem",
        8.25: "2.0625rem",
        8.75: "2.1875rem",
        9.5: "2.375rem",
        10.5: "2.5625rem",
        12.5: "3.0625rem",
        13: "3.25rem",
        8.4: "3.55375rem",
        15: "3.75rem",
        16.6 : "4.174375rem",
        91: "5.6875rem",
        26.5 : "6.625rem",
        31: "7.75rem",
        34: "8.5rem",
        75.5: "18.875rem",
        100: "25.0193rem",
        120: "28.620625rem",
        119.25: "29.8125rem",
        121.25: "30.3125rem",
        201.5: "50.375rem",
      },
      dropShadow: {
        pr: "1px 1px 14px rgba(0, 0, 0, 0.1)",
        small: "1px 1px 2px rgba(0, 0, 0, 0.1)",
      },
      margin: {
        1.75: "0.4375rem",
      },
      screens: {
        mediumXl: "1440px",
      },
      width: {
        72.5: "18.125rem",
        77.5: "19.375rem",
        189.25: "47.3125rem",
        202.75: "50.6875rem",
      },
      gap: {
        6.5: "1.5625rem",
      },
      padding: {},
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

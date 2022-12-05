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
      boxShadow: {
        pr: "1px 1px 14px rgba(0, 0, 0, 0.1)",
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
        neuf: ["NeufileGrotesk"],
      },
      fontSize: {
        "2.5xl": "1.75rem",
        "5.5xl": "3.25rem",
        "6.5xl": "4rem",
        13: "3.25rem",
        16: "4rem",
        21.5: "5.375rem",
      },
      lineHeight: {
        extra: "1.66",
        light: "1.2308",
        loose: "1.2143",
        snug: "1.4",
        "extra-snug": "1.6",
        tighter: "1.33",
        16: "4rem",
        18: "4.5rem",
      },
      letterSpacing: {
        tight: "0.02em",
        tighter: "0.015em",
        wide: "0.01em",
        wider: "0.0125em",
      },
      maxHeight: {
        412: "25.75rem",
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
        202.75: "50.6875rem",
        201.5: "50.375rem",
        189.25: "47.3125rem",
      },
      minHeight: {
        412: "25.75rem",
      },
      spacing: {
        sm: "0.188rem",
        0.2: "0.09375rem",
        2.75: "0.6875rem",
        4.2 : "1.12125rem",
        4.5: "1.1875rem",
        5.1: "1.3125rem",
        5.5 : "1.325625rem",
        6.25: "1.5625rem",
        8.4: "3.55375rem",
        10.5: "2.5625rem",
        12.5: "3.0625rem",
        13: "3.25rem",
        15: "3.75rem",
        17.7: "4.441875rem",
        20.25: "5.0625rem",
        31: "7.75rem",
        33: "8.25rem",
        34: "8.5rem",
        35.55: "8.8875rem",
        91: "5.6875rem",
        121.25: "30.3125rem",
        137: "34.25rem",
        201.5: "50.375rem",

      },
      dropShadow: {
        pr: "1px 1px 14px rgba(0, 0, 0, 0.1)",
      },
      margin: {
        1.75: "0.4375rem",
      },
      width: {
        290: "18.125rem",
        310: "19.375rem",
        757: "47.3125rem",
        811: "50.6875rem",
      },
      gap: {
        6.5: "1.5625rem",
      },
      padding: {
        
      }
    },
  },
  plugins: [],
};

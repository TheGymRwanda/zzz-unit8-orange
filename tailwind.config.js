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
        purple: '#5602E0',
      },
      fontFamily: {
        'neuf': ['NeufileGrotesk'],
      },
      fontSize: {
        '2.5xl': '1.75rem',
        '5.5xl': '3.25rem',
        '6.5xl': '4rem',
      },
      lineHeight: {
        extra : "1.66",
        light: "1.2308",
        loose: "1.2143",
        snug: "1.4",
        'extra-snug': "1.6",       
        tighter: "1.33",      
      },
      letterSpacing: {
        tight: "0.02em",
        tighter: "0.015em",
        wide: "0.01em",
        wider: "0.0125em"
      },
      maxWidth: {
        "8xl": "90rem",
        "201.5": "50.375rem",
        "189.25": "47.3125rem"
      }, 
      spacing: {
        sm: "0.188rem",
        "6.25": "1.5625rem",
        "201.5": "50.375rem"
      }, 
      margin: {
        "1.75": "0.4375rem"
      } 
    },
  },
  plugins: [],
}

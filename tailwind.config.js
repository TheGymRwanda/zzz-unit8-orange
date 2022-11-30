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
      height: {
        "412": "25.75rem",
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
      maxHeight:{
        "412": "25.75rem",
      }
      ,
      maxWidth: {
        "8xl": "90rem",
        "201.5": "50.375rem",
        "189.25": "47.3125rem"
      }, 
      spacing: {
        sm: "0.188rem",
        "0.2": "0.09375rem",
        "4.5": "1.1875rem",
        "5.1": "1.3125rem",
        "6.25": "1.5625rem",
        "8.4": "3.55375rem",
        "10.5": "2.5625rem",
        "201.5": "50.375rem"       
      }, 
      margin: {
        "1.75": "0.4375rem"
      }, 
      width: {
        "290": "18.125rem",
        "310": "19.375rem",
        "757": "47.3125rem",
        "811": "50.6875rem",
      },
      gap: {
        "6.5": "1.5625rem"
      }
    },
  },
  plugins: [],
}

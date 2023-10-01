/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green_terminal": "#1ED637",
        "deep-blue": "#010026",
        "deep_cyan": "#222735",
        "electric-blue": "#2165d1",
        "mid-grey": "#8e949e",
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #065ec2 14.53%, #467bb8 69.36%, #6889b0 117.73%)",
        "gradient-reverseblue":
          "linear-gradient(90deg, #6889b0 14.53%, #467bb8 69.36%, #065ec2 117.73%)"
      }),
      fontFamily: {
        jellyfish: ["IBM Plex Mono", "sans"],
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        odile: "url('./assets/odile.png')",
        kevin: "url('./assets/kevin.png')",
        yann: "url('./assets/yann.png')",
        growth: "url('./assets/growth-mindset.png')"
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

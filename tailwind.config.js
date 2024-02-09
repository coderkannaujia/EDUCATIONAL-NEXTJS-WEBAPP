/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        amit: {
          blue: "100D7A",
          green: "D9ECFF",
          yello: "#F1A501",

          gray: "#5E6282",
        },
      },
      fontFamily: {
        abc: ["Poppins", "Pacifico", "Volkhov"],
      },
    },
  },
  plugins: [],
};

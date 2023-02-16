const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1320px",
      },
      colors: {
        primary: colors.green,
        "light-green": "#f4f9f4",
      },
      fontFamily: {
        sans: ["var(--font-rubik)", ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: colors.green[500],
              fontWeight: "400",
              textDecoration: "none",
              "&:hover": {
                color: colors.green[500],
                textDecoration: "underline",
              },
            },
            strong: {
              fontWeight: "500",
            },
            li: {
              "&::marker": {
                color: colors.green[500],
                fontWeight: "500",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

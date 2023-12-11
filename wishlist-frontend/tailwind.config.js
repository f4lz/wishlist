/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat Alternates'],
      },
      fontWeight: {
        medium: "500",
        normal: "400",
        semibold: "600",
      },
      colors: {
        accent: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
        },
        background: {
          primary: "rgb(var(--color-background-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-background-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--color-background-tertiary) / <alpha-value>)",
        },
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
      },
    },
  },
  plugins: [],
}


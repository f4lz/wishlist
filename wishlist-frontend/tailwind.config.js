/** @type {import('tailwindcss').Config} */
export default {
  plugins: [],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    borderRadius: {
      large: '20px',
      full: '9999px'
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat Alternates'],
      },
      fontWeight: {
        medium: '500',
        normal: '400',
        semibold: '600',
      },
      colors: {
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        background: {
          primary: 'rgb(var(--color-background-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-background-secondary) / <alpha-value>)',
        },
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        error: 'rgb(var(--color-error) / <alpha-value>)',
      },
    },
  },
}

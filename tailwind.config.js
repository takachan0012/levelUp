/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      textShadow: {
        'sm': '2px 1px black,-1px 0px black',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.15)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.2)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
        'none': 'none',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"),
  function ({ addUtilities }) {
    const newUtilities = {
      '.text-shadow-sm': {
        textShadow: '2px 1px black,-1px 0px black',
      },
      '.text-shadow-md': {
        textShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      '.text-shadow-lg': {
        textShadow: '0 10px 15px rgba(0, 0, 0, 0.15)',
      },
      '.text-shadow-xl': {
        textShadow: '0 20px 25px rgba(0, 0, 0, 0.2)',
      },
      '.text-shadow-2xl': {
        textShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
      },
      '.text-shadow-none': {
        textShadow: 'none',
      },
    }

    addUtilities(newUtilities, ['responsive', 'hover'])
  }
  ],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#535da1",
        "secondary": "#14b789",
        "accent": "#fba31e",
        "neutral": "#ffffff",
        "base-100": "#ffffff",
      },
    },],
  },
  plugins: [
    require('daisyui'),
  ],
}


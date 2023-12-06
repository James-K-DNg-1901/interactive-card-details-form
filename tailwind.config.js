/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'card-front': "url('./images/bg-card-front.png')",
        'card-back': "url('./images/bg-card-back.png')",
      },
    },
  },
  plugins: [],
}


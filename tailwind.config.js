/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      boxShadow: {
        '2bs': ["3px 3px 3px rgba(255,255,255,0.1) ", "-3px -3px 3px rgba(255,255,255,0.1) "]
      },
      dropShadow: {
        'bs': ["7px 7px 10px rgba(0,0,0,0.1) ", "-7px -7px 10px rgba(0,0,0,0.1) "]
      },
    },
  },
  plugins: [],
}


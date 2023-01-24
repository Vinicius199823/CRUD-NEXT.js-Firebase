/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:{
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
  
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    safelist:[
      /^bg-/,
      /^to-/,
      /^from-/,
    ]

  },
  theme: {
    extend: {},
  },
  variants:{
    extends:{},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#1E90FF',
        'secondary': '#E9EDF7',
        'primary-green': '#5BDE91',
        // 'outline-dark': '#E1E5EB',
        'secondary-text': '#5e6775',
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",  "node_modules/flowbite/**/*.js" ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin') ],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add paths to all files that will use Tailwind CSS
  ],
  theme: {
    extend: {
      colors: {
        'bgColor': '#FFFFFF',
        'buttonColor': '#9C69E2',
        'textTitleColor': '#212353',
        'textParaColor': '#4B5D68'
      },
    },
  },
  plugins: [],
}
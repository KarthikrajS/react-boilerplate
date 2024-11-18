/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode toggling by class
  theme: {
    extend: {
      colors: {
        light: '#ffffff', // Light theme background
        dark: '#1f2937',  // Dark theme background
        primary: '#3490dc', // Primary color (will stay consistent)
        secondary: '#ffed4a', // Secondary color (optional)
      },
    },
  },
  plugins: [],
}

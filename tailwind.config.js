/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Added to include src directory
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          800: '#1f2937', // Dark gray for sidebar
          900: '#111827', // Very dark gray for background
        },
        blue: {
          400: '#60a5fa', // Light blue for links
        },
      },
      // Enable dark mode by default
      darkMode: 'class',
    },
  },
  plugins: [],
};

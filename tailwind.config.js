/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./client/**/*.{js,jsx}", // This should match the location of your JS and JSX files where Tailwind classes are used
    "./public/index.html", // Assuming you are using Tailwind classes here as well
    // Add any other paths where you might be using Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

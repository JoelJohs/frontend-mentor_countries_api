/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          background: "hsl(0, 0%, 98%)", // Very Light Gray
          text: "hsl(200, 15%, 8%)", // Very Dark Blue
          input: "hsl(0, 0%, 52%)", // Dark Gray
          elements: "hsl(0, 0%, 100%)", // White
        },
        dark: {
          background: "hsl(207, 26%, 17%)", // Very Dark Blue
          elements: "hsl(209, 23%, 22%)", // Dark Blue
          text: "hsl(0, 0%, 100%)", // White
        },
      },

      fontWeight: {
        light: 300,
        semibold: 600,
        extrabold: 800,
      },
      
      boxShadow: {
        'light-navbar': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'dark-navbar': '0 4px 6px -1px rgba(0, 0, 0, 0.9), 0 2px 4px -1px rgba(0, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
};

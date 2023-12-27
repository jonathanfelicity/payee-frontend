/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'phone': '720px',

      'tablet': '950px',

      'laptop': '1280px',
    },
    extend: {
        colors: {
          "bg": "hsl(0, 0%, 90%)",
          "primary": "hsl(0, 0%, 5%)",
          "secondary": "hsl(0, 0%, 10%)",
          "text-color": "hsl(0, 0%, 7%)",
          "light-text-color": "hsl(0, 0%, 90%)",
      },
    },
  },
  plugins: [],
};

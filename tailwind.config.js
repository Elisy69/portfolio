/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "night-theme-bg": "#050100",
        "night-theme-text": "#F5F9FE",
        "night-theme-primary": "#3A54C0",
        "night-theme-secondary": "#140830",
        "night-theme-accent": "#1D87B4",
      },
      fontFamily: {
        "my-for-title": ["myFont"],
        "my-for-titleRus": ["myFontRus"],
        "my-for-titleRusTwo": ["myFontRus_two"],
      },
    },
  },
  plugins: [],
};

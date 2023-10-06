/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "night-theme-bg": "#050100",
        "night-theme-text": "#F5F9FE",
        "night-theme-primary": "#3A54C0",
        "night-theme-secondary": "#140830",
        "night-theme-accent": "#1D87B4",
        "day-theme-bg": "#F7F9FF",
        "day-theme-text": "#050505",
        "day-theme-primary": "#3A54C0",
        "day-theme-secondary": "#DED3F8",
        "day-theme-accent": "#156384",
      },
      fontFamily: {
        "my-for-title": ["myFont"],
        "my-for-titleRus": ["myFontRus"],
        "my-for-titleRusTwo": ["myFontRus_two"],
        "my-universal": ["myFontUniverasal"],
      },
    },
  },
  plugins: [],
};

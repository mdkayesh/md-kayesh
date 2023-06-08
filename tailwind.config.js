/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        bgColor: "var(--background-color)",
        textColor: "var(--text-color)",
        tertiary: "var(--tertiary-color)",
        headGradient: "var(--head-gradient)",
        heroBg: "var(--hero-bg)",
      },

      container: {
        center: true,
      },

      screens: {
        lg: "991px",
      },

      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        inner: "inset -2px -2px 5px 0px var(--primary-color)",
        innerHover: "inset 0px 2px 10px 0px var(--primary-color)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1000px",
          "2xl": "1000px",
        },
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

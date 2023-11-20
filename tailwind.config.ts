import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "991px",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xl: "1100px",
        },
      },

      colors: {
        primary: "var(--primary-color)",
        bg_secondary: "var(--bg-secondary)",
        bg_primary: "var(--bg-primary)",
        bg_tertiary: "var(--bg-tertiary)",
        bg_light: "var(--bg-light)",
        text_color: "var(--text-color)",
        gradient_color: "var(--gradient-color)",
        subtitle_color: "var(--subtitle-color)",
        heading_color: "var(--heading-color)",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ca0bf",
        secondary: "#fd55b6",
      },
    },
  },
  plugins: [require("tailwind-dracula")()],
  darkMode: "class",
};
export default config;

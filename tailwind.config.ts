import type { Config } from "tailwindcss";
import { theme } from "./theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

    theme: {
      extend: {
        colors: theme.colors,
      },
    },

  plugins: [],
};
export default config;

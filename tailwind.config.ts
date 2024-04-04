import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      noise: 'url("/img/noise.svg")',
      "noise-gradient-to-br":
        'url("/images/noise.svg"), linear-gradient(to bottom right, var(--tw-gradient-stops))',
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;

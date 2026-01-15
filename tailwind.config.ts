import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)", "system-ui", "sans-serif"],
      },
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
};

export default config;

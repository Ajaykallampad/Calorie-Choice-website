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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#3B0078",
        },
        green: {
          wellness: "#8CCB18",
          leaf: "#42C45A",
          forest: "#0E6B2E",
        },
        mint: {
          soft: "#DDF7E4",
        },
        gray: {
          bg: "#F7F8FA",
          border: "#E5E7EB",
        },
        card: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3B0078 0%, #8CCB18 100%)',
        'gradient-wellness': 'linear-gradient(135deg, #DDF7E4 0%, #FFFFFF 100%)',
        'gradient-cta': 'linear-gradient(90deg, #42C45A 0%, #8CCB18 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(140, 203, 24, 0.5)',
      }
    },
  },
  plugins: [],
};
export default config;

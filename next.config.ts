

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages*.{js,ts,jsx,tsx,mdx}",
    "./components*.{js,ts,jsx,tsx,mdx}",
    "./app*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#059669",
        accent: "#10b981",
        gold: "#f59e0b",
        light: "#f0fdf4",
        cream: "#fef3c7",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-left": {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out",
        "slide-up": "slide-up 0.8s ease-out both",
        "slide-left": "slide-left 0.8s ease-out both",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
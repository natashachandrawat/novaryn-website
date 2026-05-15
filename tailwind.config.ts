import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* light theme primary */
        paper: {
          DEFAULT: "#efece5",
          50: "#f6f3ed",
          100: "#efece5",
          150: "#e9e5dc",
          200: "#e0dcd2",
          300: "#cfcbc1",
        },
        /* text on light */
        graphite: {
          900: "#0d0d0e",
          800: "#1c1c1d",
          700: "#2c2c2d",
          600: "#444446",
          500: "#67655f",
          400: "#8e8c85",
          300: "#b3b1a9",
          200: "#cfcdc5",
          100: "#e0ddd4",
        },
        /* dark surfaces — used for accent cards on light bg */
        ink: {
          950: "#06070a",
          900: "#0a0b0f",
          850: "#0d0e13",
          800: "#111218",
          750: "#15171f",
          700: "#1a1c25",
          600: "#23262f",
          500: "#2c2f3a",
          400: "#3a3e4a",
        },
        line: {
          DEFAULT: "rgba(13,13,14,0.08)",
          strong: "rgba(13,13,14,0.14)",
        },
        accent: {
          blue: "#3a64ff",
          indigo: "#5a3fff",
          purple: "#8a4fff",
          cyan: "#0ea7ff",
          rust: "#d8511f",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        heading: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-barlow)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(4rem, 12vw, 12rem)", { lineHeight: "0.88", letterSpacing: "-0.04em", fontWeight: "500" }],
        "display-xl": ["clamp(3rem, 8.5vw, 9rem)", { lineHeight: "0.92", letterSpacing: "-0.04em", fontWeight: "500" }],
        "display-lg": ["clamp(2.4rem, 6vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.038em", fontWeight: "500" }],
        "display-md": ["clamp(1.8rem, 3.6vw, 3.4rem)", { lineHeight: "1.02", letterSpacing: "-0.028em", fontWeight: "500" }],
        "display-sm": ["clamp(1.4rem, 2.4vw, 2.2rem)", { lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "500" }],
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(13,13,14,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,13,14,0.05) 1px, transparent 1px)",
        "grid-light-fine":
          "linear-gradient(to right, rgba(13,13,14,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,13,14,0.035) 1px, transparent 1px)",
      },
      keyframes: {
        "float-slow": { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-8px)" } },
        "float-slower": { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-12px)" } },
        "marquee": { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        "pulse-glow": { "0%, 100%": { opacity: "0.55" }, "50%": { opacity: "1" } },
      },
      animation: {
        "float-slow": "float-slow 7s ease-in-out infinite",
        "float-slower": "float-slower 9s ease-in-out infinite",
        "marquee": "marquee 50s linear infinite",
        "pulse-glow": "pulse-glow 3.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

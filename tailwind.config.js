/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05070d",
        surface: "#090d16",
        surfaceLight: "#0e1524",
        borderDark: "rgba(0, 240, 255, 0.12)",
        cyan: {
          DEFAULT: "#00f0ff",
          glow: "#00f0ff",
          dim: "#00a3b4",
          dark: "#004753",
        },
        electric: {
          blue: "#1d63ff",
          cyan: "#00f2fe",
          purple: "#7928ca"
        }
      },
      fontFamily: {
        heading: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-1.5deg)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(0, 240, 255, 0.3))' },
          '100%': { filter: 'drop-shadow(0 0 35px rgba(0, 240, 255, 0.7))' },
        }
      },
      boxShadow: {
        'cyan-glow': '0 0 30px -5px rgba(0, 240, 255, 0.4)',
        'cyan-subtle': '0 0 20px -3px rgba(0, 240, 255, 0.15)',
        'glass-card': '0 20px 50px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}


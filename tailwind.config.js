module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
          DEFAULT: "#1E63D5",
        },
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
        },
        accent: {
          DEFAULT: "var(--accent-color)",
          foreground: "var(--accent-foreground)",
          light: "var(--accent-light)",
          dark: "var(--accent-dark)",
        },
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          light: "var(--border-light)",
          dark: "var(--border-dark)",
        },
        brand: {
          blue: '#1E63D5',
          navy: '#081A3A',
          cyan: '#25D9FF',
          sky: '#4FAEFF',
          ice: '#AEEBFF',
          steel: '#2B88C8',
        },
        bg: {
          main: '#FFFFFF',
          section: '#F2F8FF',
          card: '#FAFCFF',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#6B7280',
          light: '#F9FAFB',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
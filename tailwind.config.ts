// @ts-check

const defaultTheme = require("tailwindcss/defaultTheme");

const SynapsisConfig = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        xl: "40px",
        "2xl": "128px",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
      body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          "50": "rgb(225, 245, 254)",
          "100": "rgb(179, 229, 252)",
          "200": "rgb(129, 212, 250)",
          "300": "rgb(79, 195, 247)",
          "400": "rgb(41, 182, 246)",
          "500": "rgb(3, 169, 244)",
          "6000": "rgb(3, 155, 229)",
          "700": "rgb(2, 136, 209)",
          "800": "rgb(2, 119, 189)",
          "900": "rgb(1, 87, 155)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          "50": "rgb(249, 251, 231)",
          "100": "rgb(240, 244, 195)",
          "200": "rgb(230, 238, 156)",
          "300": "rgb(230, 238, 156)",
          "400": "rgb(212, 225, 87)",
          "500": "rgb(205, 220, 57)",
          "6000": "rgb(192, 202, 51)",
          "700": "rgb(175, 180, 43)",
          "800": "rgb(158, 157, 36)",
          "900": "rgb(130, 119, 23)",
        },
        neutral: {
          "50": "rgb(249, 250, 251)",
          "100": "rgb(243, 244, 246)",
          "200": "rgb(229, 231, 235)",
          "300": "rgb(209, 213, 219)",
          "400": "rgb(156, 163, 175)",
          "500": "rgb(107, 114, 128)",
          "6000": "rgb(75, 85, 99)",
          "700": "rgb(55, 65, 81)",
          "800": "rgb(31, 41, 55)",
          "900": "rgb(17, 24, 39)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default SynapsisConfig;

import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: { xs: "475px", ...defaultTheme.screens },
    extend: {
      fontFamily: {
        // Fonts del sistema: cap descàrrega, cap salt de text.
        sans: [
          "ui-rounded",
          "'SF Pro Rounded'",
          "'Nunito'",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    // El primer tema és el per defecte; el fosc s'aplica amb prefers-color-scheme.
    themes: [
      {
        slt: {
          primary: "#6246c8",
          "primary-content": "#ffffff",
          secondary: "#f0b0aa",
          "secondary-content": "#28224a",
          accent: "#f6df9b",
          "accent-content": "#28224a",
          neutral: "#28224a",
          "neutral-content": "#eee9fb",
          "base-100": "#ffffff",
          "base-200": "#f3effd",
          "base-300": "#e4ddf7",
          "base-content": "#28224a",
          "--rounded-box": "1.25rem",
          "--rounded-btn": "9999px",
        },
      },
      {
        sltdark: {
          primary: "#b4a3f5",
          "primary-content": "#1d1840",
          secondary: "#f0b0aa",
          "secondary-content": "#28224a",
          accent: "#f6df9b",
          "accent-content": "#28224a",
          neutral: "#120f2b",
          "neutral-content": "#eee9fb",
          "base-100": "#1d1840",
          "base-200": "#26204f",
          "base-300": "#322b63",
          "base-content": "#eee9fb",
          "--rounded-box": "1.25rem",
          "--rounded-btn": "9999px",
        },
      },
    ],
    darkTheme: "sltdark",
  },
};

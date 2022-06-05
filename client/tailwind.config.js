module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /./,
    },
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          // teal-green
          primary: "#a7f3d0",
          "primary-focus": "#6ee7b7", // darker teal-green
          "primary-content": "#27543f", // dark green for font
          // light purple
          secondary: "#a5b4fc",
          "secondary-focus": "#6ee7b7", // green
          "secondary-content": "#333333", // dark grey for font
          // light orange
          accent: "#ffbd9b",
          "accent-focus": "#f4bebe", // light salmon pink
          "accent-content": "#BFBFBF", // medium grey for font
          // light pastel blue-green
          neutral: "#ccfbf1",
          "neutral-focus": "#818cf8", // darker purple for btn hover
          "neutral-content": "#333333", // dark grey for font
          // shades of light greys
          "base-100": "#ffffff", // white
          "base-200": "#f3f4f6", // lightest grey
          "base-300": "#e5e7eb", // medium grey
          "base-content": "#1c1c1c", // dark dark grey for font

          info: "#1c92f2",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",

          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": "0.5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /./,
    },
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
          // medium-blue
          primary: "#80CED1",
          "primary-focus": "#6ee7b7", // darker teal-green
          "primary-content": "#134e4a", // dark green for font
          // light-orange
          secondary: "#fdba74",
          "secondary-focus": "#fb923c", // medium-orange
          "secondary-content": "#333333", // dark grey for font
          // red-pink
          accent: "#fa4c65", 
          "accent-focus": "#fb7185", // lighter red-pink
          "accent-content": "#dadbdc", // medium grey for font
          // medium purple-blue
          neutral: "#818cf8",
          "neutral-focus": "#7280ff", // darker purple for btn hover
          "neutral-content": "#333333", // dark grey for font
          // shades of light greys
          "base-100": "#ffffff", // white
          "base-200": "#f3f4f6", // lightest grey
          "base-300": "#d1d5db", // light-md grey
          "base-content": "#ffffff", // white font

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

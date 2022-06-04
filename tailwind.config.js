module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /./,
    },
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          // teal-green
           'primary' : '#6ee7b7',
           'primary-focus' : '#48604f',
           'primary-content' : '#ffffff',
          // light purple
           'secondary' : '#c7d2fe',
           'secondary-focus' : '#cde2c1',
           'secondary-content' : '#24321a',
          // red-pink
           'accent' : '#fb7185',
           'accent-focus' : '#f4bebe',
           'accent-content' : '#322020',
          // light pastel blue-green
           'neutral' : '#ccfbf1',
           'neutral-focus' : '#272525',
           'neutral-content' : '#e9e7e7',
          // shades of light greys
           'base-100' : '#ffffff',
           'base-200' : '#f3f4f6',
           'base-300' : '#e5e7eb',
           'base-content' : '#d1d5db',

           'info' : '#1c92f2',
           'success' : '#009485',
           'warning' : '#ff9900',
           'error' : '#ff5724',

          '--rounded-box': '1rem',          
          '--rounded-btn': '0.5rem',        
          '--rounded-badge': '1.9rem',      

          '--animation-btn': '0.25s',       
          '--animation-input': '0.2s',       

          '--btn-text-case': 'uppercase',   
          '--navbar-padding': '0.5rem',      
          '--border-btn': '1px',            
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

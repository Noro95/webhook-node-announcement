module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./utils/components/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    screens: {
      xsm: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        "c-red": "#d04346",
        "c-red-hover": "#9a3234",
        "c-green": "#317747",
        "c-green-hover": "#245834",
        "c-burple": "#5865f2",
        "c-burple-hover": "#4c56bd",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};

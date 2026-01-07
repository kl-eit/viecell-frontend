module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
      'gradient-stone':
        'linear-gradient(270deg, #F3F5EC 0%, #FFFFFF 49.77%, #F3F5EC 100%)',
    },
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        robotoCondensed: ["var(--font-roboto-condensed)", "sans-serif"],
      },
      colors: {
      "bg-light": "#F7F9EF",
      stone: {
          500: "#647252",
        },
        lime: {
        100: "#E6F0CC",
        500: "#979832",
        900: "#38531C",
      },
      },
       spacing: {
      7.5: "30px",
    },
    fontSize: {
      "42xl": "2.625rem",
    },
      fontWeight: {
        thin: "100",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
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
plugins: [
  function ({ addUtilities }) {
    addUtilities({
      '.bg-gradient': {
        background: 'linear-gradient(270deg, #F3F5EC 0%, #FFFFFF 49.77%, #F3F5EC 100%)',
      },
    });
  },
  require("@tailwindcss/typography"),
],
};

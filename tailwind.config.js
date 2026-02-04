module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "animate-marquee",
    "animate-marquee-reverse",
    "animate-marquee-vertical",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-stone":
          "linear-gradient(270deg, #F3F5EC 0%, #FFFFFF 49.77%, #F3F5EC 100%)",
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

      /* 🔁 ANIMATIONS */
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-100%)" },
        },

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
        marquee: "marquee var(--duration, 20s) linear infinite",
        "marquee-reverse":
          "marquee var(--duration, 20s) linear infinite reverse",
        "marquee-vertical":
          "marquee-vertical var(--duration, 20s) linear infinite",

        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".bg-gradient": {
          background:
            "linear-gradient(270deg, #F3F5EC 0%, #FFFFFF 49.77%, #F3F5EC 100%)",
        },
      })
    },
    require("@tailwindcss/typography"),
  ],
}

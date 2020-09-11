module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    boxShadow: {
      error: "0 0 0 3px rgba(255, 40, 40, 0.5)",
      offset: "0 10px 10px -5px #013f5d",
    },

    extend: {
      colors: {
        color1: "#f78e1c",
        color2: "#eccf13",
        color3: "#013f5d",
        color4: "#1abebd",
        color5: "#707070",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
};

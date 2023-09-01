/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-white": "#fff",
        black: "#000",
        silver: "#b6b6b6",
      },
      fontFamily: {
        mulish: "Mulish",
        "hero-text": "Agrandir",
      },
      borderRadius: {
        "6xs": "7px",
      },
    },
    fontSize: {
      xs: "12px",
      "174xl": "193px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

module.exports = {
  content: ["./src/**/*.tsx"],
  plugins: [require("@tailwindcss/typography")],
  theme: { extend: { screens: { print: { raw: "print" } } } },
};

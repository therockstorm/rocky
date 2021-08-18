module.exports = {
  mode: "jit",
  purge: ["./src/**/*.tsx"],
  plugins: [require("@tailwindcss/typography")],
  theme: { extend: { screens: { print: { raw: "print" } } } },
};

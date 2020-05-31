const black80 = `#1B1F23`
const lightWhite = `rgba(255, 255, 255, 0.86)`
const opaqueLightYellow = `rgba(255, 229, 100, 0.2)`
const whiteSmoke = `#f5f5f5`
const gray9 = `#171717`
const dark = `#282c35`
const royalBlueDark = `#2f4ca3` // http://www.html-color-names.com/royalblue.php
const royalBlueLight = `#97adee`

export default {
  text: gray9,
  background: whiteSmoke,
  primary: royalBlueDark,
  secondary: black80,
  muted: `hsla(0, 0%, 0%, 0.5)`,
  highlight: opaqueLightYellow,
  heading: gray9,
  prism: {
    background: `#011627`,
    comment: `#809393`,
    string: `#addb67`,
    var: `#d6deeb`,
    number: `#f78c6c`,
    constant: `#82aaff`,
    punctuation: `#c792ea`,
    className: `#ffc98b`,
    tag: `#ffa7c4`,
    boolean: `#ff5874`,
    property: `#80cbc4`,
    namespace: `#b2ccd6`,
    highlight: `hsla(207, 95%, 15%, 1)`,
  },
  modes: {
    dark: {
      text: whiteSmoke,
      background: dark,
      primary: royalBlueLight,
      secondary: lightWhite,
      muted: `hsla(0, 0%, 100%, 0.5)`,
      highlight: `hsl(222, 14%, 25%)`,
      heading: whiteSmoke,
    },
  },
}

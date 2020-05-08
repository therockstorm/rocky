const { writeFileSync } = require("fs")
const PDFParser = require("pdf2json")

const parser = new PDFParser(this, 1)

parser.on("pdfParser_dataError", (errData) =>
  console.error(errData.parserError)
)
parser.on("pdfParser_dataReady", () => {
  writeFileSync("./scripts/profile.txt", parser.getRawTextContent())
})

parser.loadPDF("./scripts/profile.pdf")

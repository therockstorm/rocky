/** @jsx jsx */
import ThemeUIPrism from "@theme-ui/prism"
import headings from "../components/posts/Headings"
import { preToCodeBlock } from "mdx-utils"
import PrismCore from "prismjs/components/prism-core"
import { jsx, Styled } from "theme-ui"

// Additional languages, https://theme-ui.com/packages/prism/#additional-languages
import "prismjs/components/prism-bash"
import "prismjs/components/prism-clike"
import "prismjs/components/prism-java"
import "prismjs/components/prism-kotlin"
import "prismjs/components/prism-scala"
import "prismjs/components/prism-clojure"
import "prismjs/components/prism-csharp"

export default {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps)
    if (props) {
      const { codeString, ...rest } = props
      return (
        <Styled.div sx={{ mb: 2 }}>
          <ThemeUIPrism {...rest} Prism={PrismCore}>
            {codeString}
          </ThemeUIPrism>
        </Styled.div>
      )
    } else return <pre {...preProps} />
  },
  ...headings,
}

/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

export default ({ title, children }) => (
  <section>
    <Styled.h2 sx={{ mb: 2, pt: 2, mt: 2 }}>{title}</Styled.h2>
    <Styled.hr sx={{ mb: 3 }} />
    {children}
  </section>
)

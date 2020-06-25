/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { ReactElement, ReactNode } from "react"

const Section = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}): ReactElement => (
  <section>
    <Styled.h2 sx={{ mb: 2, pt: 2, mt: 2 }}>{title}</Styled.h2>
    <Styled.hr sx={{ mb: 3 }} />
    {children}
  </section>
)

export default Section

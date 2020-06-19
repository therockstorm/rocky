/** @jsx jsx */
import { Link } from "gatsby"
import { ReactElement } from "react"
import { Styled, jsx } from "theme-ui"

const PostLink = ({ title, slug, date, excerpt }: any): ReactElement => (
  <article>
    <header>
      <Styled.h2 sx={{ mb: 1 }}>
        <Styled.a as={Link} sx={{ textDecoration: `none` }} to={slug}>
          {title || slug}
        </Styled.a>
      </Styled.h2>
      <small>{date}</small>
    </header>
    <section>
      <Styled.p>{excerpt}</Styled.p>
    </section>
  </article>
)

export default PostLink

/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { Link } from "gatsby"

export default ({ title, slug, date, excerpt }) => (
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

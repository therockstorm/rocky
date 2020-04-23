/** @jsx jsx */
import { Link } from "gatsby"
import { Highlight, Snippet } from "react-instantsearch-dom"
import { jsx, Styled } from "theme-ui"

export const PostHit = (clickHandler) => ({ hit }) => (
  <div>
    <Styled.h4 sx={{ mb: 1 }}>
      <Styled.a as={Link} to={hit.slug} onClick={clickHandler}>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </Styled.a>
    </Styled.h4>
    <small>
      <Highlight attribute="date" hit={hit} tagName="mark" />
    </small>
    <Styled.p>
      <Snippet attribute="excerpt" hit={hit} tagName="mark" />
    </Styled.p>
    <Styled.hr />
  </div>
)

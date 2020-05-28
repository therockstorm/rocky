/** @jsx jsx */
import { Link } from "gatsby"
import { Fragment } from "react"
import { Flex, jsx, Styled } from "theme-ui"

export default () => (
  <Fragment>
    <Styled.p sx={{ mb: 1 }}>Rocky Warren&#39;s blog.</Styled.p>
    <Styled.p sx={{ mb: 1 }}>
      Principal Engineer and Architect at Vertex. I do other stuff too.
    </Styled.p>
    <Flex sx={{ flexWrap: `wrap` }}>
      <Styled.p sx={{ mb: 1 }}>
        <Styled.a as={Link} sx={{ mr: 2 }} to="/photos">
          Photos
        </Styled.a>
        <Styled.a as={Link} sx={{ mr: 2 }} to="/resume">
          Resume
        </Styled.a>
        <Styled.a as={Link} sx={{ mr: 2 }} to="/using">
          Using
        </Styled.a>
        <Styled.a as={Link} sx={{ mr: 2 }} to="/notes">
          Notes
        </Styled.a>
      </Styled.p>
    </Flex>
  </Fragment>
)

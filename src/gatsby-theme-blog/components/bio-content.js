import React, { Fragment } from "react"
import { Styled } from "theme-ui"

export default () => (
  <Fragment>
    <Styled.a href="https://twitter.com/therockstorm">Rocky Warren</Styled.a>
    &#39;s blog.
    <br />
    Data Engineering at Vertex Software.
    <br />I do{" "}
    <Styled.a href="https://www.instagram.com/therockstorm/">
      other stuff
    </Styled.a>{" "}
    too.
  </Fragment>
)

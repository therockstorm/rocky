/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import Position from "./Position"
import positions from "./positions"
import Section from "./Section"

export default () => (
  <Section title="Experience">
    {positions.map((p, idx) => (
      <Styled.div key={idx}>
        <Position {...p} />
      </Styled.div>
    ))}
  </Section>
)

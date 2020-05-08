/** @jsx jsx */
import React from "react"
import { Flex, jsx, Styled } from "theme-ui"
import ExternalLink from "../ExternalLink"
import certs from "./certs"
import Section from "./Section"

export default () => (
  <Section title="Certifications">
    {certs.map((c, idx) => (
      <Styled.div key={idx}>
        <Certification {...c} />
      </Styled.div>
    ))}
  </Section>
)

const Certification = ({ title, href, start, end }) => (
  <Styled.p sx={{ mb: 2 }}>
    <Flex sx={{ justifyContent: `space-between` }}>
      <ExternalLink href={href}>{title}</ExternalLink>
      <span sx={{ color: "muted" }}>
        {start} - {end}
      </span>
    </Flex>
  </Styled.p>
)

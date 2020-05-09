/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import Badge from "../Badge"
import NoBullet from "../NoBullet"
import Section from "./Section"

export default () => (
  <Section title="Skills">
    <Styled.ul sx={{ ml: 0 }}>
      {/* Languages */}
      <Skill>Scala</Skill>
      <Skill>JavaScript</Skill>
      <Skill>TypeScript</Skill>
      <Skill>C#</Skill>
      <Skill>Bash</Skill>
      <Skill>Python</Skill>
      <Skill>Java</Skill>
      <Skill>Ruby</Skill>
      {/* Data */}
      <Skill>PostgreSQL</Skill>
      <Skill>DynamoDB</Skill>
      <Skill>RDS</Skill>
      <Skill>Lambda</Skill>
      <Skill>SQS</Skill>
      <Skill>Athena</Skill>
      <Skill>Kafka</Skill>
      <Skill>Redis</Skill>
      <Skill>gRPC</Skill>
      {/* Miscellaneous */}
      <Skill>REST APIs</Skill>
      <Skill>React</Skill>
      <Skill>GraphQL</Skill>
      <Skill>Docker</Skill>
      <Skill>Software Architecture</Skill>
      <Skill>Test-Driven Development</Skill>
      <Skill>Continuous Delivery</Skill>
    </Styled.ul>
  </Section>
)

const Skill = ({ children }) => (
  <NoBullet sx={{ display: `inline`, mr: 2 }}>
    <Badge>{children}</Badge>
  </NoBullet>
)

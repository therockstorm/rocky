/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Badge from "../Badge"
import NoBullet from "../NoBullet"
import Section from "../Section"

const Skills = () => (
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
      <Skill>Software Architecture</Skill>
      <Skill>React</Skill>
      <Skill>GraphQL</Skill>
      <Skill>Test-Driven Development</Skill>
      <Skill>Docker</Skill>
    </Styled.ul>
  </Section>
)

const Skill = ({ children }) => (
  <NoBullet sx={{ display: `inline`, mr: 1 }}>
    <Badge>{children}</Badge>
  </NoBullet>
)

export default Skills

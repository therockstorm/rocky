import React from "react";

import { Badge } from "../badge";
import { Section } from "../section";

export const Skills = (): JSX.Element => (
  <Section title="Skills">
    <ul className="list-none">
      {/* Languages */}
      <Skill>Scala</Skill>
      <Skill>JavaScript</Skill>
      <Skill>TypeScript</Skill>
      <Skill>C#</Skill>
      <Skill>Shell/Bash</Skill>
      <Skill>Rust</Skill>
      <Skill>Python</Skill>
      <Skill>Java</Skill>
      {/* Data */}
      <Skill>PostgreSQL</Skill>
      <Skill>DynamoDB</Skill>
      <Skill>AWS Lambda</Skill>
      <Skill>SQS</Skill>
      <Skill>Athena</Skill>
      <Skill>Akka</Skill>
      <Skill>Kafka</Skill>
      <Skill>Redis</Skill>
      <Skill>gRPC</Skill>
      {/* Miscellaneous */}
      <Skill>REST API Design</Skill>
      <Skill>Distributed Systems</Skill>
      <Skill>Continuous Delivery</Skill>
      <Skill>Software Architecture</Skill>
      <Skill>React</Skill>
      <Skill>GraphQL</Skill>
      <Skill>Test-Driven Development</Skill>
      <Skill>Docker</Skill>
    </ul>
  </Section>
);

const Skill = ({ children }: { children: React.ReactNode }) => (
  <li className="inline mr-1">
    <Badge>{children}</Badge>
  </li>
);

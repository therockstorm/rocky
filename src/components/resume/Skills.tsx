import React from "react";

import { Badge } from "../Badge";
import { Section } from "./Section";

export const Skills = (): JSX.Element => (
  <Section className="print:hidden" title="Skills">
    <ul>
      {/* Languages */}
      <Skill>JavaScript</Skill>
      <Skill>TypeScript</Skill>
      <Skill>Elixir</Skill>
      <Skill>Solidity</Skill>
      <Skill>Scala</Skill>
      <Skill>C#</Skill>
      <Skill>Python</Skill>
      <Skill>Shell/Bash</Skill>
      <Skill>Java</Skill>
      <Skill>Rust</Skill>
      {/* Data */}
      <Skill>PostgreSQL</Skill>
      <Skill>SQS</Skill>
      <Skill>DynamoDB</Skill>
      <Skill>Kafka</Skill>
      <Skill>AWS Lambda</Skill>
      <Skill>Athena</Skill>
      <Skill>Akka</Skill>
      <Skill>Redis</Skill>
      <Skill>gRPC</Skill>
      {/* Miscellaneous */}
      <Skill>React</Skill>
      <Skill>Cloud SIEM</Skill>
      <Skill>Phoenix</Skill>
      <Skill>Docker</Skill>
      <Skill>REST API Design</Skill>
      <Skill>Distributed Systems</Skill>
      <Skill>Threat Modelling</Skill>
    </ul>
  </Section>
);

const Skill = ({ children }: { children: React.ReactNode }) => (
  <li className="mr-1 inline">
    <Badge>{children}</Badge>
  </li>
);

import React from "react";

import { Badge } from "../Badge";
import { Section } from "./Section";

export const Skills = (): JSX.Element => (
  <Section className="print:hidden" title="Skills">
    <ul>
      {/* Languages */}
      <Skill>JavaScript</Skill>
      <Skill>TypeScript</Skill>
      <Skill>Scala</Skill>
      <Skill>C#</Skill>
      <Skill>Python</Skill>
      <Skill>Shell/Bash</Skill>
      <Skill>Java</Skill>
      <Skill>Elixir</Skill>
      <Skill>Solidity</Skill>
      <Skill>Rust</Skill>
      {/* Data */}
      <Skill>SQS</Skill>
      <Skill>PostgreSQL</Skill>
      <Skill>DynamoDB</Skill>
      <Skill>Akka</Skill>
      <Skill>AWS Lambda</Skill>
      <Skill>Kafka</Skill>
      <Skill>Redis</Skill>
      <Skill>gRPC</Skill>
      {/* Miscellaneous */}
      <Skill>React</Skill>
      <Skill>Cyber Security</Skill>
      <Skill>Docker</Skill>
      <Skill>Cloud SIEM</Skill>
      <Skill>DevSecOps</Skill>
      <Skill>REST API Design</Skill>
      <Skill>Distributed Systems</Skill>
      <Skill>Cloud Security</Skill>
      <Skill>Threat Modelling</Skill>
    </ul>
  </Section>
);

const Skill = ({ children }: { children: React.ReactNode }) => (
  <li className="mr-1 inline">
    <Badge>{children}</Badge>
  </li>
);

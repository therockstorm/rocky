import React from "react";

import { Badge } from "@/components/Badge";

import { Section } from "./Section";

export function Skills(): React.JSX.Element {
  return (
    <Section className="print:hidden" title="Skills">
      <ul className="my-0">
        <Skill>JavaScript</Skill>
        <Skill>TypeScript</Skill>
        <Skill>Python</Skill>
        <Skill>Scala</Skill>
        <Skill>React</Skill>
        <Skill>NextJS</Skill>
        <Skill>Java</Skill>
        <Skill>C#</Skill>
        <Skill>Bash</Skill>
        <Skill>Shell</Skill>
        <Skill>Go</Skill>
        <Skill>Elixir</Skill>
        <Skill>Rust</Skill>
        <Skill>C++</Skill>
        <Skill>HTML</Skill>
        <Skill>CSS</Skill>
        <Skill>Kafka</Skill>
        <Skill>PostgreSQL</Skill>
        <Skill>AWS ECS</Skill>
        <Skill>AWS RDS</Skill>
        <Skill>DevOps</Skill>
        <Skill>DynamoDB</Skill>
        <Skill>Svelte</Skill>
        <Skill>Cybersecurity</Skill>
        <Skill>Docker</Skill>
        <Skill>Cloud Security</Skill>
        <Skill>Cloud SIEM</Skill>
        <Skill>Continuous Integration</Skill>
        <Skill>Redis</Skill>
        <Skill>DevSecOps</Skill>
        <Skill>Continuous Delivery</Skill>
        <Skill>REST APIs</Skill>
        <Skill>Threat Models</Skill>
        <Skill>Distributed Systems</Skill>
      </ul>
    </Section>
  );
}

type Props = Readonly<{ children: React.ReactNode }>;

const Skill = ({ children }: Props) => (
  <li className="mr-2 inline">
    <Badge>{children}</Badge>
  </li>
);

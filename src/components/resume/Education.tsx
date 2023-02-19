import dayjs from "dayjs";
import React from "react";

import iowa from "@/images/logos/iowa.png";

import { Role, RoleProps } from "./Role";
import { Section } from "./Section";

const EDUCATION: readonly RoleProps[] = [
  {
    company: "University of Iowa",
    logo: iowa,
    roles: [
      {
        desc: ["Minors in Computer Science and Business"],
        end: dayjs("2007-12"),
        location: "Iowa City, IA",
        start: dayjs("2003-08"),
        title: "Bachelor of Science, Computer Software Engineering",
      },
    ],
  },
];

export function Education(): JSX.Element {
  return (
    <Section className="print:hidden" title="Education">
      {EDUCATION.map((e) => (
        <Role key={e.company} {...e} />
      ))}
    </Section>
  );
}

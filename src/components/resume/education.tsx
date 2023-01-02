import React from "react";

import { Position } from "./Position";
import { Section } from "./Section";

export const Education = (): JSX.Element => (
  <Section className="print:hidden" title="Education">
    <Position
      company={"University of Iowa"}
      positions={[
        {
          title: "Bachelor of Science, Computer Software Engineering",
          start: "Aug 2003",
          end: "Dec 2007",
          location: "Iowa City, IA",
          desc: ["Minors in Computer Science and Business"],
        },
      ]}
    />
  </Section>
);

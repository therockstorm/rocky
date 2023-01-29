import React from "react";

import { Section } from "./Section";

const RECOMMENDATIONS = [
  `CEO describing a Fortune 100 company's reaction to a demo I created: "Slam dunk with [Company]! Thank you for all your efforts on this! [Company VP] was visibly and vocally excited. I think his voice cracked a little when he exclaimed, 'how did you do that!'."`,
  `VP of Product: "If no one is telling you, it's appreciated how intentional you are with growing our collective knowledge and being a champion for training. Thanks for doing this stuff, Rocky. I've also been hearing great things about your contributions and speed-of-delivery. The leadership team is impressed."`,
  `VP of Engineering: "Rocky is one of our most respected and valuable engineers. His contributions are critical to the success of the company."`,
  `Technical Lead and Manager: "He's a one-man wrecking crew, one of the most productive engineers I've worked with."`,
];

export function Recommendations(): JSX.Element {
  return (
    <Section className="print:hidden" title="Recommendations">
      <ul className="my-0">
        {Object.entries(RECOMMENDATIONS).map(([id, r]) => (
          <li key={id}>{r}</li>
        ))}
      </ul>
    </Section>
  );
}

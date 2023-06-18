import React from "react";

import { Section } from "./Section";

const RECOMMENDATIONS = [
  `CEO describing a Fortune 100 company's reaction to a demo I created: "Slam dunk with [Company]! Thank you for all your efforts on this! [Company VP] was visibly and vocally excited. I think his voice cracked a little when he exclaimed, 'how did you do that!'."`,
  `CTO: "Rocky embodies a Principal Software Engineer. He can identify the most important problems, work out different solutions, and choose the most appropriate way of moving forward. He'll then own that solution and see it through to the end. He's also never content with his current skill set and always wants to continue growing. Whether it's books, classes, or certifications, he's willing to put in the work to better himself and the team."`,
  `VP of Product: "If no one is telling you, it's appreciated how intentional you are with growing our collective knowledge and being a champion for training. Thanks for doing this stuff, Rocky. I've also been hearing great things about your contributions and speed-of-delivery. The leadership team is impressed."`,
  `Technical Lead and Manager: "He's a one-man wrecking crew, one of the most productive engineers I've worked with."`,
];

export function Recommendations(): React.JSX.Element {
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

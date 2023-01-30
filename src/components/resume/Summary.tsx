import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/pro-light-svg-icons";
import React from "react";

import { SocialLink } from "@/components/SocialLink";

export function Summary(): JSX.Element {
  return (
    <div>
      <p>
        A Certified Information Systems Security Professional (CISSP) and AWS
        Certified Solutions Architect and Security Specialty with over ten years
        of experience shipping and maintaining tested, distributed, secure
        systems from thousand-line microservices moving billions of dollars each
        year to multi-million line GPS guidance systems. I deliver customer
        value utilizing object-oriented, functional, statically-typed, dynamic,
        and database languages. I lead teams as a Founding Principal Engineer,
        Tech Lead, Architect, Product Manager, and Startup Co-founder.
      </p>
      <ul className="not-prose flex gap-x-6 pl-0" role="list">
        <SocialLink
          aria-label="Follow on GitHub"
          href="https://github.com/therockstorm"
          icon={faGithub}
        >
          <div className="print:hidden">GitHub</div>
          <div className="hidden print:block">github.com/therockstorm</div>
        </SocialLink>
        <SocialLink
          aria-label="Follow on LinkedIn"
          href="https://www.linkedin.com/in/rockywarren/"
          icon={faLinkedin}
        >
          <div className="print:hidden">LinkedIn</div>
          <div className="hidden print:block">linkedin.com/in/rockywarren</div>
        </SocialLink>
        <SocialLink
          aria-label="Subscribe to RSS"
          href="https://www.rocky.dev"
          icon={faLink}
        >
          rocky.dev
        </SocialLink>
      </ul>
    </div>
  );
}
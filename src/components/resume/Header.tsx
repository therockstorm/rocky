import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { ExternalLink } from "../ExternalLink";

export const Header = (): JSX.Element => (
  <div>
    <p>
      A Certified Information Systems Security Professional (CISSP) and AWS
      Certified Solutions Architect and Security Specialty with over ten years
      of experience shipping and maintaining tested, distributed, secure systems
      from thousand-line microservices moving billions of dollars each year to
      multi-million line GPS guidance systems. I deliver customer value
      utilizing object-oriented, functional, statically-typed, dynamic, and
      database languages and lead teams as a Founding Principal Engineer, Tech
      Lead, Architect, Product Manager, and Startup Co-founder.
    </p>
    <div className="flex flex-wrap gap-x-4">
      <div className="flex items-center">
        <FontAwesomeIcon className="mr-2 h-5 w-5" icon={faLink} />
        <ExternalLink href="https://www.rocky.dev">rocky.dev</ExternalLink>
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon className="mr-2 h-5 w-5" icon={faLinkedin} />
        <ExternalLink href="https://www.linkedin.com/in/rockywarren">
          LinkedIn
        </ExternalLink>
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon className="mr-2 h-5 w-5" icon={faGithub} />
        <ExternalLink href="https://github.com/therockstorm">
          GitHub
        </ExternalLink>
      </div>
    </div>
  </div>
);

import React from "react";

import { Author } from "../../lib/constants";
import { ExternalLink } from "../external-link";
import { GitHub, Link, LinkedIn } from "../icons";

export const Header = (): JSX.Element => (
  <>
    <h1>{Author}</h1>
    <div>
      <p>
        A Certified Information Systems Security Professional (CISSP) and AWS
        Certified Solutions Architect and Security Specialty with over ten years
        of experience shipping and maintaining tested, distributed, secure
        systems from thousand-line microservices moving billions of dollars each
        year to multi-million line GPS guidance systems. I deliver customer
        value utilizing object-oriented, functional, statically-typed, dynamic,
        and database languages and lead teams as a Founding Principal Engineer,
        Tech Lead, Architect, Product Manager, and Startup Co-founder.
      </p>
      <div className="flex flex-wrap gap-x-4">
        <div className="flex items-center">
          <Link className="h-5 w-5 mr-2" />
          <ExternalLink href="https://www.rocky.dev">rocky.dev</ExternalLink>
        </div>
        <div className="flex items-center">
          <LinkedIn className="h-5 w-5 mr-2" />
          <ExternalLink href="https://www.linkedin.com/in/rockywarren">
            LinkedIn
          </ExternalLink>
        </div>
        <div className="flex items-center">
          <GitHub className="h-5 w-5 mr-2" />
          <ExternalLink href="https://github.com/therockstorm">
            GitHub
          </ExternalLink>
        </div>
      </div>
    </div>
  </>
);

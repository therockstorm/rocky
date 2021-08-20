import React from "react";

import { ExternalLink } from "../external-link";
import { Link, LinkedIn } from "../icons";

export const Header = (): JSX.Element => (
  <>
    <h1>Rocky Warren</h1>
    <div>
      <p>
        An AWS Certified Solutions Architect with over ten years of experience
        shipping and maintaining tested, distributed, secure systems from
        thousand-line microservices moving billions of dollars each year to
        multi-million line GPS guidance systems. I deliver customer value
        utilizing object-oriented, functional, statically-typed, dynamic, and
        database languages and lead teams as a Principal Technical Lead,
        Architect, Product Manager, and Startup Co-founder.
      </p>
      <div className="flex justify-between flex-wrap">
        <div className="flex items-center">
          <Link className="h-5 w-5 mr-2" />
          <ExternalLink href="https://www.rocky.dev">
            https://rocky.dev
          </ExternalLink>
        </div>
        <div className="flex items-center">
          <LinkedIn className="h-5 w-5 mr-2" />
          <ExternalLink href="https://www.linkedin.com/in/rockywarren">
            linkedin.com/in/rockywarren
          </ExternalLink>
        </div>
      </div>
    </div>
  </>
);

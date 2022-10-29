import React from "react";

import { SocialMedia } from "../lib/constants";
import { Container } from "./container";
import { ExternalLink } from "./external-link";
import { GitHub, LinkedIn } from "./icons";

export function Footer(): JSX.Element {
  return (
    <footer className="h-30 flex items-center shrink-0 print:hidden">
      <Container>
        <div className="container mx-auto my-5 max-w-3xl text-gray-300">
          <hr />
        </div>
        <div className="flex justify-center md:order-2 my-8">
          <ExternalLink
            href={SocialMedia.LinkedIn}
            className="ml-6 text-gray-500 hover:text-gray-600"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedIn />
          </ExternalLink>
          <ExternalLink
            href={SocialMedia.Github}
            className="ml-6 text-gray-500 hover:text-gray-600"
          >
            <span className="sr-only">GitHub</span>
            <GitHub />
          </ExternalLink>
        </div>
      </Container>
    </footer>
  );
}

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/pro-light-svg-icons";
import Link from "next/link";

import { ContainerInner, ContainerOuter } from "@/components/Container";
import { SocialLink } from "@/components/SocialLink";

type Props = Readonly<{
  children: React.ReactNode;
  href: string;
}>;

function NavLink({ children, href }: Props) {
  return (
    <Link
      className="transition hover:text-blue-700 dark:hover:text-blue-400"
      href={href}
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 print:hidden">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 text-zinc-800 dark:text-zinc-200 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/resume">Resume</NavLink>
                <NavLink href="/notes">Notes</NavLink>
                <NavLink href="/privacy-and-terms">Privacy</NavLink>
                <NavLink href="/privacy-and-terms">Terms</NavLink>
              </div>
              <ul className="flex gap-6" role="list">
                <SocialLink
                  aria-label="Follow on GitHub"
                  href="https://github.com/therockstorm"
                  icon={faGithub}
                />
                <SocialLink
                  aria-label="Follow on LinkedIn"
                  href="https://www.linkedin.com/in/rockywarren/"
                  icon={faLinkedin}
                />
                <SocialLink
                  aria-label="Subscribe to RSS"
                  href="/rss/feed.xml"
                  icon={faRss}
                />
              </ul>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NextSeo } from "next-seo";

import { Container } from "@/components/Container";
import avatar from "@/images/avatar.jpg";
import { AUTHOR, SITE_URL } from "@/lib/seo";

function SocialLink({ className, href, children, icon }) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <FontAwesomeIcon
          className="h-6 w-6 flex-none text-zinc-500 transition group-hover:text-teal-500"
          icon={icon}
        />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

export default function About() {
  const path = usePathname();

  const description = "I’m Rocky Warren.";
  const title = "About - Rocky Warren";
  const url = `${SITE_URL}${path}`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NextSeo
        canonical={url}
        description={description}
        openGraph={{ description, title, url }}
        title={title}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={avatar}
                alt={AUTHOR}
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {description}
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>Hi.</p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/therockstorm"
                icon={faGithub}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/rockywarren/"
                icon={faLinkedin}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}

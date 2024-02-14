import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/pro-light-svg-icons";
import Head from "next/head";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NextSeo } from "next-seo";

import { Container } from "@/components/Container";
import { Prose } from "@/components/Prose";
import { SocialLink } from "@/components/SocialLink";
import avatar from "@/images/avatar.jpg";
import { AUTHOR, SITE_URL } from "@/lib/seo";

export default function About() {
  const path = usePathname();

  const description = `I'm ${AUTHOR}.`;
  const title = `About - ${AUTHOR}`;
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
                alt={AUTHOR}
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                placeholder="blur"
                sizes="(min-width: 1024px) 32rem, 20rem"
                src={avatar}
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {description}
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-300">
              <Prose>
                <p>
                  You know how most software you use is crawling with bugs and
                  so stuffed full of privacy and security-compromising ads that
                  it
                  {"'"}s nearly unusable? Well, I love and take pride in what I
                  do. Frustrating hackers and killing bugs are hobbies. I write
                  secure, usable software.
                </p>

                <p>
                  I{"'"}m Rocky Warren, a software engineer based
                  in Denver, loving the startup life. Away from work, I{"'"}m
                  with my wife and son, hopefully outside or planning our next
                  adventure. Sometimes that adventure takes us across the
                  country. More often, it takes us to a local library with new
                  toys.
                </p>

                <blockquote>
                  <p>
                    Let us postpone nothing. Let us balance life&apos;s books
                    each day...The one who puts the finishing touches on their
                    life each day is never short of time. ―Seneca
                  </p>
                </blockquote>

                <blockquote>
                  <p>
                    Ask what makes you come alive and go do it. Because what the
                    world needs is people who have come alive. ―Howard Thurman
                  </p>
                </blockquote>
              </Prose>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                className="mt-4"
                href="https://github.com/therockstorm"
                icon={faGithub}
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                className="mt-4"
                href="https://www.linkedin.com/in/rockywarren/"
                icon={faLinkedin}
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink className="mt-4" href="/rss/feed.xml" icon={faRss}>
                Subscribe to RSS
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NextSeo } from "next-seo";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import brale from "@/images/logos/brale.png";
import collins from "@/images/logos/collins.png";
import crucible from "@/images/logos/crucible.png";
import deere from "@/images/logos/deere.png";
import dwolla from "@/images/logos/dwolla.png";
import iowa from "@/images/logos/iowa.png";
import vertex from "@/images/logos/vertex.png";
import image1 from "@/images/photos/image-1.jpg";
import image2 from "@/images/photos/image-2.jpg";
import image3 from "@/images/photos/image-3.jpg";
import image4 from "@/images/photos/image-4.jpg";
import image5 from "@/images/photos/image-5.jpg";
import { formatDate } from "@/lib/formatDate";
import { generateRssFeed } from "@/lib/generateRssFeed";
import { getAllArticles } from "@/lib/getAllArticles";
import { SITE_URL } from "@/lib/seo";

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

function SocialLink({ icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <FontAwesomeIcon
        className="h-6 w-6 text-zinc-500 transition group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300"
        icon={icon}
      />
    </Link>
  );
}

function Resume() {
  let resume = [
    {
      company: "Brale",
      title: "Founding Principal Engineer",
      logo: brale,
      start: "2022",
      end: "Present",
    },
    {
      company: "Vertex Software",
      title: "Principal Software Engineer",
      logo: vertex,
      start: "2019",
      end: "2022",
    },
    {
      company: "Dwolla",
      title: "Principal Software Engineer",
      logo: dwolla,
      start: "2012",
      end: "2019",
    },
    {
      company: "Crucible",
      title: "Co-founder",
      logo: crucible,
      start: "2014",
      end: "2016",
    },
    {
      company: "John Deere",
      title: "Lead Software Engineer",
      logo: deere,
      start: "2006",
      end: "2012",
    },
    {
      company: "University of Iowa",
      title: "Software Developer",
      logo: iowa,
      start: "2006",
      end: "2007",
    },
    {
      company: "Collins Aerospace/Raytheon",
      title: "Intern",
      logo: collins,
      start: "2005",
      end: "2005",
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <FontAwesomeIcon className="h-6 w-6 flex-none" icon={faBriefcase} />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, idx) => (
          <li key={idx} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt={`${role.company} logo`}
                className="h-7 w-7"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-500 dark:text-zinc-400"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="/resume" className="group mt-6 w-full" variant="secondary">
        View full Resume
      </Button>
    </div>
  );
}

function Photos() {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[
          { image: image1, alt: "Haleakala National Park" },
          { image: image2, alt: "Rome, Italy" },
          { image: image3, alt: "Chain of Craters Road" },
          { image: image4, alt: "Santa Elena Canyon" },
          { image: image5, alt: "Maligne Lake" },
        ].map(({ alt, image }, idx) => (
          <div
            key={image.src}
            className={clsx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
              rotations[idx % rotations.length]
            )}
          >
            <Image
              src={image}
              alt={alt}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home({ articles }) {
  const path = usePathname();

  const description =
    "I’m Rocky Warren, a software and security engineer based in Denver. Away from my keyboard, I've ridden across the United States on a motorcycle, across Canada on a train, and across Iowa on a bicycle.";
  const t = "Principal engineer and aspiring dad of the year.";
  const title = `Rocky Warren - ${t}`;
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
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {t}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/therockstorm"
              aria-label="Follow on GitHub"
              icon={faGithub}
            />
            <SocialLink
              href="https://www.linkedin.com/in/rockywarren/"
              aria-label="Follow on LinkedIn"
              icon={faLinkedin}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === "production") {
    await generateRssFeed();
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(({ component, ...meta }) => meta),
    },
  };
}

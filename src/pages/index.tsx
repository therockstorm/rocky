import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faRss } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NextSeo } from "next-seo";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Newsletter } from "@/components/Newsletter";
import { SocialLink } from "@/components/SocialLink";
import brale from "@/images/logos/brale.png";
import clipboardHealth from "@/images/logos/clipboard-health.jpg";
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
import { Article as ArticleType, getAllArticles } from "@/lib/articles";
import { formatDate } from "@/lib/date";
import { generateRssFeed } from "@/lib/generate-feed";
import { AUTHOR, SITE_URL } from "@/lib/seo";

const RESUME = [
  {
    company: "Clipboard Health",
    end: "Present",
    logo: clipboardHealth,
    start: "2023",
    title: "Engineering",
  },
  {
    company: "Brale",
    end: "2023",
    logo: brale,
    start: "2022",
    title: "Founding Principal Engineer",
  },
  {
    company: "Vertex Software",
    end: "2022",
    logo: vertex,
    start: "2019",
    title: "Principal Software Engineer",
  },
  {
    company: "Dwolla",
    end: "2019",
    logo: dwolla,
    start: "2012",
    title: "Principal Software Engineer",
  },
  {
    company: "Crucible",
    end: "2016",
    logo: crucible,
    start: "2014",
    title: "Co-founder",
  },
  {
    company: "John Deere",
    end: "2012",
    logo: deere,
    start: "2006",
    title: "Lead Software Engineer",
  },
  {
    company: "University of Iowa",
    end: "2007",
    logo: iowa,
    start: "2006",
    title: "Software Developer",
  },
  {
    company: "Collins Aerospace/Raytheon",
    end: "2005",
    logo: collins,
    start: "2005",
    title: "Software Engineer Intern",
  },
];

const ROTATIONS = [
  "rotate-2",
  "-rotate-2",
  "rotate-2",
  "rotate-2",
  "-rotate-2",
];

type Props = Readonly<{ articles: readonly ArticleType[] }>;

export default function Home({ articles }: Props) {
  const path = usePathname();

  const description = `I'm ${AUTHOR}, a software and security engineer based in Denver. I take notes. This site is a collection of those potentially helpful to others. I've ridden across the United States on a motorcycle, across Canada on a train, and across Iowa on a bicycle.`;
  const title = `Principal engineer, aspiring father of the year.`;
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
        <div className="max-w-2xl text-zinc-600 dark:text-zinc-300">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-base">{description}</p>
          <ul className="mt-6 flex gap-6" role="list">
            <SocialLink
              aria-label="Follow on GitHub"
              href="https://github.com/therockstorm"
              icon={faGithub}
            >
              GitHub
            </SocialLink>
            <SocialLink
              aria-label="Follow on LinkedIn"
              href="https://www.linkedin.com/in/rockywarren/"
              icon={faLinkedin}
            >
              LinkedIn
            </SocialLink>
            <SocialLink
              aria-label="Subscribe to RSS"
              href="/rss/feed.xml"
              icon={faRss}
            >
              RSS
            </SocialLink>
          </ul>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article article={article} key={article.slug} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}

function Article({ article }: Readonly<{ article: ArticleType }>) {
  return (
    <Card as="article">
      <Card.Title href={`/blog/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

function Resume() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <FontAwesomeIcon className="h-6 w-6 flex-none" icon={faBriefcase} />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {RESUME.map((role) => (
          <li className="flex gap-4" key={role.company}>
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                alt={`${role.company} logo`}
                className="h-7 w-7"
                src={role.logo}
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-300">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                aria-label={`${role.start} until ${role.end}`}
                className="ml-auto text-xs text-zinc-500 dark:text-zinc-300"
              >
                <time dateTime={role.start}>{role.start}</time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime={role.end}>{role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button className="group mt-6 w-full" href="/resume" variant="secondary">
        View full Resume
      </Button>
    </div>
  );
}

function Photos() {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[
          { alt: "Haleakala National Park", image: image1 },
          { alt: "Motorcycling over the Golden Gate Bridge", image: image2 },
          { alt: "Great Sand Dunes National Park", image: image3 },
          { alt: "Chain of Craters Road", image: image4 },
          { alt: "Santa Elena Canyon", image: image5 },
        ].map(({ alt, image }, idx) => (
          <div
            className={clsx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
              ROTATIONS[idx % ROTATIONS.length]
            )}
            key={image.src}
          >
            <Image
              alt={alt}
              className="absolute inset-0 h-full w-full object-cover"
              placeholder="blur"
              sizes="(min-width: 640px) 18rem, 50vw"
              src={image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === "production") await generateRssFeed();

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(({ component, ...meta }) => meta),
    },
  };
}

import { faLink } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NextSeo } from "next-seo";

import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import masterpiecesReimagined from "@/images/logos/masterpieces-reimagined.png";
import privacyProtect from "@/images/logos/privacy-protect.png";
import rockyDev from "@/images/logos/rocky-dev.png";
import webhooks from "@/images/logos/webhooks.png";
import windTurbine from "@/images/logos/wind-turbine.png";
import { AUTHOR, SITE_URL } from "@/lib/seo";

const projects = [
  {
    description:
      "Securely share passwords and sensitive files over email or store them in insecure locations like cloud or USB drives.",
    link: {
      href: "https://www.privacyprotect.dev?utm_source=rocky&utm_medium=web&utm_content=projects",
      label: "privacyprotect.dev",
    },
    logo: privacyProtect,
    name: "PrivacyProtect",
  },
  {
    description:
      "Applications demoed to Fortune 100 companies at Vertex Software. They are untested proofs of concept.",
    link: {
      href: "https://developer.vertexvis.com/examples/",
      label: "vertexvis.com",
    },
    logo: windTurbine,
    name: "3D CAD collaboration",
  },
  {
    description:
      "The site you're on right now. It's (over)built with NextJS, Tailwind, and MDX and deployed on Vercel.",
    link: {
      href: "https://github.com/therockstorm/rocky",
      label: "github.com",
    },
    logo: rockyDev,
    name: "rocky.dev",
  },
  {
    description:
      "Highly scalable, well-tested, serverless webhook delivery service in use at Dwolla. Find code links at the bottom of the article.",
    link: {
      href: "https://www.serverless.com/blog/lessons-learned-from-sending-millions-of-serverless-webhooks",
      label: "serverless.com",
    },
    logo: webhooks,
    name: "Serverless Webhooks",
  },
  {
    description:
      "Art meets algorithms—masterpieces passed through self-inverse functions to scramble each pixel. Passing that image into the same function yields the original artwork.",
    link: {
      href: "https://opensea.io/assets/ethereum/0xf1846f54c57fa5a1bb49aa5aaf42be0817083a94/1",
      label: "opensea.io",
    },
    logo: masterpiecesReimagined,
    name: "Masterpieces, Reimagined",
  },
];

export default function Projects() {
  const path = usePathname();

  const description = `I've worked on lots of projects over the years. From those that are open-source, I'm most proud of these. If you see something interesting, check out the code!`;
  const title = `Projects - ${AUTHOR}`;
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
      <SimpleLayout intro={description} title="Things I've made.">
        <ul
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  alt={project.name}
                  className="h-8 w-8"
                  src={project.logo}
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-500 transition group-hover:text-blue-700 dark:text-zinc-400">
                <FontAwesomeIcon className="h-6 w-6 flex-none" icon={faLink} />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  );
}

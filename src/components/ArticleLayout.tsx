import Head from "next/head";
import { usePathname } from "next/navigation";
import { ArticleJsonLd, NextSeo } from "next-seo";
import { OpenGraphMedia } from "next-seo/lib/types";

import { Container } from "@/components/Container";
import { Newsletter } from "@/components/Newsletter";
import { Prose } from "@/components/Prose";
import { formatDate } from "@/lib/date";
import { AUTHOR, SITE_URL, toJsonLdString } from "@/lib/seo";

type Meta = Readonly<{
  author?: string;
  date: string;
  description: string;
  images?: readonly OpenGraphMedia[];
  title: string;
}>;

type Props = Readonly<{
  children: React.ReactNode;
  isRssFeed?: boolean;
  meta: Meta;
}>;

export function ArticleLayout({ children, isRssFeed = false, meta }: Props) {
  const path = usePathname();
  if (isRssFeed) return children;

  const noteDesc = path?.startsWith("/notes/")
    ? `${AUTHOR}'s ${meta.title} notes.`
    : "";
  const author = meta.author ?? AUTHOR;
  const description = meta.description ? meta.description : noteDesc;
  const title = `${meta.title} - ${author}`;
  const url = `${SITE_URL}${path}`;
  const images = meta.images ?? [
    {
      alt: title,
      url: `${SITE_URL}/api/og?title=${encodeURIComponent(meta.title)}`,
    },
  ];
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NextSeo
        canonical={url}
        description={description}
        openGraph={{ description, images, title, type: "article", url }}
        title={title}
      />
      <ArticleJsonLd
        authorName={author}
        datePublished={meta.date}
        description={toJsonLdString(description)}
        images={images.map((i) => i.url)}
        publisherName={author}
        title={toJsonLdString(title)}
        url={url}
      />
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {meta.title}
                </h1>
                <time
                  className="order-first flex items-center text-base text-zinc-500 dark:text-zinc-300"
                  dateTime={meta.date}
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
              </header>
              <Prose className="mt-8">{children}</Prose>
            </article>
            <Newsletter className="mt-16" />
          </div>
        </div>
      </Container>
    </>
  );
}

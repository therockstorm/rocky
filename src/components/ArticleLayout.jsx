import Head from "next/head";
import { usePathname } from "next/navigation";
import { ArticleJsonLd, NextSeo } from "next-seo";

import { Container } from "@/components/Container";
import { Prose } from "@/components/Prose";
import { formatDate } from "@/lib/formatDate";
import { AUTHOR, SITE_URL, toJsonLdString } from "@/lib/seo";

export function ArticleLayout({ children, meta, isRssFeed = false }) {
  const path = usePathname();
  if (isRssFeed) return children;

  const noteDesc = path.startsWith("/notes/")
    ? `${AUTHOR}'s ${meta.title} notes.`
    : "";
  const description = meta.description ? meta.description : noteDesc;
  const title = `${meta.title} - ${meta.author}`;
  const url = `${SITE_URL}${path}`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NextSeo
        canonical={url}
        description={description}
        openGraph={{ description, title, type: "article", url }}
        title={title}
      />
      <ArticleJsonLd
        url={url}
        title={toJsonLdString(title)}
        images={[]}
        datePublished={meta.date}
        authorName={meta.author}
        publisherName={meta.author}
        description={toJsonLdString(description)}
      />
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {meta.title}
                </h1>
                <time
                  dateTime={meta.date}
                  className="order-first flex items-center text-base text-zinc-500 dark:text-zinc-400"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
              </header>
              <Prose className="mt-8">{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  );
}

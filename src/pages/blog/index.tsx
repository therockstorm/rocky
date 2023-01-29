import Head from "next/head";
import { usePathname } from "next/navigation";
import { NextSeo } from "next-seo";

import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import { getAllArticles } from "@/lib/articles";
import { formatDate } from "@/lib/date";
import { AUTHOR, BLOG_DESC, SITE_URL } from "@/lib/seo";

type Article = Readonly<{
  date: string;
  description: string;
  slug: string;
  title: string;
}>;

type Props = Readonly<{
  articles: readonly Article[];
}>;

export default function ArticlesIndex({ articles }: Props) {
  const path = usePathname();

  const description = BLOG_DESC;
  const title = `sudo README - ${AUTHOR}`;
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
      <SimpleLayout intro={description} title="sudo README">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <ArticleIndex article={article} key={article.slug} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  };
}

function ArticleIndex({ article }: Readonly<{ article: Article }>) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${article.slug}`}>{article.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          className="md:hidden"
          dateTime={article.date}
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        className="mt-1 hidden md:block"
        dateTime={article.date}
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  );
}

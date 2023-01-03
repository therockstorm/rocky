import Head from "next/head";
import { usePathname } from "next/navigation";
import { NextSeo } from "next-seo";

import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import { formatDate } from "@/lib/formatDate";
import { getAllArticles } from "@/lib/getAllArticles";
import { SITE_URL } from "@/lib/seo";

type Article = Readonly<{
  date: string;
  description: string;
  slug: string;
  title: string;
}>;

type Props = Readonly<{
  articles: Article[];
}>;

export default function ArticlesIndex({ articles }: Props) {
  const path = usePathname();

  const description =
    "My thoughts on software, security, and leadership. Oh, and motorcycling.";
  const title = "sudo README - Rocky Warren";
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
      <SimpleLayout title="sudo README" intro={description}>
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <ArticleIndex key={article.slug} article={article} />
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
        <Card.Title href={`/${article.slug}`}>{article.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  );
}

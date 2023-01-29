import { Feed } from "feed";
import { mkdir, writeFile } from "fs/promises";
import ReactDOMServer from "react-dom/server";

import { Article, getAllArticles } from "./articles";
import { AUTHOR, BLOG_DESC, SITE_URL } from "./seo";

export async function generateRssFeed() {
  const articles: Article[] = await getAllArticles();
  const author = { name: AUTHOR };

  const feed = new Feed({
    author,
    copyright: new Date().getFullYear().toString(),
    description: BLOG_DESC,
    favicon: `${SITE_URL}/favicon.svg`,
    feedLinks: {
      json: `${SITE_URL}/rss/feed.json`,
      rss2: `${SITE_URL}/rss/feed.xml`,
    },
    id: SITE_URL,
    image: `${SITE_URL}/favicon.svg`,
    link: SITE_URL,
    title: author.name,
  });

  for (const article of articles) {
    const url = `${SITE_URL}/${article.slug}`;
    const html = ReactDOMServer.renderToStaticMarkup(
      <article.component isRssFeed />
    );

    feed.addItem({
      author: [author],
      content: html,
      contributor: [author],
      date: new Date(article.date),
      description: article.description,
      id: url,
      link: url,
      title: article.title,
    });
  }

  await mkdir("./public/rss", { recursive: true });
  await Promise.all([
    writeFile("./public/rss/feed.xml", feed.rss2(), "utf8"),
    writeFile("./public/rss/feed.json", feed.json1(), "utf8"),
  ]);
}

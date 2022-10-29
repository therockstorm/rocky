import { Feed } from "feed";
import { writeFileSync } from "fs";

import { Author, PublicSiteUrl, SiteDescription, SiteTitle } from "./constants";
import { PostData } from "./posts";

export function generateRSSFeed(posts: PostData[]): void {
  const author = { name: Author };
  const feed = new Feed({
    author,
    copyright: `2012-present ${Author}`,
    description: SiteDescription,
    feedLinks: { rss2: `${PublicSiteUrl}/rss.xml` },
    id: PublicSiteUrl,
    language: "en",
    link: PublicSiteUrl,
    title: SiteTitle,
    updated: new Date(),
  });

  posts.forEach((post) => {
    const { date, excerpt, id, title } = post;
    const url = `${PublicSiteUrl}/${id}`;

    feed.addItem({
      title,
      id: url,
      link: url,
      content: excerpt,
      author: [author],
      date: new Date(date),
    });
  });

  writeFileSync("public/rss.xml", feed.rss2());
}

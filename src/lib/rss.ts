import { Feed } from "feed";
import { writeFileSync } from "fs";

import {
  Author,
  SiteDescription,
  SiteTitle,
  SiteUrl,
  SocialMedia,
} from "./constants";
import { PostData } from "./posts";

export function generateRSSFeed(posts: PostData[]): void {
  const author = { name: Author, link: SocialMedia.Twitter };
  const feed = new Feed({
    author,
    copyright: `2012-present ${Author}`,
    description: SiteDescription,
    feedLinks: { rss2: `${SiteUrl}/rss.xml` },
    id: SiteUrl,
    language: "en",
    link: SiteUrl,
    title: SiteTitle,
    updated: new Date(),
  });

  posts.forEach((post) => {
    const { date, excerpt, id, title } = post;
    const url = `${SiteUrl}/${id}`;

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

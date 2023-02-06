import glob from "fast-glob";
import { join } from "path";

export type Article = Readonly<{
  canonical?: string;
  component: React.ComponentType<Readonly<{ isRssFeed?: boolean }>>;
  date: string;
  description: string;
  slug: string;
  title: string;
}>;

export async function getAllArticles(): Promise<Article[]> {
  const fileNames = await glob(["*.mdx", "*/index.mdx"], {
    cwd: join(process.cwd(), "src/pages/blog"),
  });

  return (await Promise.all(fileNames.map(importArticle)))
    .filter((a) => !a.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

async function importArticle(fileName: string) {
  const { meta, default: component } = await import(
    `../pages/blog/${fileName}`
  );
  return {
    slug: fileName.replace(/(\/index)?\.mdx$/, ""),
    ...meta,
    component,
  };
}

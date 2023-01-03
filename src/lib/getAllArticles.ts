import glob from "fast-glob";
import { join } from "path";

export async function getAllArticles() {
  const articleFilenames = await glob(["*.mdx", "*/index.mdx"], {
    cwd: join(process.cwd(), "src/pages"),
  });

  return (await Promise.all(articleFilenames.map(importArticle))).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

async function importArticle(fileName: string) {
  const { meta, default: component } = await import(`../pages/${fileName}`);
  return {
    slug: fileName.replace(/(\/index)?\.mdx$/, ""),
    ...meta,
    component,
  };
}

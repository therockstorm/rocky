import glob from "fast-glob";
import { join } from "path";

export async function getAllNotes() {
  const fileNames = await glob(["**/*.mdx"], {
    cwd: join(process.cwd(), "src/pages/notes"),
  });

  return (await Promise.all(fileNames.map(importNote))).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

async function importNote(fileName: string) {
  const { meta, default: component } = await import(
    `../pages/notes/${fileName}`
  );
  return {
    slug: fileName.replace(/(\/index)?\.mdx$/, ""),
    ...meta,
    component,
  };
}

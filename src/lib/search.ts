import algoliasearch from "algoliasearch";

import { NotesSearchIndex, PostsSearchIndex } from "./constants";
import { NoteData } from "./notes";
import { PostData } from "./posts";

export async function buildNotesIndex(data: NoteData[]): Promise<void> {
  await buildIndex(
    data.map(({ date, excerpt, ids, title }) => ({
      date,
      excerpt,
      id: ids.join("/"),
      title,
    })),
    NotesSearchIndex,
    "notes/"
  );
}

export async function buildPostsIndex(data: PostData[]): Promise<void> {
  await buildIndex(data, PostsSearchIndex);
}

async function buildIndex(
  data: { date: string; excerpt: string; id: string; title: string }[],
  index: string,
  slugPrefix?: string
): Promise<void> {
  const idx = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? "",
    process.env.ALGOLIA_SEARCH_ADMIN_KEY ?? ""
  ).initIndex(index);
  const transformed = data.map(({ date, excerpt, id, title }) => ({
    objectID: id,
    title,
    excerpt,
    slug: `${slugPrefix ?? ""}${id}`,
    date,
  }));
  const res = await idx.saveObjects(transformed);
  console.debug(`Added ${res.objectIDs.length} records to Algolia.`);
}

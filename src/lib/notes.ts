import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { join, resolve } from "path";

import { excerpt } from "./excerpt";

const NotesPath = join(process.cwd(), "src/notes");

export interface Id {
  readonly ids: string[];
  readonly [key: string]: string | string[] | undefined;
}

export interface FrontMatter {
  readonly date: string;
  readonly excerpt: string;
  readonly title: string;
}

export type NoteData = FrontMatter & Id;

export async function getNotesData(): Promise<NoteData[]> {
  return (await getFiles(NotesPath)).map((f) => {
    const m = matter(readFileSync(f, "utf8"), { excerpt });
    return {
      ids: [f.slice(f.indexOf("/notes/") + 7)],
      ...({ ...m.data, excerpt: m.excerpt } as FrontMatter),
    };
  });
}

export function getContent(ids: string[]): matter.GrayMatterFile<string> {
  return matter(readFileSync(join(NotesPath, ids.join("/")), "utf8"), {
    excerpt,
  });
}

async function getFiles(dir: string): Promise<string[]> {
  return (
    await Promise.all(
      readdirSync(dir, { withFileTypes: true }).map((d) => {
        const res = resolve(dir, d.name);
        return d.isDirectory() ? getFiles(res) : Promise.resolve([res]);
      })
    )
  ).flat();
}

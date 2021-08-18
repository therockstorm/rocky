import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { join, resolve } from "path";

const NotesPath = join(process.cwd(), "src/notes");

export interface Id {
  readonly ids: string[];
  readonly [key: string]: string | string[] | undefined;
}

export interface FrontMatter {
  readonly title?: string;
  readonly date?: string;
}

export type NoteData = FrontMatter & Id;

export async function getNotesData(): Promise<NoteData[]> {
  return (await getFiles(NotesPath)).map((f) => {
    const idx = f.indexOf("/notes/");
    return {
      ids: [f.slice(idx + 7)],
      ...(matter(readFileSync(f, "utf8")).data as FrontMatter),
    };
  });
}

export function getContent(ids: string[]): matter.GrayMatterFile<string> {
  return matter(readFileSync(join(NotesPath, ids.join("/")), "utf8"));
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

import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";

import { excerpt } from "./excerpt";

const PostsPath = join(process.cwd(), "src/posts");

export interface Author {
  readonly name: string;
  readonly picture: string;
}

export interface Id {
  readonly id: string;
  readonly [key: string]: string | string[] | undefined;
}

export interface FrontMatter {
  readonly date: string;
  readonly excerpt: string;
  readonly katex: string;
  readonly title: string;
}

export type PostData = Id & FrontMatter;

export function getPostsData(): PostData[] {
  return readdirSync(PostsPath)
    .map((fn) => {
      const m = matter(readFileSync(join(PostsPath, fn), "utf8"), { excerpt });
      return {
        id: fn.replace(/\.mdx$/, ""),
        ...({ ...m.data, excerpt: m.excerpt } as FrontMatter),
      };
    })
    .sort(({ date: a }, { date: b }) => (a < b ? 1 : a > b ? -1 : 0));
}

export function getContent({ id }: Id): matter.GrayMatterFile<string> {
  return matter(readFileSync(join(PostsPath, `${id}.mdx`), "utf8"), {
    excerpt,
  });
}

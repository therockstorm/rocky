import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";

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
  readonly title: string;
}

export type PostData = Id & FrontMatter;

const PruneLength = 185;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function excerpt(input: any): string {
  const e = `${input.content
    .slice(0, PruneLength * 2)
    .split("\n")
    .join(" ")
    .replace(/\[(.+?)\]\(.+?\)/g, "$1")
    .replace(/(#+\s|-\s)/g, "")
    .replace(/`(.+?)`/g, "$1")
    .replace(/_(.+?)_/g, "$1")
    .replace(/<.+\s\/>/g, "")
    .replace(/<.+?>.*<.+?>/g, "")
    .slice(0, PruneLength)}...`;
  input.excerpt = e;
  return e;
}

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
  return matter(readFileSync(join(PostsPath, `${id}.mdx`), "utf8"));
}

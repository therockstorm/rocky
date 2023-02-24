import { faFolder } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { usePathname } from "next/navigation";
import { NextSeo } from "next-seo";

import { SimpleLayout } from "@/components/SimpleLayout";
import { getAllNotes } from "@/lib/notes";
import { AUTHOR, SITE_URL } from "@/lib/seo";

type Note = Readonly<{
  date: string;
  description: string;
  slug: string;
  title: string;
}>;

type Props = Readonly<{
  notes: readonly Note[];
}>;

const SEPARATOR = "/";
const PREFIX = `~${SEPARATOR}notes`;

type Tree = Record<string, string[]>;

export default function NotesIndex({ notes }: Props) {
  const path = usePathname();

  const tree = notes.reduce((acc: Tree, note) => {
    const fs = note.slug.split(SEPARATOR);
    const [dir, fn] =
      fs.length === 1 ? [PREFIX, fs[0]] : [`${PREFIX}/${fs[0]}`, fs[1]];
    acc[dir] = [...(acc[dir] ?? []), fn];
    return acc;
  }, {} as Tree);

  const description =
    "My rough notes on books, AWS, and other topics I found attractive at one point or another.";
  const title = `Notes - ${AUTHOR}`;
  const url = `${SITE_URL}${path}`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NextSeo
        canonical={url}
        description={description}
        openGraph={{ description, title, url }}
        title={title}
      />
      <SimpleLayout intro={description} title="Notes">
        <ul className="flex flex-col gap-y-6 text-zinc-800 dark:text-zinc-100">
          {Object.keys(tree)
            .sort()
            .map((d) => (
              <li key={d}>
                <div className="mb-6 flex text-zinc-500 dark:text-zinc-300">
                  <FontAwesomeIcon className="h-6 w-6" icon={faFolder} />
                  <div className="ml-2">{d}</div>
                </div>
                <ul className="flex flex-col gap-y-4">
                  {tree[d].sort().map((id) => (
                    <li className="ml-8" key={id}>
                      <Link href={`/notes${d.replace(PREFIX, "")}/${id}`}>
                        {id.replace(".mdx", "")}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      </SimpleLayout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      notes: (await getAllNotes()).map(({ component, ...meta }) => meta),
    },
  };
}

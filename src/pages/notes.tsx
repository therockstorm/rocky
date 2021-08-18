import { GetStaticPropsResult } from "next";
import Link from "next/link";
import { NextSeo } from "next-seo";
import React from "react";

import { Container } from "../components/container";
import { Folder } from "../components/icons";
import { Layout } from "../components/layout";
import { Navigation } from "../components/navigation";
import { getNotesData, NoteData } from "../lib/notes";
import { SiteDescription, SiteTitle, SiteUrl } from ".";

interface Props {
  readonly notes: NoteData[];
}

const Sep = "/";

function Notes({ notes }: Props): JSX.Element {
  const tree = notes.reduce(
    (acc: { [k: string]: string[] }, note: NoteData) => {
      const fs = note.ids[0].split(Sep);
      const [dir, fn] = fs.length === 1 ? [Sep, fs[0]] : [`${fs[0]}/`, fs[1]];
      acc[dir] = [...(acc[dir] ?? []), fn];
      return acc;
    },
    {} as { [k: string]: string[] }
  );

  return (
    <Layout>
      <NextSeo
        title={SiteTitle}
        description={SiteDescription}
        canonical={SiteUrl}
        openGraph={{
          url: SiteUrl,
          title: SiteTitle,
          description: SiteDescription,
          site_name: SiteTitle,
        }}
      />
      <Navigation />
      <Container>
        <ul>
          {Object.keys(tree)
            .sort()
            .map((d) => (
              <li key={d}>
                <div className="flex align-center ">
                  <div className="text-gray-500">
                    <Folder />
                  </div>
                  <div className="ml-2">{d}</div>
                </div>
                <ul className="my-2 ml-2">
                  {tree[d].map((id) => (
                    <li className="mt-1" key={id}>
                      <Link href={`/notes/${d === "/" ? "" : d}${id}`}>
                        {id.replace(".mdx", "")}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      </Container>
    </Layout>
  );
}

export default Notes;

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return { props: { notes: await getNotesData() } };
}

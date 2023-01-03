import Head from "next/head";
import { usePathname } from "next/navigation";
import { NextSeo } from "next-seo";

import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import { formatDate } from "@/lib/formatDate";
import { getAllNotes } from "@/lib/getAllNotes";
import { SITE_URL } from "@/lib/seo";

type Note = Readonly<{
  date: string;
  description: string;
  slug: string;
  title: string;
}>;

type Props = Readonly<{
  notes: Note[];
}>;

export default function NotesIndex({ notes }: Props) {
  const path = usePathname();

  const description =
    "My thoughts on software, security, and leadership. Oh, and motorcycling.";
  const title = "Notes - Rocky Warren";
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
      <SimpleLayout title="Notes" intro={description}>
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {notes.map((note) => (
              <Note key={note.slug} note={note} />
            ))}
          </div>
        </div>
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

function Note({ note }: Readonly<{ note: Note }>) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/notes/${note.slug}`}>{note.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={note.date}
          className="md:hidden"
          decorate
        >
          {formatDate(note.date)}
        </Card.Eyebrow>
        <Card.Description>{note.description}</Card.Description>
        <Card.Cta>Read note</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={note.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(note.date)}
      </Card.Eyebrow>
    </article>
  );
}

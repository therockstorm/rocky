import mdxPrism from "mdx-prism";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { ArticleJsonLd, NextSeo } from "next-seo";
import React from "react";
import readingTime from "reading-time";
import externalLinks from "remark-external-links";

import { Container } from "../../components/container";
import { Figure } from "../../components/figure";
import { Layout } from "../../components/layout";
import { Navigation } from "../../components/navigation";
import { PostBody } from "../../components/post-body";
import { PostHeader } from "../../components/post-header";
import { Author, SiteUrl } from "../../lib/constants";
import { FrontMatter, getContent, getNotesData, Id } from "../../lib/notes";

interface Props {
  readonly readTime: { text: string };
  readonly frontMatter: FrontMatter;
  readonly ids: string[];
  readonly source: MDXRemoteSerializeResult;
}

const components = { Figure };

const Note = ({ source, frontMatter, readTime, ids }: Props): JSX.Element => {
  const description = frontMatter.excerpt;
  const id = head(ids) as string;
  const url = `${SiteUrl}/notes/${id}`;
  const title = frontMatter.title;

  return (
    <Layout>
      <NextSeo
        canonical={url}
        description={description}
        openGraph={{ description, url, site_name: title, title }}
        title={title}
      />
      <ArticleJsonLd
        url={url}
        title={title}
        images={[]}
        datePublished={frontMatter.date}
        authorName={Author}
        publisherName={Author}
        publisherLogo=""
        description={description}
      />
      <Navigation />
      <PostHeader
        title={title}
        date={frontMatter.date}
        readingTime={readTime.text}
      />
      <Container>
        <article>
          <PostBody>
            <MDXRemote {...source} components={components} />
          </PostBody>
        </article>
      </Container>
    </Layout>
  );
};

export default Note;

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
  const ids = params?.ids as string[];
  const { content, data, excerpt } = getContent(ids);
  return {
    props: {
      ids,
      readTime: readingTime(content),
      source: await serialize(content, {
        mdxOptions: {
          remarkPlugins: [externalLinks],
          rehypePlugins: [mdxPrism],
        },
        scope: data,
      }),
      frontMatter: { ...data, excerpt } as FrontMatter,
    },
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult<Id>> {
  return {
    paths: (await getNotesData())
      .map(({ ids }) => ids.map((i) => i.split("/")).flat())
      .map((ids) => ({ params: { ids } })),
    fallback: false,
  };
}

export function head<T>(items?: T | T[]): T | undefined {
  return items ? (Array.isArray(items) ? items[0] : items) : undefined;
}

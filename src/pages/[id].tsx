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
import katex from "rehype-katex";
import externalLinks from "remark-external-links";
import math from "remark-math";

import { Container } from "../components/container";
import { Figure } from "../components/figure";
import { Layout } from "../components/layout";
import { Navigation } from "../components/navigation";
import { PostBody } from "../components/post-body";
import { PostHeader } from "../components/post-header";
import { Author, SiteUrl } from "../lib/constants";
import { toJsonLdString } from "../lib/json-ld";
import { FrontMatter, getContent, getPostsData, Id } from "../lib/posts";

interface Props {
  readonly readTime: { text: string };
  readonly frontMatter: FrontMatter;
  readonly id: string;
  readonly source: MDXRemoteSerializeResult;
}

const components = { Figure };

const Post = ({ source, frontMatter, readTime, id }: Props): JSX.Element => {
  const description = frontMatter.excerpt;
  const url = `${SiteUrl}/${id}`;
  const title = frontMatter.title;

  return (
    <Layout katex={Boolean(frontMatter.katex)}>
      <NextSeo
        canonical={url}
        description={description}
        openGraph={{ description, url, site_name: title, title }}
        title={title}
      />
      <ArticleJsonLd
        url={url}
        title={toJsonLdString(title)}
        images={[]}
        datePublished={frontMatter.date}
        authorName={Author}
        publisherName={Author}
        publisherLogo=""
        description={toJsonLdString(description)}
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

export default Post;

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
  const id = head(params?.id) as string;
  const { content, data, excerpt } = getContent({ id });
  return {
    props: {
      id,
      readTime: readingTime(content),
      source: await serialize(content, {
        mdxOptions: {
          remarkPlugins: [externalLinks, math],
          rehypePlugins: [katex, mdxPrism],
        },
        scope: data,
      }),
      frontMatter: { ...data, excerpt } as FrontMatter,
    },
  };
}

export function getStaticPaths(): GetStaticPathsResult<Id> {
  return {
    paths: getPostsData().map(({ id }) => ({ params: { id } })),
    fallback: false,
  };
}

function head<T>(items?: T | T[]): T | undefined {
  return items ? (Array.isArray(items) ? items[0] : items) : undefined;
}

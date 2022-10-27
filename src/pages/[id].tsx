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
import { ExternalLink } from "../components/external-link";
import { Figure } from "../components/figure";
import { Twitter } from "../components/icons";
import { Layout } from "../components/layout";
import { Navigation } from "../components/navigation";
import { PostBody } from "../components/post-body";
import { PostHeader } from "../components/post-header";
import { Author, OpenGraph, SiteUrl } from "../lib/constants";
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
    <Layout>
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
          <ExternalLink
            className="block text-l md:text-l text-center mt-6"
            href={`https://twitter.com/intent/tweet?text=${frontMatter.title} by ${OpenGraph.twitter.handle}, ${SiteUrl}/${id}`}
          >
            <div className="flex w-full justify-center place-items-center text-gray-700 hover:text-blue-400 cursor-pointer duration-200 ease-in-out">
              <Twitter className="h-7 w-7 mr-2 my-2 transition-transform transform hover:-rotate-12" />
              Share or comment on Twitter
            </div>
          </ExternalLink>
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

import { GetStaticPropsResult } from "next";
import { NextSeo } from "next-seo";
import React from "react";

import { Avatar } from "../components/avatar";
import { Card } from "../components/card";
import { CardDate } from "../components/card-date";
import { CardDescription } from "../components/card-description";
import { CardTitle } from "../components/card-title";
import { Container } from "../components/container";
import { ExternalLink } from "../components/external-link";
import { Layout } from "../components/layout";
import { Navigation } from "../components/navigation";
import { getPostsData, PostData } from "../lib/posts";

export const Author = "Rocky Warren";
export const SiteTitle = "Rocky Warren | sudo README";
export const SiteDescription =
  "Rocky Warren's site. Principal Architect, Tech Lead, and Product Manager at Vertex Software. Previously at Dwolla and John Deere.";
export const SiteUrl = `${process.env.NEXT_PUBLIC_SITE_URL}`;
export const BlogTitle = "sudo README";
export const BlogDescription = "My personal blog.";
export const SocialMedia = {
  Twitter: "https://twitter.com/therockstorm",
  Instagram: "https://www.instagram.com/therockstorm/",
  LinkedIn: "https://www.linkedin.com/in/rockywarren",
  Github: "https://github.com/therockstorm",
};
export const OpenGraph = {
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rocky.dev/",
    site_name: "Rocky Warren",
  },
  twitter: {
    handle: "@therockstorm",
    cardType: "summary_large_image",
  },
};

interface Props {
  readonly posts: PostData[];
}

function Index({ posts }: Props): JSX.Element {
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
        <header>
          <div className="flex space-x-3 items-center">
            <Avatar size="lg" />
            <p className="prose lg:prose-lg prose-blue">
              Rocky Warren&#39;s blog. Principal Architect, Tech Lead, Product
              Manager. I{" "}
              <ExternalLink
                className="no-underline font-bold text-lg"
                href={"https://www.rockywarren.com/"}
              >
                do other stuff
              </ExternalLink>{" "}
              too.
            </p>
          </div>
        </header>
        <div className="mt-6">
          {posts.map((post) => (
            <Card key={post.title}>
              <CardTitle href={`/${post.id}`}>{post.title}</CardTitle>
              <CardDate>{post.date}</CardDate>
              <CardDescription>{post.excerpt}</CardDescription>
            </Card>
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export default Index;

export function getStaticProps(): GetStaticPropsResult<Props> {
  return { props: { posts: getPostsData() } };
}

import Head from "next/head";
import React from "react";

interface Props {
  readonly katex: boolean;
  readonly title: string;
}

export function Meta({ katex, title }: Props): JSX.Element {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      {katex && (
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
          crossOrigin="anonymous"
        />
      )}
      <meta name="theme-color" content="#ffffff" />
      <title>{title}</title>
    </Head>
  );
}

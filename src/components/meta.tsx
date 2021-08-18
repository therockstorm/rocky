import Head from "next/head";
import React from "react";

interface Props {
  readonly title: string;
}

export function Meta({ title }: Props): JSX.Element {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="theme-color" content="#ffffff" />
      <title>{title}</title>
    </Head>
  );
}

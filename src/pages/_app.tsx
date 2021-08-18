import "../styles/index.css";

import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import React from "react";

import { OpenGraph } from ".";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <DefaultSeo {...OpenGraph} />
      <Component {...pageProps} />
    </>
  );
}

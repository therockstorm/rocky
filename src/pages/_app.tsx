import "../styles/index.css";

import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import React from "react";

import { OpenGraph } from "../lib/constants";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <DefaultSeo {...OpenGraph} />
      <Component {...pageProps} />
    </>
  );
}

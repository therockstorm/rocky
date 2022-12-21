import React from "react";

import { SiteTitle } from "../lib/constants";
import { Meta } from "./meta";

interface Props {
  readonly children: React.ReactNode;
  readonly katex?: boolean;
}

export function Layout({ children, katex = false }: Props): JSX.Element {
  return (
    <>
      <Meta katex={katex} title={SiteTitle} />
      <div className="w-full h-full flex flex-col">
        <main className="flex-auto">{children}</main>
      </div>
    </>
  );
}

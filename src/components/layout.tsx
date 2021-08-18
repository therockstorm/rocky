import React from "react";

import { SiteTitle } from "../pages";
import { Footer } from "./footer";
import { Meta } from "./meta";

interface Props {
  readonly children: React.ReactNode;
}

export function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Meta title={SiteTitle} />
      <div className="w-full h-full flex flex-col">
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}

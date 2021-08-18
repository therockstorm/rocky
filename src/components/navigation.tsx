import Link from "next/link";
import React from "react";

import { BlogTitle } from "../pages";
import Button from "./button";

export function Navigation(): JSX.Element {
  return (
    <nav className="navigation flex flex-row items-center justify-center top-bg print:hidden">
      <div className="container mx-auto px-5 max-w-3xl flex flex-row justify-end">
        <div className="mr-auto">
          <Link href="/" passHref>
            <Button size="lg">{BlogTitle}</Button>
          </Link>
        </div>
        <div className="flex space-x-2">
          <Link href="/resume" passHref>
            <Button>Resume</Button>
          </Link>
          <Link href="/notes" passHref>
            <Button>Notes</Button>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .navigation {
          position: sticky;
          top: 0;
          width: 100%;
          height: 100px;
          background-color: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          z-index: 100;
          margin-bottom: 24px;
        }
      `}</style>
    </nav>
  );
}

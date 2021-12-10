import Link from "next/link";
import React from "react";

interface Props {
  readonly children: React.ReactNode;
  readonly href: string;
}

export function CardTitle({ children, href, ...rest }: Props): JSX.Element {
  return (
    <Link href={href} {...rest} passHref>
      <button className="flex flex-col sm:flex-row grow text-blue-600 font-semibold text-lg sm:text-xl mb-2 text-left">
        {children}
      </button>
    </Link>
  );
}

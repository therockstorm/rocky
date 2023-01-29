import Link from "next/link";
import React from "react";

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
  href: string;
}>;

export function ExternalLink({
  children,
  className,
  href,
  ...rest
}: Props): JSX.Element {
  return (
    <Link
      className={className ?? "no-underline"}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
    >
      {children}
    </Link>
  );
}

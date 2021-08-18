import React from "react";

interface Props {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly href: string;
}

export function ExternalLink({
  className,
  href,
  children,
  ...rest
}: Props): JSX.Element {
  return (
    <a
      className={className ?? "no-underline"}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  );
}

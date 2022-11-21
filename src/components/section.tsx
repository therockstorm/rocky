import React from "react";

interface Props {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly title: string;
}

export function Section({ children, className, title }: Props): JSX.Element {
  return (
    <section className={className ?? ""}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

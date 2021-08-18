import React from "react";

interface Props {
  readonly children: React.ReactNode;
  readonly title: string;
}

export function Section({ title, children }: Props): JSX.Element {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

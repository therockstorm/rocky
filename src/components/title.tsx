import React from "react";

interface Props {
  readonly children: React.ReactNode;
}

export function Title({ children }: Props): JSX.Element {
  return (
    <h1 className="text-4xl md:text-4xl tracking-tight leading-tight mb-4">
      {children}
    </h1>
  );
}

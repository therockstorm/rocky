import React from "react";

interface Props {
  readonly children: React.ReactNode;
}

export function CardDescription({ children }: Props): JSX.Element {
  return <div className="text-gray-700 text-base text-left">{children}</div>;
}

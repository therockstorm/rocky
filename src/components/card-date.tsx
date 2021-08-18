import React from "react";

interface Props {
  readonly children: React.ReactNode;
}

export function CardDate({ children }: Props): JSX.Element {
  return <div className="mb-1 text-sm text-gray-700 text-left">{children}</div>;
}

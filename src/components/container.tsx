import React from "react";

interface Props {
  readonly children: React.ReactNode;
}

export function Container({ children }: Props): JSX.Element {
  return (
    <div className="container mx-auto px-6 pb-2 max-w-3xl overflow-x-hidden">
      {children}
    </div>
  );
}

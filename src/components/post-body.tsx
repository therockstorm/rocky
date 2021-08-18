import React from "react";

interface Props {
  readonly children: React.ReactNode;
}

export function PostBody({ children }: Props): JSX.Element {
  return (
    <div className="w-full prose lg:prose-lg prose-blue post-body overflow-y-hidden">
      {children}
    </div>
  );
}

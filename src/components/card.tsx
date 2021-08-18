import React from "react";

interface Props {
  readonly children: React.ReactNode;
}

export function Card({ children }: Props): JSX.Element {
  return (
    <div className="bg-white rounded duration-200 ease-in-out mt-2 w-full">
      <div className="py-4 flex flex-col flex-grow justify-between leading-normal">
        {children}
      </div>
    </div>
  );
}

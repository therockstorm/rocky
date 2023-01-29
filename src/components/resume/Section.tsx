import React from "react";

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
  title: string;
}>;

export function Section({ children, className, title }: Props): JSX.Element {
  const id = React.useId();

  return (
    <section aria-labelledby={id} className={className}>
      <h2 className="mt-8 print:mt-4" id={id}>
        {title}
      </h2>
      <div className="flex flex-col gap-y-1">{children}</div>
    </section>
  );
}

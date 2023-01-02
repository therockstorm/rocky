import { useId } from "react";

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
  title: string;
}>;

export function Section({ children, className, title }: Props): JSX.Element {
  const id = useId();

  return (
    <section aria-labelledby={id} className={className}>
      <h2 className="mt-8" id={id}>
        {title}
      </h2>
      {children}
    </section>
  );
}

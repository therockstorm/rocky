import clsx from "clsx";

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export function Prose({ children, className }: Props) {
  return (
    <div
      className={clsx(
        className,
        "prose prose-blue max-w-none prose-a:no-underline hover:prose-a:text-blue-700 dark:prose-invert dark:hover:prose-a:text-blue-400"
      )}
    >
      {children}
    </div>
  );
}

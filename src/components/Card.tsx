import { faChevronRight } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";

type Props = Readonly<{
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}>;

export function Card({ as: Component = "div", children, className }: Props) {
  return (
    <Component
      className={clsx(className, "group relative flex flex-col items-start")}
    >
      {children}
    </Component>
  );
}

Card.Link = function CardLink({
  children,
  ...props
}: Readonly<{ children: React.ReactNode; href: string }>) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  );
};

Card.Title = function CardTitle({
  as: Component = "h2",
  children,
  href,
}: Readonly<{
  as?: React.ElementType;
  children: React.ReactNode;
  href: string;
}>) {
  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
};

Card.Description = function CardDescription({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-300">
      {children}
    </p>
  );
};

Card.Cta = function CardCta({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-blue-600"
    >
      {children}
      <FontAwesomeIcon className="ml-1 h-3 w-3" icon={faChevronRight} />
    </div>
  );
};

Card.Eyebrow = function CardEyebrow({
  as: Component = "p",
  children,
  className,
  decorate = false,
  ...props
}: Readonly<{
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  dateTime: string;
  decorate?: boolean;
}>) {
  return (
    <Component
      className={clsx(
        className,
        "relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 dark:text-zinc-300",
        decorate && "pl-3.5",
      )}
      {...props}
    >
      {decorate && (
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 flex items-center"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  );
};

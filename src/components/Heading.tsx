import { faLink } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { paramCase } from "param-case";

type Props<T extends React.ElementType> = Readonly<{ as?: T; title: string }>;

export function Heading<T extends React.ElementType = "h2">({
  as,
  title,
}: Props<T>): JSX.Element {
  const Component = as || "h2";
  const id = paramCase(title);
  return (
    <Component id={id}>
      <Link
        className="text-[var(--tw-prose-headings)] no-underline dark:text-[var(--tw-prose-invert-headings)]"
        href={`#${id}`}
      >
        <div className="flex items-center gap-x-2">
          <FontAwesomeIcon className="h-4 w-4" icon={faLink} />
          {title}
        </div>
      </Link>
    </Component>
  );
}

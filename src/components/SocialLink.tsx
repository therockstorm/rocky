import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";

type SocialLinkProps = Readonly<{
  ["aria-label"]?: string;
  children?: React.ReactNode;
  className?: string;
  href: string;
  icon: IconProp;
}>;

export function SocialLink({
  className,
  href,
  children,
  icon,
  ...props
}: SocialLinkProps) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        aria-label={props["aria-label"]}
        className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-blue-700 dark:text-zinc-300 dark:hover:text-blue-400"
        href={href}
      >
        <FontAwesomeIcon
          className="h-5 w-5 flex-none text-zinc-500 transition group-hover:text-blue-700"
          icon={icon}
        />
        {children && <span className="ml-4">{children}</span>}
      </Link>
    </li>
  );
}

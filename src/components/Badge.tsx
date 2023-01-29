import clsx from "clsx";
import React from "react";

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}>;

export function Badge({
  children,
  className,
  onClick,
  ...rest
}: Props): JSX.Element {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full bg-blue-700 px-2 py-0.5 text-xs font-medium leading-4 text-white",
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </span>
  );
}

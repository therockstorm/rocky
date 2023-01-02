import clsx from "clsx";
import React from "react";

interface Props {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly onClick?: () => void;
}

export function Badge({
  className,
  children,
  onClick,
  ...rest
}: Props): JSX.Element {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full bg-blue-700 px-2.5 py-0.5 text-xs font-medium leading-4 text-white",
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </span>
  );
}

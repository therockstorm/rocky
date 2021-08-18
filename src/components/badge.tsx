import classNames from "classnames";
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
      className={classNames(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-blue-700 text-white",
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </span>
  );
}

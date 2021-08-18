import React from "react";

interface Props {
  readonly children?: React.ReactNode;
  readonly size?: "sm" | "lg";
}

function Button(
  { children, size = "sm", ...rest }: Props,
  ref: React.Ref<HTMLButtonElement>
): JSX.Element {
  return (
    <button
      className={
        size == "lg"
          ? "font-mono px-2 py-2 font-medium text-2xl leading-5 rounded-md text-gray-500 hover:text-gray-700 outline-none hover:outline-none hover:text-gray-700 duration-200 ease-in-out whitespace-no-wrap"
          : "px-2 py-2 font-medium text-sm leading-5 rounded-md text-gray-500 hover:text-gray-700 outline-none hover:outline-none hover:text-gray-700 duration-200 ease-in-out whitespace-no-wrap"
      }
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
}

export default React.forwardRef(Button);

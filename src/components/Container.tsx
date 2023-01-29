import clsx from "clsx";
import React from "react";

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}>;
type Ref = HTMLDivElement;

export const Container = React.forwardRef<Ref, Props>(function Container(
  { children, ...props },
  ref
) {
  return (
    <ContainerOuter ref={ref} {...props}>
      <ContainerInner>{children}</ContainerInner>
    </ContainerOuter>
  );
});

export const ContainerOuter = React.forwardRef<Ref, Props>(
  function ContainerOuter({ children, className, ...props }, ref) {
    return (
      <div className={clsx("sm:px-8", className)} ref={ref} {...props}>
        <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      </div>
    );
  }
);

export const ContainerInner = React.forwardRef<Ref, Props>(
  function ContainerInner({ children, className, ...props }, ref) {
    return (
      <div
        className={clsx("relative px-4 sm:px-8 lg:px-12", className)}
        ref={ref}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
      </div>
    );
  }
);

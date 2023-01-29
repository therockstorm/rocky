import React from "react";

declare module "csstype" {
  interface Properties extends React.CSSProperties {
    position: React.CSSProperties["position"] | `var(--${string})`;
  }
}

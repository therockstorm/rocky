import Image from "next/image";
import React from "react";

import { Author } from "../lib/constants";
import avatar from "./rocky.jpg";

interface Props {
  readonly showName?: boolean;
  readonly size?: "lg" | "sm";
}

export function Avatar({ showName = false, size = "sm" }: Props): JSX.Element {
  const sz = size === "lg" ? "175em" : "50em";
  return showName ? (
    <div className="flex items-center space-x-2">
      <Image
        src={avatar}
        height={sz}
        width={sz}
        className="rounded-full mr-2"
        alt={Author}
      />
      {showName && <div className="text-base text-gray-700">{Author}</div>}
    </div>
  ) : (
    <Image
      src={avatar}
      height={sz}
      width={sz}
      className="rounded-full mr-2"
      alt={Author}
    />
  );
}

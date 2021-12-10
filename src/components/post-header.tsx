import { format, parseISO } from "date-fns";
import React from "react";

import { Avatar } from "./avatar";
import { Title } from "./title";

interface Props {
  readonly date: string;
  readonly readingTime: string;
  readonly title: string;
}

export function PostHeader({ date, readingTime, title }: Props): JSX.Element {
  return (
    <div className="mb-6">
      <div className="container mx-auto max-w-3xl flex flex-col grow justify-center px-5 overflow-x-hidden">
        <Title>{title}</Title>
        <div className="mt-5 flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:items-center">
          <Avatar showName />
          <div className="text-base text-gray-700">
            {format(parseISO(date), "LLLL d, yyyy")} • {readingTime}
          </div>
        </div>
      </div>
    </div>
  );
}

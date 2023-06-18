import clsx from "clsx";
import dayjs from "dayjs";
import Image, { StaticImageData } from "next/image";
import React from "react";

import { DateOrPresent, duration, format } from "@/lib/dayjs";

export type RoleProps = Readonly<{
  company: string;
  logo: StaticImageData;
  printHidden?: boolean;
  roles: Record<
    number,
    Readonly<{
      desc: Record<number, string>;
      end: DateOrPresent;
      location: string;
      printHidden?: boolean;
      start: dayjs.Dayjs;
      title: string;
    }>
  >;
  showDuration?: boolean;
}>;

export function Role({
  company,
  logo,
  printHidden,
  roles,
  showDuration = false,
}: RoleProps): React.JSX.Element {
  const rs = Object.entries(roles);

  return (
    <div
      className={clsx("flex flex-col gap-y-1", printHidden && "print:hidden")}
    >
      <div className="flex items-center gap-x-2">
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image
            alt={`${company} logo`}
            className="h-7 w-7"
            src={logo}
            unoptimized
          />
        </div>
        <h3 className="m-0">{company}</h3>
      </div>
      <div className="my-6 ml-4 border-l-2 border-zinc-200 dark:border-zinc-700">
        <div className="ml-4">
          {rs.map(([id, role], i) => {
            const ds = Object.entries(role.desc);
            return (
              <div
                className={clsx(
                  i === 0 && "-mt-6",
                  role.printHidden && "print:hidden"
                )}
                key={id}
              >
                <h4>{role.title}</h4>
                <div className="flex justify-between text-sm text-zinc-500 dark:text-zinc-400">
                  <div>{role.location}</div>
                  <div>
                    {format(role.start)} — {format(role.end)}
                    <span className="hidden sm:inline">
                      {showDuration && duration(role.end, role.start)}
                    </span>
                  </div>
                </div>
                {ds.length > 0 && (
                  <ul>
                    {ds.map(([dId, d], j) => (
                      <li
                        className={clsx(
                          i === rs.length - 1 && j === ds.length - 1 && "-mb-6"
                        )}
                        key={dId}
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

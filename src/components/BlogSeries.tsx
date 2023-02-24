import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { usePathname } from "next/navigation";
import React from "react";

type Option = Readonly<{
  name: string;
  path: string;
}>;

type Props = Readonly<{
  options: readonly Option[];
  title: string;
}>;

export function BlogSeries({ options, title }: Props) {
  const path = usePathname();
  const [selected, setSelected] = React.useState<Option>(
    options.find((o) => o.path === path) ?? options[0]
  );

  function optionClass({
    checked,
    active,
  }: Readonly<{ active: boolean; checked: boolean }>): string {
    return clsx(
      checked ? "border-transparent" : "border-zinc-300",
      active ? "border-blue-500 ring-2 ring-blue-500" : "",
      "relative block cursor-pointer rounded-lg border bg-white dark:bg-zinc-800 px-6 py-2 focus:outline-none sm:flex sm:justify-between"
    );
  }

  return (
    <RadioGroup onChange={setSelected} value={selected}>
      <RadioGroup.Label className="text-lg font-semibold">
        {title} Series
      </RadioGroup.Label>
      <div className="flex flex-col space-y-2">
        {options.map((opt, idx) => (
          <Link
            className="text-zinc-600 no-underline hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-200"
            href={opt.path}
            key={opt.path}
          >
            <RadioGroup.Option className={optionClass} value={opt}>
              {({ active, checked }) => (
                <>
                  <div className="flex">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      {idx + 1}
                    </span>
                    <span className="ml-4 flex items-center">
                      <span className="flex flex-col text-sm">
                        <RadioGroup.Label as="span" className="font-medium">
                          {opt.name}
                        </RadioGroup.Label>
                      </span>
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className={clsx(
                      active ? "border" : "border-2",
                      checked ? "border-blue-500" : "border-transparent",
                      "pointer-events-none absolute -inset-px rounded-lg"
                    )}
                  />
                </>
              )}
            </RadioGroup.Option>
          </Link>
        ))}
      </div>
    </RadioGroup>
  );
}

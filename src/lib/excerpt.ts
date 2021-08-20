const PruneLength = 185;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function excerpt(input: any): string {
  const e = `${input.content
    .trim()
    .slice(0, PruneLength * 2)
    .split("\n")
    .join(" ")
    .replace(/\[(.+?)\]\(.+?\)/g, "$1")
    .replace(/(#+\s|-\s)/g, "")
    .replace(/`(.+?)`/g, "$1")
    .replace(/_(.+?)_/g, "$1")
    .replace(/<.+\s\/>/g, "")
    .replace(/<.+?>.*<.+?>/g, "")
    .slice(0, PruneLength)}...`;
  input.excerpt = e;
  return e;
}

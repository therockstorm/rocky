export function cls(...classes: readonly string[]) {
  return classes.filter(Boolean).join(" ");
}

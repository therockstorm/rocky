export function toJsonLdString(i: string): string {
  return JSON.stringify(i).slice(1, -1);
}

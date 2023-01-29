export function required<T>(name: string, val?: T): T | never {
  return val || thrw(`${name} required`);
}

function thrw(error: string): never {
  throw new Error(error);
}

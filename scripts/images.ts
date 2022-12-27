import { PathLike, readdirSync } from "fs";
import { join, resolve } from "path";
import sharp from "sharp";

const IN_PATH = join(__dirname, "..", "input");
const OUT_PATH = join(__dirname, "..", "assets");

async function resizeImages() {
  for await (const f of getFiles(IN_PATH)) {
    try {
      await sharp(f)
        .resize({ width: 1080 })
        .toFormat("jpg", { mozjpeg: true })
        .toFile(f.replace(IN_PATH, OUT_PATH));
    } catch (error) {
      handleError({ error, func: "resizeImage" });
    }
  }
}

async function* getFiles(dir: PathLike): AsyncGenerator<string> {
  const files = readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const res = resolve(dir.toString(), f.name);
    if (f.isDirectory()) yield* getFiles(res);
    else yield res;
  }
}

function handleError({
  error,
  func,
}: Readonly<{ error: unknown; func: string }>) {
  console.error(`${func} error: ${error}`);
}

resizeImages();

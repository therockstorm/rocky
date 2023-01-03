import { PathLike, readdirSync } from "fs";
import { basename, join, resolve } from "path";
import sharp from "sharp";

async function resizeImages() {
  const src = join(__dirname, "..", "src", "images", "photos");
  const dst = join(__dirname);
  for await (const f of getFiles(src)) {
    try {
      await sharp(f)
        .resize({ width: 1080 })
        .toFormat("jpg", { mozjpeg: true })
        .toFile(f.replace(src, dst));
    } catch (error) {
      handleError({ error, func: "resizeImage" });
    }
  }
}

async function convertMdx() {
  const src = join(__dirname, "..", "src", "pages", "notes");

  for await (const f of getFiles(src)) {
    console.log(basename(f));
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

convertMdx();

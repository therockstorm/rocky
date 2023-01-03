import { PathLike, readdirSync } from "fs";
import { join, resolve } from "path";
import sharp from "sharp";

async function resizeImages() {
  const src = join(__dirname, "..", "..");
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

// async function convertMdx() {
//   const src = join(__dirname, "..", "src", "pages", "notes");

//   for await (const f of getFiles(src)) {
//     if (!f.endsWith(".mdx")) continue;

//     const data = readFileSync(f, "utf-8");
//     if (data.startsWith("---")) {
//       const title = /^title: (.+)$/m.exec(data);
//       const date = /^date: "(.+)"$/m.exec(data);

//       writeFileSync(
//         f,
//         `import { ArticleLayout } from "@/components/ArticleLayout";

// export const meta = {
//   author: "Rocky Warren",
//   date: "${date ? date[1] : "2023-01-01"}",
//   title: "${title ? title[1] : "UNDEFINED"}",
//   description: "",
// };

// export default (props) => <ArticleLayout meta={meta} {...props} />;

// ${data}`
//       );
//     }
//   }
// }

// async function findImages() {
//   const outDir = "/Users/rocky/dev/os/tailwindui-spotlight/src/pages/blog";
//   const inDir = join(__dirname, "..", "src", "posts");
//   for await (const f of getFiles(inDir)) {
//     try {
//       // const f = "/Users/rocky/dev/os/rocky/src/posts/day-5.mdx";
//       const matches = readFileSync(f, "utf8").matchAll(
//         /<Figure\s+caption=".*?"\s+id="(.*?)"\s+\/>/gm
//       );

//       for (const m of matches) {
//         const fn = m[1];

//         const outFile = `${fn}.jpg`;
//         const src = `${OUT_PATH}/${outFile}`;
//         const dst = `${outDir}/${basename(f).replace(".mdx", "")}/${outFile}`;
//         copyFileSync(src, dst);
//         console.log(`Moved ${src} to ${dst}\n`);
//       }
//     } catch (error) {
//       handleError({ error, func: "findImages" });
//     }
//   }
// }

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

import Image from "next/image";

type Props = Readonly<
  {
    small?: boolean;
    src: string;
  } & ({ alt: string } | { caption: string })
>;

export function Figure({ small, src, ...rest }: Props): JSX.Element {
  const alt = "alt" in rest ? rest.alt : rest.caption;
  const caption = "caption" in rest ? rest.caption : undefined;

  return (
    <div className={small ? "flex justify-center" : ""}>
      <figure className={small ? "max-w-xs" : ""}>
        <Image alt={alt} src={src} placeholder="blur" />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </div>
  );
}

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

type Props = Readonly<{
  children?: React.ReactNode;
  download?: boolean;
  intro?: string;
  title: string;
}>;

export function SimpleLayout({
  children,
  download = false,
  intro,
  title,
}: Props) {
  function handleClick() {
    window.print();
  }

  return (
    <Container className="mt-16 sm:mt-32 print:mt-8">
      <header className="max-w-5xl">
        <div className="flex">
          <h1 className="flex-grow text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {title}
          </h1>
          {download && (
            <Button className="self-center print:hidden" onClick={handleClick}>
              Download PDF
            </Button>
          )}
        </div>
        {intro && (
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-300">
            {intro}
          </p>
        )}
      </header>
      <div className="mt-16 sm:mt-20 print:mt-8">{children}</div>
    </Container>
  );
}

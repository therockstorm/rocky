import { Container } from "@/components/Container";

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32 print:mt-8">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {intro}
          </p>
        )}
      </header>
      <div className="mt-16 sm:mt-20 print:mt-8">{children}</div>
    </Container>
  );
}

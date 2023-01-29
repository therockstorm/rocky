import { faEnvelope } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Button } from "@/components/Button";

type Props = Readonly<{
  className?: string;
  subtitle?: string;
  title?: string;
}>;

export function Newsletter({
  className,
  title = "Stay up to date",
  subtitle = "Get notified when I publish. Unsubscribe at any time.",
}: Props) {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const res = await fetch("/api/subscriptions", {
      body: JSON.stringify({ email }),
      method: "POST",
    });
    if (res.status === 200) setSubscribed(true);
    else console.error(res.status, await res.json());
  }

  return (
    <form
      className={`rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 ${
        className ?? ""
      }`}
      onSubmit={handleSubmit}
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <FontAwesomeIcon className="h-6 w-6 flex-none" icon={faEnvelope} />
        <span className="ml-3">{title}</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        {subtitle}
      </p>
      {subscribed && (
        <p className="mt-2 text-sm text-green-700 dark:text-green-500">
          Thanks for subscribing!
        </p>
      )}
      <div className="mt-6 flex">
        <input
          aria-label="Email address"
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/10 sm:text-sm"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          required
          type="email"
          value={email}
        />
        <Button className="ml-4 flex-none" type="submit">
          Join
        </Button>
      </div>
    </form>
  );
}

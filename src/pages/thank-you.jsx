import Head from "next/head";
import { usePathname } from "next/navigation";
import { NextSeo } from "next-seo";

import { SimpleLayout } from "@/components/SimpleLayout";
import { SITE_URL } from "@/lib/seo";

export default function ThankYou() {
  const path = usePathname();

  const description = "Thanks for subscribing to my newsletter.";
  const title = "You're subscribed - Rocky Warren";
  const url = `${SITE_URL}${path}`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NextSeo
        canonical={url}
        description={description}
        openGraph={{ description, title, url }}
        title={title}
      />
      <SimpleLayout
        title="Thanks for subscribing."
        intro="I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
      />
    </>
  );
}

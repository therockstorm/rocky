import Head from "next/head";
import { usePathname } from "next/navigation";
import { NextSeo } from "next-seo";

import { SimpleLayout } from "@/components/SimpleLayout";
import { AUTHOR, SITE_URL } from "@/lib/seo";

export default function ThankYou() {
  const path = usePathname();

  const description = "Thanks for subscribing.";
  const title = `You're subscribed - ${AUTHOR}}`;
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
        intro="I'll send you an email when I publish or have something interesting to share. Unsubscribe at any time, no hard feelings."
        title={description}
      />
    </>
  );
}

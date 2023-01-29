import Head from "next/head";
import { usePathname } from "next/navigation";
import { NextSeo } from "next-seo";

import { ExternalLink } from "@/components/ExternalLink";
import { Prose } from "@/components/Prose";
import { SimpleLayout } from "@/components/SimpleLayout";
import { AUTHOR, SITE_URL } from "@/lib/seo";

export default function Privacy() {
  const path = usePathname();

  const description = `${AUTHOR}'s privacy policy and terms of service.`;
  const title = "Privacy and Terms";
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
      <SimpleLayout title={title}>
        <Prose>
          <h2>Privacy policy</h2>
          <p>
            ConvertKit stores your email address if you provide it. I use{" "}
            <ExternalLink href="https://plausible.io/privacy-focused-web-analytics">
              Plausible
            </ExternalLink>{" "}
            for privacy-focused website usage. I don
            {"'"}t track anything else. Privacy is important.
          </p>
          <h2>Terms of service</h2>
          <p>
            Everything on rocky.dev is provided free of charge. There is no
            promise this will continue. I{"'"}ll do my best to keep things going
            and preserve your data, but that{"'"}s a plan, not a guarantee.
          </p>
        </Prose>
      </SimpleLayout>
    </>
  );
}

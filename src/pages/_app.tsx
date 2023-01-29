import "@/styles/tailwind.css";

import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE_TITLE, SITE_URL } from "@/lib/seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          images: [{ alt: SITE_TITLE, url: `${SITE_URL}/api/og` }],
          locale: "en_US",
          siteName: SITE_TITLE,
          type: "website",
          url: SITE_URL,
        }}
        twitter={{ cardType: "summary_large_image" }}
      />
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 print:hidden" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

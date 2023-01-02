import Head from "next/head";
import { usePathname } from "next/navigation";
import { NextSeo } from "next-seo";

import { Prose } from "@/components/Prose";
import { Certifications } from "@/components/resume/Certifications";
import { Education } from "@/components/resume/Education";
import { Experience } from "@/components/resume/Experience";
import { Featured } from "@/components/resume/Featured";
import { Header } from "@/components/resume/Header";
import { Recommendations } from "@/components/resume/Recommendations";
import { Skills } from "@/components/resume/Skills";
import { SimpleLayout } from "@/components/SimpleLayout";
import { SITE_URL } from "@/lib/seo";

export default function Resume() {
  const path = usePathname();

  const description = "Rocky Warren's Resume.";
  const title = "Resume - Rocky Warren";
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
      <SimpleLayout title="Rocky Warren" intro="">
        <Prose className="mt-8">
          <main className="print:my-8">
            <Header />
            <Skills />
            <Recommendations />
            <Experience />
            <Education />
            <Featured />
            <Certifications />
          </main>
        </Prose>
      </SimpleLayout>
    </>
  );
}

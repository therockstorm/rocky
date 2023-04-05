import Head from "next/head";
import { usePathname } from "next/navigation";
import { NextSeo } from "next-seo";

import { Prose } from "@/components/Prose";
import { Certifications } from "@/components/resume/Certifications";
import { Education } from "@/components/resume/Education";
import { Experience } from "@/components/resume/Experience";
import { Recommendations } from "@/components/resume/Recommendations";
import { Skills } from "@/components/resume/Skills";
import { Summary } from "@/components/resume/Summary";
import { SimpleLayout } from "@/components/SimpleLayout";
import { AUTHOR, SITE_URL } from "@/lib/seo";

export default function Resume() {
  const path = usePathname();

  const description = `${AUTHOR}'s Resume.`;
  const title = `Resume - ${AUTHOR}`;
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
      <SimpleLayout download title={AUTHOR}>
        <Prose className="prose-sm">
          <main>
            <Summary />
            <Skills />
            <Recommendations />
            <Certifications />
            <Experience />
            <Education />
          </main>
        </Prose>
      </SimpleLayout>
    </>
  );
}

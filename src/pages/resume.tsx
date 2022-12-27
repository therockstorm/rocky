import { NextSeo } from "next-seo";

import { Container } from "../components/container";
import { Layout } from "../components/layout";
import { Navigation } from "../components/navigation";
import { Certifications } from "../components/resume/certifications";
import { Education } from "../components/resume/education";
import { Experience } from "../components/resume/experience";
import { Featured } from "../components/resume/featured";
import { Header } from "../components/resume/header";
import { Recommendations } from "../components/resume/recommendations";
import { Skills } from "../components/resume/skills";
import { Author, SiteDescription, SiteTitle, SiteUrl } from "../lib/constants";

function Resume(): JSX.Element {
  const url = `${SiteUrl}/resume`;
  const title = `Resume - ${Author}`;

  return (
    <Layout>
      <NextSeo
        title={title}
        description={SiteDescription}
        canonical={url}
        openGraph={{
          description: SiteDescription,
          url,
          siteName: SiteTitle,
          title,
        }}
      />
      <Navigation />
      <Container>
        <main className="prose lg:prose-lg prose-blue resume print:my-8">
          <Header />
          <Skills />
          <Recommendations />
          <Experience />
          <Education />
          <Featured />
          <Certifications />
        </main>
      </Container>
    </Layout>
  );
}

export default Resume;

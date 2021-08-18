import { NextSeo } from "next-seo";

import { Container } from "../components/container";
import { Layout } from "../components/layout";
import { Navigation } from "../components/navigation";
import { Certifications } from "../components/resume/Certifications";
import { Education } from "../components/resume/Education";
import { Experience } from "../components/resume/Experience";
import { Featured } from "../components/resume/Featured";
import { Header } from "../components/resume/Header";
import { Recommendations } from "../components/resume/Recommendations";
import { Skills } from "../components/resume/Skills";
import { SiteDescription, SiteTitle, SiteUrl } from ".";

function Resume(): JSX.Element {
  return (
    <Layout>
      <NextSeo
        title="Rocky Warren Resume"
        description={SiteDescription}
        canonical={SiteUrl}
        openGraph={{
          url: SiteUrl,
          title: SiteTitle,
          description: SiteDescription,
          site_name: SiteTitle,
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

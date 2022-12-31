export const Author = "Rocky Warren";
export const SiteTitle = `sudo README - ${Author}`;
export const SiteDescription = `${Author}'s site. Founding Principal Engineer at Brale. Previously at Vertex Software, Dwolla, and John Deere.`;
const isPublic = !process.env.NEXT_PUBLIC_SITE_URL?.includes("localhost");
export const SiteUrl = `http${isPublic ? "s" : ""}://${
  process.env.NEXT_PUBLIC_SITE_URL
}`;
export const PublicSiteUrl = `https://www.rocky.dev`;
export const BlogTitle = "sudo README";
export const BlogDescription = "My personal blog.";
export const SocialMedia = {
  LinkedIn: "https://www.linkedin.com/in/rockywarren",
  Github: "https://github.com/therockstorm",
};
export const OpenGraph = {
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SiteUrl,
    siteName: SiteTitle,
  },
};

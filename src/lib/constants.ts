export const Author = "Rocky Warren";
export const SiteTitle = "Rocky Warren | sudo README";
export const SiteDescription =
  "Rocky Warren's site. Principal Architect, Tech Lead, and Product Manager at Vertex Software. Previously at Dwolla and John Deere.";
export const SiteUrl = `${process.env.NEXT_PUBLIC_SITE_URL}`;
export const BlogTitle = "sudo README";
export const BlogDescription = "My personal blog.";
export const SocialMedia = {
  Twitter: "https://twitter.com/therockstorm",
  Instagram: "https://www.instagram.com/therockstorm/",
  LinkedIn: "https://www.linkedin.com/in/rockywarren",
  Github: "https://github.com/therockstorm",
};
export const OpenGraph = {
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SiteUrl,
    site_name: Author,
  },
  twitter: { handle: "@therockstorm", cardType: "summary_large_image" },
};
export const PostsSearchIndex = "PostsV2";
export const NotesSearchIndex = "NotesV2";

import rehypePrism from "@mapbox/rehype-prism";
import nextMDX from "@next/mdx";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

/** @type {import('next').NextConfig} */
const nextConfig = {
  headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Methods",
            value: "POST, GET",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Permissions-Policy",
            value: "fullscreen=()",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'report-sample' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'report-sample' 'unsafe-inline'; img-src 'self' data: i.ytimg.com; child-src www.youtube.com; frame-ancestors 'none'; object-src 'none'; base-uri 'none'; upgrade-insecure-requests;",
          },
        ],
      },
    ];
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  experimental: { scrollRestoration: true },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatex, rehypePrism],
  },
});

export default withMDX(nextConfig);

import { remarkCodeHike } from "@code-hike/mdx";
import nextMDX from "@next/mdx";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import theme from "shiki/themes/light-plus.json" assert { type: "json" };

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { scrollRestoration: true },
  headers() {
    return [
      {
        headers: [
          {
            key: "Access-Control-Allow-Methods",
            value: "POST, GET",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://www.rocky.dev",
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
        source: "/(.*)",
      },
      {
        headers: [
          {
            key: "Access-Control-Allow-Methods",
            value: "GET",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://www.privacyprotect.dev",
          },
        ],
        source: "/api/og/pp(.*)",
      },
    ];
  },
  pageExtensions: ["mdx", "ts", "tsx"],
  reactStrictMode: true,
  redirects() {
    return [
      {
        destination: "/blog/a-primer-on-multi-party-computation",
        permanent: false,
        source: "/a-primer-on-multi-party-computation",
      },
      {
        destination: "/blog/android-development-casino-strategy-v1",
        permanent: false,
        source: "/android-development-casino-strategy-v1",
      },
      {
        destination: "/blog/android-development-casino-strategy-v2",
        permanent: false,
        source: "/android-development-casino-strategy-v2",
      },
      {
        destination: "/blog/command-line-mercurial",
        permanent: false,
        source: "/command-line-mercurial",
      },
      {
        destination: "/blog/connecting-to-rds-databases-in-private-subnets",
        permanent: false,
        source: "/connecting-to-rds-databases-in-private-subnets",
      },
      { destination: "/blog/day-1", permanent: false, source: "/day-1" },
      { destination: "/blog/day-10", permanent: false, source: "/day-10" },
      { destination: "/blog/day-11", permanent: false, source: "/day-11" },
      { destination: "/blog/day-12", permanent: false, source: "/day-12" },
      { destination: "/blog/day-13", permanent: false, source: "/day-13" },
      { destination: "/blog/day-14", permanent: false, source: "/day-14" },
      { destination: "/blog/day-15", permanent: false, source: "/day-15" },
      { destination: "/blog/day-17", permanent: false, source: "/day-17" },
      { destination: "/blog/day-2", permanent: false, source: "/day-2" },
      { destination: "/blog/day-3", permanent: false, source: "/day-3" },
      { destination: "/blog/day-4", permanent: false, source: "/day-4" },
      { destination: "/blog/day-5", permanent: false, source: "/day-5" },
      { destination: "/blog/day-6", permanent: false, source: "/day-6" },
      { destination: "/blog/day-8", permanent: false, source: "/day-8" },
      { destination: "/blog/day-9", permanent: false, source: "/day-9" },
      {
        destination: "/blog/death-to-standups",
        permanent: false,
        source: "/death-to-standups",
      },
      {
        destination: "/blog/deep-work",
        permanent: false,
        source: "/deep-work",
      },
      {
        destination: "/blog/diving-into-android-development",
        permanent: false,
        source: "/diving-into-android-development",
      },
      {
        destination: "/blog/farewell-to-john-deere",
        permanent: false,
        source: "/farewell-to-john-deere",
      },
      {
        destination: "/blog/fresh-hot-100",
        permanent: false,
        source: "/fresh-hot-100",
      },
      {
        destination: "/blog/full-text-search",
        permanent: false,
        source: "/full-text-search",
      },
      {
        destination: "/blog/git-fundamentals",
        permanent: false,
        source: "/git-fundamentals",
      },
      {
        destination: "/blog/go-learning-resources",
        permanent: false,
        source: "/go-learning-resources",
      },
      {
        destination: "/blog/hashing-vs-encryption",
        permanent: false,
        source: "/hashing-vs-encryption",
      },
      {
        destination: "/blog/kotlin-first-impressions",
        permanent: false,
        source: "/kotlin-first-impressions",
      },
      {
        destination:
          "/blog/lessons-learned-from-sending-millions-of-serverless-webhooks",
        permanent: false,
        source: "/lessons-learned-from-sending-millions-of-serverless-webhooks",
      },
      {
        destination: "/blog/linux-bash-aliases",
        permanent: false,
        source: "/linux-bash-aliases",
      },
      {
        destination: "/blog/motorcycling-across-america",
        permanent: false,
        source: "/motorcycling-across-america",
      },
      {
        destination: "/blog/my-tentative-route-across-the-country",
        permanent: false,
        source: "/my-tentative-route-across-the-country",
      },
      {
        destination: "/blog/openapi-spec-first-api-development",
        permanent: false,
        source: "/openapi-spec-first-api-development",
      },
      {
        destination: "/blog/prime-factors-clojure",
        permanent: false,
        source: "/prime-factors-clojure",
      },
      {
        destination: "/blog/prime-factors-scala",
        permanent: false,
        source: "/prime-factors-scala",
      },
      {
        destination: "/blog/running-linux-gui-apps-in-docker-on-mac",
        permanent: false,
        source: "/running-linux-gui-apps-in-docker-on-mac",
      },
      {
        destination: "/blog/rust-first-impressions",
        permanent: false,
        source: "/rust-first-impressions",
      },
      {
        destination:
          "/blog/save-hours-and-make-life-easier-with-these-free-apps",
        permanent: false,
        source: "/save-hours-and-make-life-easier-with-these-free-apps",
      },
      {
        destination: "/blog/scala-best-practices",
        permanent: false,
        source: "/scala-best-practices",
      },
      {
        destination: "/blog/scala-learning-resources",
        permanent: false,
        source: "/scala-learning-resources",
      },
      {
        destination: "/blog/scala-the-good-parts",
        permanent: false,
        source: "/scala-the-good-parts",
      },
      {
        destination: "/blog/serverless-webhooks-dsmjs-talk",
        permanent: false,
        source: "/serverless-webhooks-dsmjs-talk",
      },
      {
        destination: "/blog/setting-linux-system-time-date-and-time-zone",
        permanent: false,
        source: "/setting-linux-system-time-date-and-time-zone",
      },
      {
        destination: "/blog/solid-principles-to-code-by",
        permanent: false,
        source: "/solid-principles-to-code-by",
      },
      {
        destination:
          "/blog/start-local-services-fast-in-zero-lines-of-code-with-docker-compose",
        permanent: false,
        source:
          "/start-local-services-fast-in-zero-lines-of-code-with-docker-compose",
      },
      {
        destination: "/blog/test-before-test-after",
        permanent: false,
        source: "/test-before-test-after",
      },
      {
        destination: "/blog/the-test-ride",
        permanent: false,
        source: "/the-test-ride",
      },
      {
        destination: "/blog/use-a-script-to-call-it-a-day",
        permanent: false,
        source: "/use-a-script-to-call-it-a-day",
      },
      {
        destination: "/blog/when-intellij-loses-its-mind-run-this",
        permanent: false,
        source: "/when-intellij-loses-its-mind-run-this",
      },
      {
        destination: "/blog/why-i-quit-drinking",
        permanent: false,
        source: "/why-i-quit-drinking",
      },
    ];
  },
  rewrites() {
    return [
      {
        destination: "https://plausible.io/js/script.outbound-links.js",
        source: "/js/script.js",
      },
      {
        destination: "https://plausible.io/api/event",
        source: "/api/event",
      },
    ];
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [
      [remarkCodeHike, { showCopyButton: true, theme }],
      remarkGfm,
      remarkMath,
    ],
  },
});

export default withMDX(nextConfig);

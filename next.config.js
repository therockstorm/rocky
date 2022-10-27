module.exports = {
  headers() {
    return [
      {
        source: "/(.*)",
        headers: [
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
              "default-src 'self' https://cdn.jsdelivr.net; script-src 'self' 'report-sample' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'report-sample' 'unsafe-inline' https://cdn.jsdelivr.net; img-src 'self' data: i.ytimg.com; child-src www.youtube.com; connect-src 'self' *.algolia.net; frame-ancestors 'none'; object-src 'none'; base-uri 'none'; upgrade-insecure-requests;",
          },
        ],
      },
    ];
  },
};

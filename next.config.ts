import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// In development, React + Turbopack use eval() for HMR and debugging, so the
// dev CSP must allow 'unsafe-eval'. Production never uses eval(), so it stays
// out of the shipped policy.
const scriptSrc = isDev
  ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
  : "script-src 'self' 'unsafe-inline'";

// Security headers applied to every route. Kept conservative so nothing in the
// app (self-hosted fonts, inline styles from next/font + Tailwind) breaks.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next injects small inline runtime scripts; 'unsafe-inline' is needed
      // for those and for next/font's inline styles.
      scriptSrc,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self' data:",
      // Dev needs websocket/HTTP back to the dev server for HMR.
      isDev ? "connect-src 'self' ws: wss:" : "connect-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "object-src 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Turbopack doesn't infer a parent
  // directory (a lockfile exists higher up in the user's home folder).
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

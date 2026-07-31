import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";
import { ALL_MERGED_SLUGS } from "./lib/roleRedirects";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: 'alexander-kropivnitski.vercel.app' },
      { protocol: 'https', hostname: 'alexanderkropivnitski.com' },
      { protocol: 'https', hostname: '*.public.blob.vercel-storage.com' },
      { protocol: 'https', hostname: '*.imgix.net' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
    ],
  },
  async redirects() {
    return Object.entries(ALL_MERGED_SLUGS).map(([source, target]) => ({
      source: `/${source}`,
      destination: `/${target}`,
      permanent: true,
    }));
  },
  async headers() {
    // Deliberately not adding Content-Security-Policy here: the site loads
    // Cloudflare Turnstile (external script + iframe, used by the contact
    // form) and Google Tag Manager, which can inject arbitrary third-party
    // tag domains configured in the GTM container itself, invisible to this
    // codebase. A CSP built without full visibility into GTM's configured
    // tags risks silently breaking the contact form or analytics with no
    // way to catch it short of a real GTM audit — do that first, then add
    // CSP as its own careful change.
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default withPayload(nextConfig);

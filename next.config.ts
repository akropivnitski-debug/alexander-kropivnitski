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
};

export default withPayload(nextConfig);

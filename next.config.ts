import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Payload CMS media uploads (local dev)
      { protocol: 'http', hostname: 'localhost' },
      // Payload CMS media uploads (production)
      { protocol: 'https', hostname: 'alexander-kropivnitski.vercel.app' },
    ],
  },
};

export default withPayload(nextConfig);

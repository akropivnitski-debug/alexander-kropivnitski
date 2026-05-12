import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Payload CMS media uploads (local dev)
      { protocol: 'http', hostname: 'localhost' },
      // Add production domain here after Vercel deployment
    ],
  },
};

export default withPayload(nextConfig);

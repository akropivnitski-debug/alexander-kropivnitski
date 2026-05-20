import type { Metadata } from "next";
import { getPayload } from 'payload'
import config from '@payload-config'
import { FontLoader } from '@/components/FontLoader'
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: 'Alexander Kropivnitski',
    template: '%s | Alexander Kropivnitski',
  },
};

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const payload = await getPayload({ config })
  const siteSettings = await payload.findGlobal({ slug: 'site-settings' })

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <FontLoader settings={siteSettings} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}

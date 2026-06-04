import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { getPayload } from 'payload'
import config from '@payload-config'
import { FontLoader } from '@/components/FontLoader'
import "../globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

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

  const headingFont = siteSettings.headingFontGoogle || 'Inter'
  const bodyFont = siteSettings.bodyFontGoogle || 'Inter'
  const isDefaultFont = headingFont === 'Inter' && bodyFont === 'Inter'

  return (
    <html lang="en" className={`h-full antialiased ${inter.variable}`}>
      <head>
        {!isDefaultFont && <FontLoader settings={siteSettings} />}
      </head>
      <body className="min-h-full flex flex-col" style={{ fontFamily: isDefaultFont ? 'var(--font-inter), ui-sans-serif, system-ui, sans-serif' : undefined }}>
        {children}
      </body>
    </html>
  );
}

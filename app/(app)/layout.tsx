import type { Metadata } from "next";
import { Inter, Outfit } from 'next/font/google'
import { getPayload } from 'payload'
import config from '@payload-config'
import { FontLoader } from '@/components/FontLoader'
import { FormPopupProvider } from '@/components/FormPopupProvider'
import { generatePersonSchema } from '@/lib/generateSchema'
import "../globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

/** Fonts statically imported via next/font — self-hosted, no render-blocking requests */
const STATIC_FONTS: Record<string, { variable: string; className: string }> = {
  Inter: { variable: inter.variable, className: inter.className },
  Outfit: { variable: outfit.variable, className: outfit.className },
}

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

  const headingStatic = STATIC_FONTS[headingFont]
  const bodyStatic = STATIC_FONTS[bodyFont]
  const allStatic = !!headingStatic && !!bodyStatic

  const fontVars = [
    headingStatic?.variable,
    bodyStatic?.variable,
  ].filter(Boolean).join(' ')

  return (
    <html lang="en" className={`h-full antialiased ${fontVars}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generatePersonSchema()) }}
        />
        {!allStatic && <FontLoader settings={siteSettings} staticFonts={STATIC_FONTS} />}
        {allStatic && (
          <style dangerouslySetInnerHTML={{ __html: `
            :root {
              --font-heading: var(--font-${headingFont.toLowerCase()}), ui-sans-serif, system-ui, sans-serif;
              --font-body: var(--font-${bodyFont.toLowerCase()}), ui-sans-serif, system-ui, sans-serif;
            }
            body { font-family: var(--font-body); }
            h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }
          `}} />
        )}
      </head>
      <body className="min-h-full flex flex-col">
        <FormPopupProvider>
          {children}
        </FormPopupProvider>
      </body>
    </html>
  );
}

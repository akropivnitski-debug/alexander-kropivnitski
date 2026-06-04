import type { SiteSetting } from '@/payload-types'

function resolveUrl(field: SiteSetting['headingFontFile']): string | null {
  if (!field) return null
  if (typeof field === 'number') return null
  return field.url || null
}

function googleFontUrl(family: string, weight: string): string {
  const encoded = family.replace(/\s+/g, '+')
  const w = weight.includes('..') ? `wght@${weight}` : `wght@${weight}`
  return `https://fonts.googleapis.com/css2?family=${encoded}:${w}&display=swap`
}

export function FontLoader({
  settings,
  staticFonts = {},
}: {
  settings: SiteSetting
  staticFonts?: Record<string, { variable: string; className: string }>
}) {
  const headingSource = settings.headingFontSource || 'google'
  const bodySource = settings.bodyFontSource || 'google'

  const headingGoogle = settings.headingFontGoogle || 'Inter'
  const bodyGoogle = settings.bodyFontGoogle || 'Inter'
  const headingWeight = settings.headingFontWeight || '700'
  const bodyWeight = settings.bodyFontWeight || '400'

  const headingCustomUrl = resolveUrl(settings.headingFontFile)
  const bodyCustomUrl = resolveUrl(settings.bodyFontFile)

  // Only fetch Google Fonts that aren't already statically imported via next/font
  const googleLinks: string[] = []
  if (headingSource === 'google' && !staticFonts[headingGoogle]) {
    googleLinks.push(googleFontUrl(headingGoogle, headingWeight))
  }
  if (bodySource === 'google' && !staticFonts[bodyGoogle]) {
    googleLinks.push(googleFontUrl(bodyGoogle, bodyWeight))
  }

  const headingFamily =
    headingSource === 'custom' && headingCustomUrl
      ? 'CustomHeading'
      : staticFonts[headingGoogle]
        ? `var(--font-${headingGoogle.toLowerCase()})`
        : headingGoogle
  const bodyFamily =
    bodySource === 'custom' && bodyCustomUrl
      ? 'CustomBody'
      : staticFonts[bodyGoogle]
        ? `var(--font-${bodyGoogle.toLowerCase()})`
        : bodyGoogle

  const fontFaces: string[] = []
  if (headingSource === 'custom' && headingCustomUrl) {
    fontFaces.push(`
      @font-face {
        font-family: 'CustomHeading';
        src: url('${headingCustomUrl}') format('woff2');
        font-weight: ${headingWeight};
        font-style: normal;
        font-display: swap;
      }
    `)
  }
  if (bodySource === 'custom' && bodyCustomUrl) {
    fontFaces.push(`
      @font-face {
        font-family: 'CustomBody';
        src: url('${bodyCustomUrl}') format('woff2');
        font-weight: ${bodyWeight};
        font-style: normal;
        font-display: swap;
      }
    `)
  }

  const needsQuotes = (f: string) => !f.startsWith('var(')
  const hf = needsQuotes(headingFamily) ? `'${headingFamily}'` : headingFamily
  const bf = needsQuotes(bodyFamily) ? `'${bodyFamily}'` : bodyFamily

  const cssVars = `
    ${fontFaces.join('\n')}
    :root {
      --font-heading: ${hf}, ui-sans-serif, system-ui, sans-serif;
      --font-body: ${bf}, ui-sans-serif, system-ui, sans-serif;
    }
    body {
      font-family: var(--font-body);
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: var(--font-heading);
    }
  `

  return (
    <>
      {/* Preconnect to Google Fonts for any non-static fonts */}
      {googleLinks.length > 0 && (
        <>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </>
      )}
      {/* Non-render-blocking font loading via media swap trick */}
      {googleLinks.map((href) => (
        <link
          key={href}
          rel="stylesheet"
          href={href}
          media="print"
          // @ts-expect-error — onLoad is valid on <link> in HTML but React types it poorly
          onLoad="this.media='all'"
        />
      ))}
      <style dangerouslySetInnerHTML={{ __html: cssVars }} />
    </>
  )
}

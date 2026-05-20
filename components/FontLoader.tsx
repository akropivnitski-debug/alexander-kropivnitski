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

export function FontLoader({ settings }: { settings: SiteSetting }) {
  const headingSource = settings.headingFontSource || 'google'
  const bodySource = settings.bodyFontSource || 'google'

  const headingGoogle = settings.headingFontGoogle || 'Inter'
  const bodyGoogle = settings.bodyFontGoogle || 'Inter'
  const headingWeight = settings.headingFontWeight || '700'
  const bodyWeight = settings.bodyFontWeight || '400'

  const headingCustomUrl = resolveUrl(settings.headingFontFile)
  const bodyCustomUrl = resolveUrl(settings.bodyFontFile)

  const googleLinks: string[] = []
  if (headingSource === 'google') googleLinks.push(googleFontUrl(headingGoogle, headingWeight))
  if (bodySource === 'google') googleLinks.push(googleFontUrl(bodyGoogle, bodyWeight))

  const headingFamily = headingSource === 'custom' && headingCustomUrl ? 'CustomHeading' : headingGoogle
  const bodyFamily = bodySource === 'custom' && bodyCustomUrl ? 'CustomBody' : bodyGoogle

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

  const cssVars = `
    ${fontFaces.join('\n')}
    :root {
      --font-heading: '${headingFamily}', ui-sans-serif, system-ui, sans-serif;
      --font-body: '${bodyFamily}', ui-sans-serif, system-ui, sans-serif;
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
      {googleLinks.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <style dangerouslySetInnerHTML={{ __html: cssVars }} />
    </>
  )
}

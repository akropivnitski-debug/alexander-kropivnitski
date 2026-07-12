const SITE_NAME = 'Alexander Kropivnitski'

/**
 * The root layout's metadata template ("%s | Alexander Kropivnitski") appends the
 * site name to every page title. Strip it here if it's already present in the
 * CMS-stored title so it isn't duplicated.
 */
export function normalizeTitle(title: string, siteName: string = SITE_NAME): string {
  const suffix = new RegExp(`\\s*\\|\\s*${siteName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`, 'i')
  return title.replace(suffix, '').trim() || siteName
}

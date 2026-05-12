export interface ImageFieldValue {
  source?: 'upload' | 'url' | null
  upload?: { url?: string | null } | number | null
  url?: string | null
}

/**
 * Resolves an imageField group value to a plain URL string.
 * Returns null if the field is empty or incomplete.
 */
export function resolveImage(field?: ImageFieldValue | null): string | null {
  if (!field) return null
  if (field.source === 'upload') {
    if (typeof field.upload === 'object' && field.upload !== null) {
      return (field.upload as { url?: string | null }).url ?? null
    }
    return null
  }
  if (field.source === 'url') {
    return field.url ?? null
  }
  return field.url ?? null
}

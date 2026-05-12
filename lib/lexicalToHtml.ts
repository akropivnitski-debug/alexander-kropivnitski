import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'
import type { SerializedEditorState } from 'lexical'

/**
 * Converts a Payload richText (Lexical) field value to an HTML string.
 * Returns empty string if data is null/undefined/invalid.
 */
export function lexicalToHtml(data: unknown): string {
  if (!data || typeof data !== 'object') return ''
  try {
    return convertLexicalToHTML({
      data: data as SerializedEditorState,
      disableContainer: true,
    })
  } catch {
    return ''
  }
}

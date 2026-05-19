/**
 * Patches Payload's SVG validation to allow all SVG uploads.
 * Runs as a postinstall script.
 */
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const filePath = resolve('node_modules/payload/dist/uploads/validateSvg.js')

try {
  const content = readFileSync(filePath, 'utf8')

  if (content.includes('return true; // patched: allow all SVGs')) {
    console.log('[patch-svg] Already patched, skipping.')
    process.exit(0)
  }

  const patched = content.replace(
    /export function validateSvg\(buffer\) \{/,
    'export function validateSvg(buffer) { return true; // patched: allow all SVGs'
  )

  if (patched === content) {
    console.log('[patch-svg] Could not find validateSvg function to patch.')
    process.exit(0)
  }

  writeFileSync(filePath, patched, 'utf8')
  console.log('[patch-svg] SVG validation patched successfully.')
} catch (err) {
  console.error('[patch-svg] Failed:', err.message)
  process.exit(0)
}

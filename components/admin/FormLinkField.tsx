'use client'
import React, { useState } from 'react'
import { useFormFields } from '@payloadcms/ui'

export const FormLinkField: React.FC = () => {
  const slug = useFormFields(([fields]) => fields.slug?.value as string | undefined)
  const [copied, setCopied] = useState(false)

  if (!slug) return null

  const link = `#form:${slug}`

  const handleCopy = () => {
    navigator.clipboard.writeText(link)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{ display: 'block', marginBottom: 6, fontSize: 13, fontWeight: 500 }}>
        Button Link (copy this)
      </label>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <code
          style={{
            flex: 1,
            padding: '8px 12px',
            backgroundColor: 'var(--theme-elevation-100)',
            border: '1px solid var(--theme-elevation-150)',
            borderRadius: 4,
            fontSize: 14,
            fontFamily: 'monospace',
            userSelect: 'all',
          }}
        >
          {link}
        </code>
        <button
          type="button"
          onClick={handleCopy}
          style={{
            padding: '8px 16px',
            backgroundColor: copied ? 'var(--theme-success-500)' : 'var(--theme-elevation-150)',
            color: copied ? 'white' : 'var(--theme-text)',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 500,
            transition: 'background-color 0.2s',
          }}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <p style={{ marginTop: 6, fontSize: 12, color: 'var(--theme-elevation-400)' }}>
        Paste this into any button&apos;s link field to open this form as a popup.
      </p>
    </div>
  )
}

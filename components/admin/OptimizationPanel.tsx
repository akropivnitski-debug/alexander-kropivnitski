'use client'
import React, { useState, useMemo } from 'react'
import { useField } from '@payloadcms/ui'
import { Link, Unlink } from 'lucide-react'

const FORMAT_OPTIONS = [
  { label: 'Auto (keep original)', value: 'auto' },
  { label: 'WebP', value: 'webp' },
  { label: 'AVIF', value: 'avif' },
  { label: 'JPEG', value: 'jpeg' },
  { label: 'PNG', value: 'png' },
]

function formatBytes(bytes: number): string {
  if (!bytes || bytes <= 0) return '\u2014'
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

function mimeToFormat(mime: string): string {
  if (mime?.includes('png')) return 'png'
  if (mime?.includes('webp')) return 'webp'
  if (mime?.includes('avif')) return 'avif'
  return 'jpeg'
}

function estimateOutputSize(
  origW: number,
  origH: number,
  origSize: number,
  origMime: string,
  format: string,
  quality: number,
  maxW?: number,
  maxH?: number,
): { width: number; height: number; size: number } {
  if (!origW || !origH || !origSize) return { width: 0, height: 0, size: 0 }

  const ratio = origW / origH
  let outW = origW
  let outH = origH

  if (maxW && maxH) {
    if (maxW / maxH > ratio) {
      outH = Math.min(maxH, origH)
      outW = Math.round(outH * ratio)
    } else {
      outW = Math.min(maxW, origW)
      outH = Math.round(outW / ratio)
    }
  } else if (maxW) {
    outW = Math.min(maxW, origW)
    outH = Math.round(outW / ratio)
  } else if (maxH) {
    outH = Math.min(maxH, origH)
    outW = Math.round(outH * ratio)
  }

  const pixelRatio = (outW * outH) / (origW * origH)

  const fmt = format === 'auto' ? mimeToFormat(origMime) : format
  const bpp: Record<string, number> = { png: 1.0, jpeg: 0.15, webp: 0.08, avif: 0.05 }
  const origFmt = mimeToFormat(origMime)
  const origFactor = bpp[origFmt] || 0.15
  const newFactor = bpp[fmt] || 0.15

  const formatRatio = newFactor / origFactor
  const qualityRatio = quality / 80
  const estimated = origSize * pixelRatio * formatRatio * Math.max(0.3, qualityRatio)

  return { width: outW, height: outH, size: Math.round(Math.max(estimated, 100)) }
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '6px 8px',
  borderRadius: 4,
  border: '1px solid var(--theme-elevation-150)',
  background: 'var(--theme-input-bg)',
  color: 'inherit',
  fontSize: 13,
}

export const OptimizationPanel: React.FC = () => {
  const widthField = useField<number>({ path: 'width' })
  const heightField = useField<number>({ path: 'height' })
  const filesizeField = useField<number>({ path: 'filesize' })
  const mimeField = useField<string>({ path: 'mimeType' })

  const formatField = useField<string>({ path: 'optimizeFormat' })
  const qualityField = useField<number>({ path: 'optimizeQuality' })
  const maxWidthField = useField<number>({ path: 'optimizeMaxWidth' })
  const maxHeightField = useField<number>({ path: 'optimizeMaxHeight' })

  const [locked, setLocked] = useState(true)

  const origW = widthField.value || 0
  const origH = heightField.value || 0
  const origSize = filesizeField.value || 0
  const origMime = mimeField.value || ''
  const aspectRatio = origW && origH ? origW / origH : 1

  const format = formatField.value || 'auto'
  const quality = qualityField.value ?? 80
  const maxW = maxWidthField.value || undefined
  const maxH = maxHeightField.value || undefined

  const estimate = useMemo(
    () => estimateOutputSize(origW, origH, origSize, origMime, format, quality, maxW, maxH),
    [origW, origH, origSize, origMime, format, quality, maxW, maxH],
  )

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const w = parseInt(e.target.value) || undefined
    maxWidthField.setValue(w as number)
    if (locked && w && aspectRatio) {
      maxHeightField.setValue(Math.round(w / aspectRatio))
    }
  }

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const h = parseInt(e.target.value) || undefined
    maxHeightField.setValue(h as number)
    if (locked && h && aspectRatio) {
      maxWidthField.setValue(Math.round(h * aspectRatio))
    }
  }

  if (origMime === 'image/svg+xml' || origMime === 'image/gif') {
    return (
      <div style={{ padding: '12px 0', color: '#888', fontSize: 13 }}>
        Optimization is not available for {origMime === 'image/svg+xml' ? 'SVG' : 'GIF'} files.
      </div>
    )
  }

  return (
    <div
      style={{
        border: '1px solid var(--theme-elevation-150)',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
      }}
    >
      <h4 style={{ margin: '0 0 12px', fontSize: 14, fontWeight: 600 }}>Image Optimization</h4>

      {origW > 0 && (
        <div
          style={{
            display: 'flex',
            gap: 16,
            marginBottom: 16,
            fontSize: 13,
            color: 'var(--theme-elevation-500)',
          }}
        >
          <span>
            Original: {origW} x {origH}
          </span>
          <span>{formatBytes(origSize)}</span>
          <span>{origMime}</span>
        </div>
      )}

      <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontSize: 13, marginBottom: 4, fontWeight: 500 }}>
            Format
          </label>
          <select
            value={format}
            onChange={(e) => formatField.setValue(e.target.value)}
            style={inputStyle}
          >
            {FORMAT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontSize: 13, marginBottom: 4, fontWeight: 500 }}>
            Quality ({quality}%)
          </label>
          <input
            type="range"
            min={1}
            max={100}
            value={quality}
            onChange={(e) => qualityField.setValue(parseInt(e.target.value))}
            style={{ width: '100%', marginTop: 4 }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end', marginBottom: 16 }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontSize: 13, marginBottom: 4, fontWeight: 500 }}>
            Max Width
          </label>
          <input
            type="number"
            value={maxW ?? ''}
            onChange={handleWidthChange}
            placeholder={String(origW || 'auto')}
            min={1}
            style={inputStyle}
          />
        </div>
        <button
          type="button"
          onClick={() => setLocked(!locked)}
          title={locked ? 'Unlock aspect ratio' : 'Lock aspect ratio'}
          style={{
            padding: '6px 10px',
            borderRadius: 4,
            border: '1px solid var(--theme-elevation-150)',
            background: locked ? 'var(--theme-elevation-100)' : 'transparent',
            cursor: 'pointer',
            lineHeight: 1,
            color: 'inherit',
            marginBottom: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {locked ? <Link size={16} /> : <Unlink size={16} />}
        </button>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontSize: 13, marginBottom: 4, fontWeight: 500 }}>
            Max Height
          </label>
          <input
            type="number"
            value={maxH ?? ''}
            onChange={handleHeightChange}
            placeholder={String(origH || 'auto')}
            min={1}
            style={inputStyle}
          />
        </div>
      </div>

      {origW > 0 && (
        <div
          style={{
            padding: 12,
            borderRadius: 6,
            background: 'var(--theme-elevation-50)',
            fontSize: 13,
          }}
        >
          <div style={{ fontWeight: 600, marginBottom: 4 }}>Estimated Output</div>
          <div style={{ display: 'flex', gap: 16 }}>
            <span>
              {estimate.width} x {estimate.height}
            </span>
            <span
              style={{
                fontWeight: 600,
                color: estimate.size < origSize ? '#22c55e' : '#ef4444',
              }}
            >
              {formatBytes(estimate.size)}
              {origSize > 0 &&
                estimate.size < origSize &&
                ` (-${Math.round((1 - estimate.size / origSize) * 100)}%)`}
            </span>
            <span>{format === 'auto' ? origMime : `image/${format}`}</span>
          </div>
        </div>
      )}
    </div>
  )
}

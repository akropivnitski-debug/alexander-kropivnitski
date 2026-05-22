'use client'
import React, { useState, useMemo, useCallback } from 'react'
import { useField } from '@payloadcms/ui'
import * as LucideIcons from 'lucide-react'

const ICON_NAMES: string[] = Object.keys(LucideIcons).filter(
  (key) =>
    key !== 'default' &&
    key !== 'createLucideIcon' &&
    key !== 'icons' &&
    !key.startsWith('__') &&
    typeof (LucideIcons as Record<string, unknown>)[key] === 'object',
)

const PAGE_SIZE = 60

export const IconPicker: React.FC<{ path: string }> = ({ path }) => {
  const { value, setValue } = useField<string>({ path })
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)

  const filtered = useMemo(() => {
    if (!search) return ICON_NAMES
    const q = search.toLowerCase()
    return ICON_NAMES.filter((name) => name.toLowerCase().includes(q))
  }, [search])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const visible = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)

  const handleSelect = useCallback(
    (name: string) => {
      setValue(name)
      setOpen(false)
      setSearch('')
      setPage(0)
    },
    [setValue],
  )

  const CurrentIcon = value
    ? ((LucideIcons as Record<string, unknown>)[value] as React.ComponentType<{
        className?: string
      }> | null)
    : null

  return (
    <div style={{ marginBottom: 16 }}>
      <label
        style={{
          display: 'block',
          fontSize: 13,
          fontWeight: 500,
          marginBottom: 6,
          color: 'var(--theme-elevation-800)',
        }}
      >
        Icon
      </label>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 12px',
            borderRadius: 6,
            border: '1px solid var(--theme-elevation-150)',
            background: 'var(--theme-input-bg)',
            color: 'inherit',
            cursor: 'pointer',
            fontSize: 13,
            minWidth: 160,
          }}
        >
          {CurrentIcon && <CurrentIcon className="size-4" />}
          <span>{value || 'Choose icon...'}</span>
        </button>
        {value && (
          <button
            type="button"
            onClick={() => setValue('')}
            style={{
              padding: '4px 8px',
              borderRadius: 4,
              border: '1px solid var(--theme-elevation-150)',
              background: 'transparent',
              color: 'var(--theme-elevation-500)',
              cursor: 'pointer',
              fontSize: 12,
            }}
          >
            Clear
          </button>
        )}
      </div>

      {open && (
        <div
          style={{
            marginTop: 8,
            border: '1px solid var(--theme-elevation-150)',
            borderRadius: 8,
            background: 'var(--theme-bg)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            maxHeight: 400,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ padding: 8, borderBottom: '1px solid var(--theme-elevation-150)' }}>
            <input
              type="text"
              placeholder="Search icons..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setPage(0)
              }}
              autoFocus
              style={{
                width: '100%',
                padding: '6px 10px',
                borderRadius: 4,
                border: '1px solid var(--theme-elevation-150)',
                background: 'var(--theme-input-bg)',
                color: 'inherit',
                fontSize: 13,
                outline: 'none',
              }}
            />
          </div>

          <div
            style={{
              padding: 8,
              overflowY: 'auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: 6,
            }}
          >
            {visible.map((name) => {
              const Icon = (LucideIcons as Record<string, unknown>)[name] as React.ComponentType<{
                className?: string
              }>
              if (!Icon) return null
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => handleSelect(name)}
                  title={name}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    padding: '10px 6px',
                    borderRadius: 6,
                    border:
                      value === name
                        ? '2px solid var(--theme-elevation-400)'
                        : '1px solid transparent',
                    background: value === name ? 'var(--theme-elevation-100)' : 'transparent',
                    cursor: 'pointer',
                    color: 'var(--theme-elevation-800)',
                    fontSize: 9,
                    overflow: 'hidden',
                  }}
                >
                  <Icon className="size-8" />
                  <span
                    style={{
                      maxWidth: '100%',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {name}
                  </span>
                </button>
              )
            })}
          </div>

          {totalPages > 1 && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '6px 12px',
                borderTop: '1px solid var(--theme-elevation-150)',
                fontSize: 12,
                color: 'var(--theme-elevation-500)',
              }}
            >
              <button
                type="button"
                disabled={page === 0}
                onClick={() => setPage(page - 1)}
                style={{
                  cursor: page === 0 ? 'default' : 'pointer',
                  opacity: page === 0 ? 0.3 : 1,
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  padding: '2px 8px',
                }}
              >
                Prev
              </button>
              <span>
                {page + 1} / {totalPages} ({filtered.length} icons)
              </span>
              <button
                type="button"
                disabled={page >= totalPages - 1}
                onClick={() => setPage(page + 1)}
                style={{
                  cursor: page >= totalPages - 1 ? 'default' : 'pointer',
                  opacity: page >= totalPages - 1 ? 0.3 : 1,
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  padding: '2px 8px',
                }}
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

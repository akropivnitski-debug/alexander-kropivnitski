import React from 'react'
import type { Page } from '@/payload-types'

type ChecklistData = Extract<NonNullable<Page['layout']>[number], { blockType: 'checklist' }>

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
      <path d="M16.7 6.3a1 1 0 0 0-1.4-1.4L8 12.2 4.7 8.9a1 1 0 1 0-1.4 1.4L7.3 14a1 1 0 0 0 1.4 0l8-8Z" />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-foreground/30" viewBox="0 0 20 20" fill="currentColor">
      <path d="M6.2 5 5 6.2 8.8 10 5 13.8 6.2 15 10 11.2 13.8 15 15 13.8 11.2 10 15 6.2 13.8 5 10 8.8z" />
    </svg>
  )
}

export function Checklist({ data }: { data: ChecklistData }) {
  const items = data.items ?? []
  if (items.length === 0) return null

  const cols = data.columns === '1' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'

  return (
    <section className="w-full bg-background px-8 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        {(data.heading || data.description) && (
          <div className="mb-10 text-center">
            {data.heading && (
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">{data.heading}</h2>
            )}
            {data.description && (
              <p className="mx-auto mt-4 max-w-2xl text-foreground/60">{data.description}</p>
            )}
          </div>
        )}
        <ul className={`grid gap-3 ${cols}`}>
          {items.map((item, i) => (
            <li
              key={item.id ?? i}
              className="flex items-center gap-3 rounded-lg border border-foreground/10 bg-foreground/[0.02] px-4 py-3"
            >
              {item.included !== false ? <CheckIcon /> : <CrossIcon />}
              <span className={item.included !== false ? 'text-foreground' : 'text-foreground/40'}>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

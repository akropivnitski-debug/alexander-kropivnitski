import React from 'react'
import type { Page } from '@/payload-types'
import { resolveIcon } from '@/lib/iconMap'

type IconGridData = Extract<NonNullable<Page['layout']>[number], { blockType: 'iconGrid' }>

const COL_MAP: Record<string, string> = {
  '3': 'grid-cols-2 sm:grid-cols-3',
  '4': 'grid-cols-2 sm:grid-cols-4',
  '5': 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
  '6': 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
}

export function IconGrid({ data }: { data: IconGridData }) {
  const items = data.items ?? []
  if (items.length === 0) return null

  const cols = COL_MAP[data.columns ?? '4'] ?? COL_MAP['4']

  return (
    <section className="w-full bg-background px-8 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        {(data.heading || data.description) && (
          <div className="mb-10 text-center md:mb-14">
            {data.heading && (
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">{data.heading}</h2>
            )}
            {data.description && (
              <p className="mx-auto mt-4 max-w-2xl text-foreground/60">{data.description}</p>
            )}
          </div>
        )}
        <div className={`grid gap-6 ${cols}`}>
          {items.map((item, i) => {
            const Icon = resolveIcon(item.icon)
            return (
              <div key={item.id ?? i} className="flex flex-col items-center gap-3 rounded-xl p-4 text-center">
                {Icon && (
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5">
                    <Icon className="h-6 w-6 text-foreground/70" />
                  </div>
                )}
                <span className="text-sm font-medium text-foreground">{item.label}</span>
                {item.sublabel && (
                  <span className="text-xs text-foreground/50">{item.sublabel}</span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

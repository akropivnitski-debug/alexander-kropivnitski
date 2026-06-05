import React from 'react'
import type { Page } from '@/payload-types'
import { resolveIcon } from '@/lib/iconMap'

type BentoGridData = Extract<NonNullable<Page['layout']>[number], { blockType: 'bentoGrid' }>

export function BentoGrid({ data }: { data: BentoGridData }) {
  const cards = data.cards ?? []
  if (cards.length === 0) return null

  return (
    <section className="w-full bg-background px-8 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = resolveIcon(card.icon)
            const isWide = card.size === 'wide'
            return (
              <div
                key={card.id ?? i}
                className={`group relative overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 transition-colors hover:bg-foreground/[0.06] ${isWide ? 'md:col-span-2' : ''}`}
              >
                {card.accentColor && (
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-20 blur-3xl"
                    style={{ backgroundColor: card.accentColor }}
                  />
                )}
                {Icon && (
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-foreground/10 bg-foreground/5">
                    <Icon className="h-5 w-5 text-foreground/70" />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                {card.description && (
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">{card.description}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

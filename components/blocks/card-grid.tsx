import React from 'react'
import Image from 'next/image'
import type { Page } from '@/payload-types'
import { resolveImage } from '@/lib/resolveImage'

type CardGridData = Extract<NonNullable<Page['layout']>[number], { blockType: 'cardGrid' }>

const COL_MAP: Record<string, string> = {
  '2': 'grid-cols-1 sm:grid-cols-2',
  '3': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  '4': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

export function CardGrid({ data }: { data: CardGridData }) {
  const cards = data.cards ?? []
  if (cards.length === 0) return null

  const cols = COL_MAP[data.columns ?? '3'] ?? COL_MAP['3']

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
        <div className={`grid gap-6 ${cols}`}>
          {cards.map((card, i) => {
            const src = resolveImage(card.image)
            const Wrapper = card.href ? 'a' : 'div'
            const linkProps = card.href ? { href: card.href } : {}
            return (
              <Wrapper
                key={card.id ?? i}
                {...linkProps}
                className="group overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02] transition-colors hover:bg-foreground/[0.05]"
              >
                {src && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={src}
                      alt={card.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-5">
                  {card.tag && (
                    <span className="mb-2 inline-block rounded-full bg-foreground/10 px-3 py-0.5 text-xs font-medium text-foreground/60">
                      {card.tag}
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                  {card.description && (
                    <p className="mt-2 text-sm leading-relaxed text-foreground/60">{card.description}</p>
                  )}
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}

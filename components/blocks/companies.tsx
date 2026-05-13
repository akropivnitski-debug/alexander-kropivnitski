'use client'

import React from 'react'
import { resolveImage } from '@/lib/resolveImage'
import type { Page } from '@/payload-types'

type CompaniesData = Extract<
  NonNullable<Page['layout']>[number],
  { blockType: 'companies' }
>

export function Companies({ data }: { data: CompaniesData }) {
  const logos = data.logos ?? []
  if (logos.length === 0) return null

  const speed = data.speed ?? 30

  return (
    <section className="w-full overflow-hidden bg-background py-16">
      {data.heading && (
        <h2 className="mb-12 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {data.heading}
        </h2>
      )}
      <div
        className="marquee-track flex w-max items-center justify-center gap-24"
        style={{ '--marquee-speed': `${speed}s` } as React.CSSProperties}
      >
        {/* Duplicate the list twice for seamless loop */}
        {[...logos, ...logos].map((item, i) => {
          const src = resolveImage(item.logo)
          return (
            <div
              key={`${item.id ?? i}`}
              className="flex shrink-0 items-center justify-center px-8"
            >
              {src ? (
                <img
                  src={src}
                  alt={item.name}
                  className="h-16 w-auto max-w-[280px] object-contain brightness-0 invert opacity-70 grayscale transition-all duration-300 hover:opacity-100"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement
                    t.onerror = null
                    t.style.display = 'none'
                    t.nextElementSibling?.classList.remove('hidden')
                  }}
                />
              ) : null}
              <span
                className={
                  src
                    ? 'hidden text-lg font-semibold text-foreground/60'
                    : 'text-lg font-semibold text-foreground/60'
                }
              >
                {item.name}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

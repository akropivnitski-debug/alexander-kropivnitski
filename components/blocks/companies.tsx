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


  return (
    <section className="w-full bg-background pt-8 pb-16">
      {data.heading && (
        <h2 className="mb-12 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {data.heading}
        </h2>
      )}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-16 px-8">
        {logos.map((item, i) => {
          const src = resolveImage(item.logo)
          return (
            <div
              key={item.id ?? i}
              className="flex items-center justify-center"
            >
              {src ? (
                <img
                  src={src}
                  alt={item.name}
                  className="h-48 w-auto max-w-[400px] object-contain brightness-0 invert opacity-70 transition-all duration-300 hover:opacity-100"
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

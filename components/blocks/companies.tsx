import React from 'react'
import Image from 'next/image'
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
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-8 md:gap-16">
        {logos.map((item, i) => {
          const src = resolveImage(item.logo)
          return (
            <div
              key={item.id ?? i}
              className="flex items-center justify-center"
            >
              {src ? (
                <Image
                  src={src}
                  alt={item.name}
                  width={400}
                  height={192}
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 250px, 150px"
                  className="h-16 w-auto max-w-[150px] object-contain brightness-0 invert opacity-70 transition-all duration-300 hover:opacity-100 md:h-24 md:max-w-[250px] lg:h-48 lg:max-w-[400px]"
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

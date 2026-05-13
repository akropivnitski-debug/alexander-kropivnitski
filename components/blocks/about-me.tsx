'use client'

import React from 'react'
import { resolveImage } from '@/lib/resolveImage'
import type { Page } from '@/payload-types'

type AboutMeData = Extract<
  NonNullable<Page['layout']>[number],
  { blockType: 'aboutMe' }
>

type TimelineItem = NonNullable<AboutMeData['items']>[number]

function TimelineEntry({
  item,
  index,
}: {
  item: TimelineItem
  index: number
}) {
  const imageSrc = resolveImage(item.image)
  const isEven = index % 2 === 0

  return (
    <div className="group relative grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8">
      {/* Left side */}
      <div
        className={`flex items-center ${
          isEven
            ? 'justify-end text-right'
            : 'justify-end text-right md:order-3 md:justify-start md:text-left'
        }`}
      >
        {isEven ? (
          <span className="text-sm text-muted-foreground">{item.label}</span>
        ) : (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            {item.text && (
              <p className="max-w-sm text-sm leading-relaxed text-foreground/70">
                {item.text}
              </p>
            )}
            {imageSrc && (
              <img
                src={imageSrc}
                alt={item.title}
                className="mt-3 h-auto w-full max-w-xs rounded-lg object-cover"
                loading="lazy"
              />
            )}
          </div>
        )}
      </div>

      {/* Center line + dot */}
      <div className="relative flex flex-col items-center md:order-2">
        <div className="w-px flex-1 bg-foreground/20" />
        <div className="my-2 h-3 w-3 shrink-0 rounded-full border-2 border-foreground/40 bg-background" />
        <div className="w-px flex-1 bg-foreground/20" />
      </div>

      {/* Right side */}
      <div
        className={`flex items-center ${
          isEven
            ? 'justify-start text-left'
            : 'justify-start text-left md:order-1 md:justify-end md:text-right'
        }`}
      >
        {isEven ? (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            {item.text && (
              <p className="max-w-sm text-sm leading-relaxed text-foreground/70">
                {item.text}
              </p>
            )}
            {imageSrc && (
              <img
                src={imageSrc}
                alt={item.title}
                className="mt-3 h-auto w-full max-w-xs rounded-lg object-cover"
                loading="lazy"
              />
            )}
          </div>
        ) : (
          <span className="text-sm text-muted-foreground">{item.label}</span>
        )}
      </div>
    </div>
  )
}

export function AboutMe({ data }: { data: AboutMeData }) {
  const items = data.items ?? []
  if (items.length === 0) return null

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        {data.heading && (
          <h2 className="mb-4 text-center text-4xl font-medium lg:text-5xl">
            {data.heading}
          </h2>
        )}
        {data.description && (
          <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground md:mb-16">
            {data.description}
          </p>
        )}

        <div className="space-y-0">
          {items.map((item, i) => (
            <TimelineEntry key={item.id ?? i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

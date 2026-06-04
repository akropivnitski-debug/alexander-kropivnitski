import React from 'react'
import Image from 'next/image'
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
  isLast,
}: {
  item: TimelineItem
  index: number
  isLast: boolean
}) {
  const imageSrc = resolveImage(item.image)
  const isEven = index % 2 === 0

  const content = (
    <div className="space-y-2 py-8">
      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
      {item.text && (
        <p className="max-w-sm text-sm leading-relaxed text-foreground/70">
          {item.text}
        </p>
      )}
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={item.title}
          width={320}
          height={240}
          className="mt-3 h-auto w-full max-w-xs rounded-lg object-cover"
          loading="lazy"
        />
      )}
    </div>
  )

  const label = (
    <div className="flex h-full items-center py-8">
      <span className="text-sm text-muted-foreground">{item.label}</span>
    </div>
  )

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] gap-6 md:gap-12">
      {/* Left side */}
      <div className={`flex ${isEven ? 'justify-end text-right' : 'justify-end text-right'}`}>
        {isEven ? label : content}
      </div>

      {/* Center line + dot — always in the middle */}
      <div className="relative flex flex-col items-center">
        <div className={`w-px flex-1 ${index === 0 ? 'bg-transparent' : 'bg-foreground/20'}`} />
        <div className="my-1 h-3 w-3 shrink-0 rounded-full border-2 border-foreground/40 bg-background" />
        <div className={`w-px flex-1 ${isLast ? 'bg-transparent' : 'bg-foreground/20'}`} />
      </div>

      {/* Right side */}
      <div className={`flex ${isEven ? 'justify-start text-left' : 'justify-start text-left'}`}>
        {isEven ? content : label}
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
          <p className="mx-auto mb-12 max-w-3xl text-center text-muted-foreground md:mb-16">
            {data.description}
          </p>
        )}

        <div>
          {items.map((item, i) => (
            <TimelineEntry
              key={item.id ?? i}
              item={item}
              index={i}
              isLast={i === items.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

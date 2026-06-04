'use client'

import React, { useMemo } from 'react'
import { cn } from '@/lib/utils'
import { useInView } from '@/hooks/useInView'
import { resolveIcon } from '@/lib/iconMap'
import { TextScramble } from '@/components/ui/text-scramble'
import type { Page } from '@/payload-types'

type ProjectsV2Data = Extract<
  NonNullable<Page['layout']>[number],
  { blockType: 'projectsV2' }
>
type CardData = NonNullable<ProjectsV2Data['cards']>[number]

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<'svg'> & {
  width: number
  height: number
  x: string
  y: string
  squares?: number[][]
}) {
  const patternId = React.useId()

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy], index) => (
            <rect
              strokeWidth="0"
              key={index}
              width={width + 1}
              height={height + 1}
              x={sx * width}
              y={sy * height}
            />
          ))}
        </svg>
      )}
    </svg>
  )
}

function FeatureCard({
  card,
  index,
  className,
  inView,
}: {
  card: CardData
  index: number
  className?: string
  inView: boolean
}) {
  const Icon = resolveIcon(card.icon)

  const pattern = useMemo(
    () =>
      Array.from({ length: 5 }, () => [
        Math.floor(Math.random() * 4) + 7,
        Math.floor(Math.random() * 6) + 1,
      ]),
    [],
  )

  const content = (
    <div
      className={cn('reveal relative overflow-hidden p-6', className)}
      style={inView ? { animation: `reveal-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s forwards` } : { opacity: 0 }}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="from-foreground/5 to-foreground/1 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={pattern}
            className="fill-foreground/5 stroke-foreground/25 absolute inset-0 h-full w-full mix-blend-overlay"
          />
        </div>
      </div>
      {Icon && <Icon className="size-6 text-foreground/75" strokeWidth={1} />}
      <h3 className="mt-10 text-sm text-foreground md:text-base">{card.title}</h3>
      {card.description && (
        <p className="text-muted-foreground relative z-20 mt-2 text-xs font-light">
          {card.description}
        </p>
      )}
    </div>
  )

  if (card.href) {
    return (
      <a
        href={card.href}
        target={card.href.startsWith('http') ? '_blank' : undefined}
        rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="transition-colors hover:bg-foreground/[0.03]"
      >
        {content}
      </a>
    )
  }

  return content
}

const colsClass: Record<string, string> = {
  '2': 'md:grid-cols-2',
  '3': 'md:grid-cols-3',
  '4': 'md:grid-cols-2 lg:grid-cols-4',
}

export function ProjectsV2({ data }: { data: ProjectsV2Data }) {
  const cols = data.columns || '3'
  const colCount = Number(cols) || 3
  const cardCount = data.cards?.length ?? 0
  const maxCardsIn2Rows = colCount * 2
  const showButton = cardCount > maxCardsIn2Rows && data.buttonLabel && data.buttonHref
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="relative w-full bg-background px-6 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        {data.heading && (
          <h2
            className="reveal text-center text-3xl font-bold text-foreground md:text-4xl"
            style={inView ? { animation: 'reveal-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' } : { opacity: 0 }}
          >
            {data.heading}
          </h2>
        )}

        {data.description && (
          <p
            className="reveal mx-auto mt-4 max-w-2xl text-center text-foreground/60"
            style={inView ? { animation: 'reveal-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards' } : { opacity: 0 }}
          >
            {data.description}
          </p>
        )}

        {data.cards && data.cards.length > 0 && (
          <div className={cn('mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/10', colsClass[cols])}>
            {data.cards.map((card, i) => (
              <FeatureCard key={card.id ?? i} card={card} index={i} className="bg-background" inView={inView} />
            ))}
          </div>
        )}

        {showButton && (
          <div
            className="reveal mt-10 flex justify-center"
            style={inView ? { animation: 'reveal-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards' } : { opacity: 0 }}
          >
            <a href={data.buttonHref!}>
              <TextScramble text={data.buttonLabel!} />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

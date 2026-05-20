'use client'

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Page } from '@/payload-types'

type ProjectsV2Data = Extract<
  NonNullable<Page['layout']>[number],
  { blockType: 'projectsV2' }
>
type CardData = NonNullable<ProjectsV2Data['cards']>[number]

function resolveIcon(name?: string | null): React.ComponentType<{ className?: string; strokeWidth?: number }> | null {
  if (!name) return null
  const icons = LucideIcons as Record<string, unknown>
  const icon = icons[name] || icons[name + 'Icon']
  if (typeof icon === 'function' || (typeof icon === 'object' && icon !== null)) {
    return icon as React.ComponentType<{ className?: string; strokeWidth?: number }>
  }
  return null
}

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
}: {
  card: CardData
  index: number
  className?: string
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn('relative overflow-hidden p-6', className)}
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
    </motion.div>
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

  return (
    <section className="relative w-full bg-background px-6 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        {data.heading && (
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-3xl font-bold text-foreground md:text-4xl"
          >
            {data.heading}
          </motion.h2>
        )}

        {data.description && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-center text-foreground/60"
          >
            {data.description}
          </motion.p>
        )}

        {data.cards && data.cards.length > 0 && (
          <div className={cn('mt-10 grid grid-cols-1', colsClass[cols])}>
            {data.cards.map((card, i) => (
              <FeatureCard key={card.id ?? i} card={card} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

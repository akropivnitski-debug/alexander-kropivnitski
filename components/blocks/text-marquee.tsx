import React from 'react'
import type { Page } from '@/payload-types'

type TextMarqueeData = Extract<NonNullable<Page['layout']>[number], { blockType: 'textMarquee' }>

const SPEED_MAP = { slow: '40s', normal: '25s', fast: '14s' }
const SIZE_MAP = { sm: 'text-xl', md: 'text-3xl', lg: 'text-5xl md:text-6xl', xl: 'text-6xl md:text-8xl' }

export function TextMarquee({ data }: { data: TextMarqueeData }) {
  if (!data.text) return null

  const speed = SPEED_MAP[(data.speed as keyof typeof SPEED_MAP) ?? 'normal'] ?? '25s'
  const size = SIZE_MAP[(data.size as keyof typeof SIZE_MAP) ?? 'lg'] ?? SIZE_MAP.lg
  const separator = data.separator || '•'
  const segment = `${data.text} ${separator} `
  const repeated = Array(8).fill(segment).join('')

  const variantClasses =
    data.variant === 'outline'
      ? 'text-transparent [-webkit-text-stroke:1px_var(--color-foreground)]'
      : data.variant === 'muted'
        ? 'text-foreground/20'
        : 'text-foreground'

  return (
    <section className="w-full overflow-hidden bg-background py-8 md:py-12">
      <div
        className="relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        }}
      >
        <div
          className="flex w-max animate-[marquee-scroll_var(--speed)_linear_infinite]"
          style={{ '--speed': speed } as React.CSSProperties}
        >
          <span
            className={`whitespace-nowrap font-bold ${size} ${variantClasses} select-none`}
            aria-hidden="true"
          >
            {repeated}
          </span>
        </div>
      </div>
      <span className="sr-only">{data.text}</span>
    </section>
  )
}

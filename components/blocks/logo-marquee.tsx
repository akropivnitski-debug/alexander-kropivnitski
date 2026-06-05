import React from 'react'
import Image from 'next/image'
import type { Page } from '@/payload-types'
import { resolveImage } from '@/lib/resolveImage'

type LogoMarqueeData = Extract<NonNullable<Page['layout']>[number], { blockType: 'logoMarquee' }>

const SPEED_MAP = { slow: '60s', normal: '35s', fast: '20s' }

export function LogoMarquee({ data }: { data: LogoMarqueeData }) {
  const logos = data.logos ?? []
  if (logos.length === 0) return null

  const speed = SPEED_MAP[(data.speed as keyof typeof SPEED_MAP) ?? 'normal'] ?? '35s'

  return (
    <section className="w-full overflow-hidden bg-background py-10 md:py-16">
      {data.heading && (
        <h2 className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {data.heading}
        </h2>
      )}
      <div
        className="relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div
          className="flex w-max items-center gap-16 animate-[marquee-scroll_var(--speed)_linear_infinite]"
          style={{ '--speed': speed } as React.CSSProperties}
        >
          {[...logos, ...logos].map((logo, i) => {
            const src = resolveImage(logo.logo)
            if (!src) return null
            return (
              <Image
                key={`${logo.id ?? i}-${i}`}
                src={src}
                alt={logo.name}
                width={160}
                height={60}
                sizes="160px"
                className="h-10 w-auto max-w-[160px] shrink-0 select-none object-contain opacity-60 grayscale invert transition-all hover:opacity-100 hover:grayscale-0 md:h-12"
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

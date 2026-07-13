import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { resolveImage } from '@/lib/resolveImage'
import type { Page } from '@/payload-types'

type HeroV3Data = Extract<NonNullable<Page['layout']>[number], { blockType: 'heroV3' }>

export function HeroV3({ data, contentHtml = '' }: { data: HeroV3Data; contentHtml?: string }) {
  const imageSrc = resolveImage(data.image) ?? 'https://placehold.co/400x600/eab308/ffffff?text=Hero'
  const circleColor = data.circleColor ?? '#facc15'
  const HeadingTag = data.isPageHeading === false ? 'h2' : 'h1'

  return (
    <section
      className={cn(
        'relative flex w-full flex-col items-center justify-center overflow-hidden bg-background px-8 py-16 font-sans md:px-12 md:py-24'
      )}
    >
      <div className="relative grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left — Heading + Rich Text */}
        <div
          className="anim-fade-up z-20 order-2 md:order-1"
          style={{ animationDelay: '0.3s' }}
        >
          <HeadingTag className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            {data.heading}
          </HeadingTag>
          <div
            className="mt-6 prose prose-invert max-w-none text-foreground/80 prose-li:marker:text-foreground/50"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>

        {/* Right — Image with Circle */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-[300px] md:h-[400px] lg:h-[500px]">
          <div
            className="anim-scale-in absolute z-0 h-[280px] w-[280px] rounded-full md:h-[380px] md:w-[380px] lg:h-[480px] lg:w-[480px]"
            style={{ backgroundColor: circleColor, animationDelay: '0.2s' }}
          />
          <div
            className="anim-fade-up-large relative z-10 h-auto w-56 md:w-64 scale-150 lg:w-72"
            style={{ animationDelay: '0.4s' }}
          >
            <Image
              src={imageSrc}
              alt={data.heading ?? 'Hero image'}
              width={400}
              height={600}
              sizes="(min-width: 1024px) 288px, (min-width: 768px) 256px, 224px"
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

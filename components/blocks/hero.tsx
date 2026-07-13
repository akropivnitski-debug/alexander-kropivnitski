import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { resolveImage } from '@/lib/resolveImage'
import type { Page } from '@/payload-types'

type HeroData = Extract<NonNullable<Page['layout']>[number], { blockType: 'hero' }>

export function Hero({ data }: { data: HeroData }) {
  const imageSrc = resolveImage(data.image) ?? 'https://placehold.co/400x600/eab308/ffffff?text=Hero'
  const circleColor = data.circleColor ?? '#facc15'

  return (
    <section
      className={cn(
        'relative flex w-full flex-col items-center justify-center overflow-hidden bg-background px-8 pt-10 pb-8 font-sans md:px-12'
      )}
    >
      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl grid-cols-1 items-center md:grid-cols-3 gap-8">
        {/* Left Text Content */}
        <div
          className="anim-fade-up z-20 order-2 md:order-1 text-center md:text-left"
          style={{ animationDelay: '0.6s' }}
        >
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-foreground/80 md:mx-0">
            {data.mainText}
          </p>
          {data.readMoreLabel && data.readMoreHref && (
            <a
              href={data.readMoreHref}
              className="mt-4 inline-block text-sm font-medium text-foreground underline decoration-from-font"
            >
              {data.readMoreLabel}
            </a>
          )}
        </div>

        {/* Center Image with Circle */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-[300px] md:h-[400px] lg:h-[500px]">
          <div
            className="anim-scale-in absolute z-0 h-[300px] w-[300px] rounded-full md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
            style={{ backgroundColor: circleColor, animationDelay: '0.2s' }}
          />
          <div
            className="anim-fade-up-large relative z-10 h-auto w-56 md:w-64 scale-150 lg:w-72"
            style={{ animationDelay: '0.4s' }}
          >
            <Image
              src={imageSrc}
              alt={data.overlayPart1 ?? 'Hero image'}
              width={400}
              height={600}
              sizes="(min-width: 1024px) 288px, (min-width: 768px) 256px, 224px"
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          {/* Location Text — anchored to bottom of the circle */}
          {data.locationText && (
            <span
              className="anim-fade-up-subtle absolute bottom-0 right-0 z-20 translate-x-full pl-4 text-sm font-medium text-foreground/80 whitespace-nowrap"
              style={{ animationDelay: '1.0s' }}
            >
              {data.locationText}
            </span>
          )}
        </div>

        {/* Right Text */}
        <div
          className="anim-fade-up z-20 order-3 flex items-center justify-center text-center md:justify-start"
          style={{ animationDelay: '0.8s' }}
        >
          <h1 className="text-7xl font-extrabold text-foreground md:text-8xl lg:text-9xl">
            {data.overlayPart1}
            <br />
            {data.overlayPart2}
          </h1>
        </div>
      </div>
    </section>
  )
}

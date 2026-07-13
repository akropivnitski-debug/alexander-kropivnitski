import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { resolveImage } from '@/lib/resolveImage'
import type { Page } from '@/payload-types'

type HeroV2Data = Extract<NonNullable<Page['layout']>[number], { blockType: 'heroV2' }>

function LogoCloud({ logos }: { logos: NonNullable<HeroV2Data['logos']> }) {
  if (logos.length === 0) return null

  return (
    <div className="relative grid grid-cols-2 border-x border-foreground/10">
      <div className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 w-full border-t border-foreground/10" />
      {logos.map((logo, i) => {
        const isEvenCol = i % 2 === 0
        const isTopHalf = i < logos.length / 2
        return (
          <div
            key={logo.id ?? i}
            className={cn(
              'flex items-center justify-center px-4 py-6 md:py-8',
              isEvenCol && 'border-r border-foreground/10',
              !isTopHalf ? '' : 'border-b border-foreground/10',
              (i % 4 === 0 || i % 4 === 3) && 'bg-foreground/5'
            )}
          >
            <Image
              src={resolveImage(logo.logo) ?? ''}
              alt={logo.alt}
              width={120}
              height={40}
              sizes="120px"
              className={cn(
                'pointer-events-none h-8 w-auto max-w-[120px] select-none md:h-10',
                !logo.disableFilter && 'grayscale invert opacity-70'
              )}
            />
          </div>
        )
      })}
      <div className="pointer-events-none absolute -bottom-px left-1/2 -translate-x-1/2 w-full border-b border-foreground/10" />
    </div>
  )
}

export function HeroV2({ data }: { data: HeroV2Data }) {
  const imageSrc = resolveImage(data.image) ?? 'https://placehold.co/400x600/eab308/ffffff?text=Hero'
  const circleColor = data.circleColor ?? '#facc15'
  const logos = data.logos ?? []

  return (
    <section
      className={cn(
        'relative flex w-full flex-col items-center justify-center overflow-hidden bg-background px-8 pt-10 pb-8 font-sans md:px-12'
      )}
    >
      <div className="relative grid w-full max-w-7xl grid-cols-1 items-center md:grid-cols-3 gap-8">
        {/* Left — Logo Cloud */}
        <div
          className="anim-fade-up z-20 order-2 md:order-1"
          style={{ animationDelay: '0.6s' }}
        >
          <LogoCloud logos={logos} />
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
          {data.locationText && (
            <span
              className="anim-fade-up-subtle absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 text-sm font-medium text-foreground/80 whitespace-nowrap md:bottom-0 md:right-0 md:left-auto md:translate-x-full md:pl-4"
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
          <h1 className="text-[clamp(2.75rem,8vw,8rem)] font-extrabold leading-none text-foreground">
            {data.overlayPart1}
            <br />
            {data.overlayPart2}
          </h1>
        </div>
      </div>
    </section>
  )
}

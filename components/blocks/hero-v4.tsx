'use client'

import React from 'react'
import { PlusIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { resolveImage } from '@/lib/resolveImage'
import { lexicalToHtml } from '@/lib/lexicalToHtml'
import type { Page } from '@/payload-types'

type HeroV4Data = Extract<NonNullable<Page['layout']>[number], { blockType: 'heroV4' }>

function LogoCloud({ logos }: { logos: NonNullable<HeroV4Data['logos']> }) {
  if (logos.length === 0) return null

  // Determine which cells get a shaded background (checkerboard: 0,3,4,7,...)
  const isShaded = (i: number) => i % 4 === 0 || i % 4 === 3

  return (
    <div className="relative grid grid-cols-2 border-x border-foreground/10">
      <div className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 w-full border-t border-foreground/10" />

      {logos.map((logo, i) => {
        const isLastRow2Col = i >= logos.length - (logos.length % 2 || 2)
        const isLastRow4Col = i >= logos.length - (logos.length % 4 || 4)
        const isEvenCol = i % 2 === 0

        return (
          <div
            key={logo.id ?? i}
            className={cn(
              'relative flex items-center justify-center bg-background px-4 py-6 md:py-8',
              isEvenCol && 'border-r border-foreground/10',
              !isLastRow2Col && 'border-b border-foreground/10',
              isShaded(i) && 'bg-foreground/5',
            )}
          >
            <img
              src={resolveImage(logo.logo) ?? ''}
              alt={logo.alt}
              className={cn(
                'pointer-events-none h-4 w-auto max-w-[120px] select-none md:h-5',
                !logo.disableFilter && 'grayscale invert opacity-70',
              )}
            />
            {/* Plus icons at intersections */}
            {isEvenCol && !isLastRow2Col && (
              <PlusIcon
                className="absolute -right-[12.5px] -bottom-[12.5px] z-10 size-5 text-foreground/20"
                strokeWidth={1}
              />
            )}
          </div>
        )
      })}

      <div className="pointer-events-none absolute -bottom-px left-1/2 -translate-x-1/2 w-full border-b border-foreground/10" />
    </div>
  )
}

export function HeroV4({ data }: { data: HeroV4Data }) {
  const imageSrc = resolveImage(data.image) ?? 'https://placehold.co/400x600/eab308/ffffff?text=Hero'
  const circleColor = data.circleColor ?? '#facc15'
  const contentHtml = lexicalToHtml(data.content)
  const logos = data.logos ?? []

  return (
    <section
      className={cn(
        'relative flex w-full flex-col items-center justify-center overflow-hidden bg-background px-8 py-16 font-sans md:px-12 md:py-24',
      )}
    >
      <div className="relative grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left — Heading + Rich Text + Logo Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="z-20 order-2 md:order-1"
        >
          {data.heading && (
            <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              {data.heading}
            </h1>
          )}
          {contentHtml && (
            <div
              className={cn('prose prose-invert max-w-none text-foreground/80 prose-li:marker:text-foreground/50', data.heading && 'mt-6')}
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          )}
          {logos.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10"
            >
              <LogoCloud logos={logos} />
            </motion.div>
          )}
        </motion.div>

        {/* Right — Image with Circle */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-[300px] md:h-[400px] lg:h-[500px]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute z-0 h-[280px] w-[280px] rounded-full md:h-[380px] md:w-[380px] lg:h-[480px] lg:w-[480px]"
            style={{ backgroundColor: circleColor }}
          />
          <motion.img
            src={imageSrc}
            alt={data.heading ?? 'Hero image'}
            className="relative z-10 h-auto w-56 object-cover md:w-64 scale-150 lg:w-72"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.onerror = null
              target.src = 'https://placehold.co/400x600/eab308/ffffff?text=Image+Not+Found'
            }}
          />
        </div>
      </div>
    </section>
  )
}

'use client'

import React from 'react'
import { PlusIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { resolveImage } from '@/lib/resolveImage'
import type { Page } from '@/payload-types'

type HeroV6Data = Extract<NonNullable<Page['layout']>[number], { blockType: 'heroV6' }>

function LogoCloud({ logos }: { logos: NonNullable<HeroV6Data['logos']> }) {
  if (logos.length === 0) return null

  const isShaded = (i: number) => i % 4 === 0 || i % 4 === 3

  return (
    <div className="relative grid grid-cols-2 border-x border-foreground/10">
      <div className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 w-full border-t border-foreground/10" />

      {logos.map((logo, i) => {
        const isLastRow2Col = i >= logos.length - (logos.length % 2 || 2)
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
                'pointer-events-none h-8 w-auto max-w-[160px] select-none md:h-10',
                !logo.disableFilter && 'grayscale invert opacity-70',
              )}
            />
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

export function HeroV6({ data, contentHtml = '' }: { data: HeroV6Data; contentHtml?: string }) {
  const imageSrc = resolveImage(data.image) ?? 'https://placehold.co/600x600/1a1a1a/ededed?text=Image'
  const logos = data.logos ?? []

  return (
    <section
      className={cn(
        'relative flex w-full flex-col items-center justify-center overflow-hidden bg-background px-8 py-16 font-sans md:px-12 md:py-24',
      )}
    >
      <div className="relative grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left — Image (no circle) */}
        <div className="relative order-1 flex justify-center items-center">
          <motion.img
            src={imageSrc}
            alt={data.heading ?? 'Hero image'}
            className="relative z-10 h-auto w-full max-w-md rounded-2xl object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.onerror = null
              target.src = 'https://placehold.co/600x600/1a1a1a/ededed?text=Image+Not+Found'
            }}
          />
        </div>

        {/* Right — Heading + Rich Text + Logo Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="z-20 order-2"
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
      </div>
    </section>
  )
}

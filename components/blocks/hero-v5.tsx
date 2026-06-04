'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { resolveImage } from '@/lib/resolveImage'
import type { Page } from '@/payload-types'

type HeroV5Data = Extract<NonNullable<Page['layout']>[number], { blockType: 'heroV5' }>

export function HeroV5({ data, contentHtml = '' }: { data: HeroV5Data; contentHtml?: string }) {
  const imageSrc = resolveImage(data.image) ?? 'https://placehold.co/600x600/1a1a1a/ededed?text=Image'

  return (
    <section
      className={cn(
        'relative flex w-full flex-col items-center justify-center overflow-hidden bg-background px-8 py-16 font-sans md:px-12 md:py-24',
      )}
    >
      <div className="relative grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left — Heading + Rich Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="z-20 order-2 md:order-1"
        >
          <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            {data.heading}
          </h1>
          {contentHtml && (
            <div
              className="mt-6 prose prose-invert max-w-none text-foreground/80 prose-li:marker:text-foreground/50"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          )}
        </motion.div>

        {/* Right — Image (no circle) */}
        <div className="relative order-1 md:order-2 flex justify-center items-center">
          <motion.div
            className="relative z-10 h-auto w-full max-w-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <Image
              src={imageSrc}
              alt={data.heading ?? 'Hero image'}
              width={600}
              height={600}
              priority
              className="h-auto w-full rounded-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

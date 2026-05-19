'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { resolveImage } from '@/lib/resolveImage'
import { lexicalToHtml } from '@/lib/lexicalToHtml'
import type { Page } from '@/payload-types'

type HeroV3Data = Extract<NonNullable<Page['layout']>[number], { blockType: 'heroV3' }>

export function HeroV3({ data }: { data: HeroV3Data }) {
  const imageSrc = resolveImage(data.image) ?? 'https://placehold.co/400x600/eab308/ffffff?text=Hero'
  const circleColor = data.circleColor ?? '#facc15'
  const contentHtml = lexicalToHtml(data.content)

  return (
    <section
      className={cn(
        'relative flex w-full flex-col items-center justify-center overflow-hidden bg-background px-8 py-16 font-sans md:px-12 md:py-24'
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
          <div
            className="mt-6 prose prose-invert max-w-none text-foreground/80 prose-li:marker:text-foreground/50"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
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

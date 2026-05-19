'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { resolveImage } from '@/lib/resolveImage'
import type { Page } from '@/payload-types'

type HeroV2Data = Extract<NonNullable<Page['layout']>[number], { blockType: 'heroV2' }>

function LogoCloud({ logos }: { logos: NonNullable<HeroV2Data['logos']> }) {
  if (logos.length === 0) return null

  const cols = 2
  const rows = Math.ceil(logos.length / cols)

  return (
    <div className="relative grid grid-cols-2">
      {logos.map((logo, i) => {
        const isEvenCol = i % 2 === 0
        const isTopHalf = i < logos.length / 2
        return (
          <div
            key={logo.id ?? i}
            className={cn(
              'relative flex items-center justify-center px-4 py-6 md:py-8 border border-foreground/10',
              (i % 4 === 0 || i % 4 === 3) && 'bg-foreground/5'
            )}
          >
            <img
              src={resolveImage(logo.logo) ?? ''}
              alt={logo.alt}
              className={cn(
                'pointer-events-none h-8 w-auto max-w-[120px] select-none md:h-10',
                !logo.disableFilter && 'brightness-0 invert'
              )}
            />
          </div>
        )
      })}
      {/* + markers at grid intersections */}
      {Array.from({ length: rows - 1 }).map((_, row) => (
        <React.Fragment key={`plus-row-${row}`}>
          {/* Center intersection */}
          <span
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-foreground/30 text-xs font-light"
            style={{ top: `${((row + 1) / rows) * 100}%`, transform: 'translate(-50%, -50%)' }}
          >
            +
          </span>
          {/* Left intersection */}
          <span
            className="pointer-events-none absolute left-0 text-foreground/30 text-xs font-light"
            style={{ top: `${((row + 1) / rows) * 100}%`, transform: 'translate(-50%, -50%)' }}
          >
            +
          </span>
          {/* Right intersection */}
          <span
            className="pointer-events-none absolute right-0 text-foreground/30 text-xs font-light"
            style={{ top: `${((row + 1) / rows) * 100}%`, transform: 'translate(50%, -50%)' }}
          >
            +
          </span>
        </React.Fragment>
      ))}
      {/* Top corners */}
      <span className="pointer-events-none absolute top-0 left-0 text-foreground/30 text-xs font-light" style={{ transform: 'translate(-50%, -50%)' }}>+</span>
      <span className="pointer-events-none absolute top-0 left-1/2 text-foreground/30 text-xs font-light" style={{ transform: 'translate(-50%, -50%)' }}>+</span>
      <span className="pointer-events-none absolute top-0 right-0 text-foreground/30 text-xs font-light" style={{ transform: 'translate(50%, -50%)' }}>+</span>
      {/* Bottom corners */}
      <span className="pointer-events-none absolute bottom-0 left-0 text-foreground/30 text-xs font-light" style={{ transform: 'translate(-50%, 50%)' }}>+</span>
      <span className="pointer-events-none absolute bottom-0 left-1/2 text-foreground/30 text-xs font-light" style={{ transform: 'translate(-50%, 50%)' }}>+</span>
      <span className="pointer-events-none absolute bottom-0 right-0 text-foreground/30 text-xs font-light" style={{ transform: 'translate(50%, 50%)' }}>+</span>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="z-20 order-2 md:order-1"
        >
          <LogoCloud logos={logos} />
        </motion.div>

        {/* Center Image with Circle */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-[300px] md:h-[400px] lg:h-[500px]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute z-0 h-[300px] w-[300px] rounded-full md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
            style={{ backgroundColor: circleColor }}
          />
          <motion.img
            src={imageSrc}
            alt={data.overlayPart1 ?? 'Hero image'}
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
          {data.locationText && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="absolute bottom-0 right-0 z-20 translate-x-full pl-4 text-sm font-medium text-foreground/80 whitespace-nowrap"
            >
              {data.locationText}
            </motion.span>
          )}
        </div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
        >
          <h1 className="text-7xl font-extrabold text-foreground md:text-8xl lg:text-9xl">
            {data.overlayPart1}
            <br />
            {data.overlayPart2}
          </h1>
        </motion.div>
      </div>
    </section>
  )
}

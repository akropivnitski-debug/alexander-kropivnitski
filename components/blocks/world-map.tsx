'use client'

import React, { useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import DottedMap from 'dotted-map'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { Page } from '@/payload-types'

type WorldMapData = Extract<NonNullable<Page['layout']>[number], { blockType: 'worldMap' }>

interface MapDot {
  start: { lat: number; lng: number; label?: string }
  end: { lat: number; lng: number; label?: string }
}

function WorldMapCanvas({
  dots = [],
  lineColor = '#0ea5e9',
  showLabels = true,
  animationDuration = 2,
  loop = true,
}: {
  dots: MapDot[]
  lineColor?: string
  showLabels?: boolean
  animationDuration?: number
  loop?: boolean
}) {
  const svgRef = useRef<SVGSVGElement>(null)

  const map = useMemo(
    () => new DottedMap({ height: 100, grid: 'diagonal' }),
    [],
  )

  const svgMap = useMemo(
    () =>
      map.getSVG({
        radius: 0.22,
        color: '#FFFF7F40',
        shape: 'circle',
        backgroundColor: 'black',
      }),
    [map],
  )

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360)
    const y = (90 - lat) * (400 / 180)
    return { x, y }
  }

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number },
  ) => {
    const midX = (start.x + end.x) / 2
    const midY = Math.min(start.y, end.y) - 50
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`
  }

  const staggerDelay = 0.3
  const totalAnimationTime = dots.length * staggerDelay + animationDuration
  const pauseTime = 2
  const fullCycleDuration = totalAnimationTime + pauseTime

  return (
    <div className="w-full aspect-[2/1] md:aspect-[2.5/1] lg:aspect-[2/1] bg-background rounded-lg relative font-sans overflow-hidden">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none object-cover"
        alt="world map"
        height={495}
        width={1056}
        draggable={false}
        priority
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-auto select-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity={0} />
            <stop offset="5%" stopColor={lineColor} stopOpacity={1} />
            <stop offset="95%" stopColor={lineColor} stopOpacity={1} />
            <stop offset="100%" stopColor="white" stopOpacity={0} />
          </linearGradient>

          <filter id="glow">
            <feMorphology operator="dilate" radius="0.5" />
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng)
          const endPoint = projectPoint(dot.end.lat, dot.end.lng)

          const startTime = (i * staggerDelay) / fullCycleDuration
          const endTime = (i * staggerDelay + animationDuration) / fullCycleDuration
          const resetTime = totalAnimationTime / fullCycleDuration

          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={
                  loop
                    ? { pathLength: [0, 0, 1, 1, 0] }
                    : { pathLength: 1 }
                }
                transition={
                  loop
                    ? {
                        duration: fullCycleDuration,
                        times: [0, startTime, endTime, resetTime, 1],
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatDelay: 0,
                      }
                    : {
                        duration: animationDuration,
                        delay: i * staggerDelay,
                        ease: 'easeInOut',
                      }
                }
              />

              {loop && (
                <motion.circle
                  r="4"
                  fill={lineColor}
                  initial={{ offsetDistance: '0%', opacity: 0 }}
                  animate={{
                    offsetDistance: [null, '0%', '100%', '100%', '100%'] as any,
                    opacity: [0, 0, 1, 0, 0],
                  }}
                  transition={{
                    duration: fullCycleDuration,
                    times: [0, startTime, endTime, resetTime, 1],
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatDelay: 0,
                  }}
                  style={{
                    offsetPath: `path('${createCurvedPath(startPoint, endPoint)}')`,
                  }}
                />
              )}
            </g>
          )
        })}

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng)
          const endPoint = projectPoint(dot.end.lat, dot.end.lng)

          return (
            <g key={`points-group-${i}`}>
              {/* Start Point */}
              <g>
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="3"
                  fill={lineColor}
                  filter="url(#glow)"
                />
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="3"
                  fill={lineColor}
                  opacity="0.5"
                >
                  <animate attributeName="r" from="3" to="12" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                </circle>

                {showLabels && dot.start.label && (
                  <foreignObject
                    x={startPoint.x - 50}
                    y={startPoint.y - 35}
                    width="100"
                    height="30"
                    className="pointer-events-none"
                  >
                    <div className="flex items-center justify-center h-full">
                      <span className="text-sm font-medium px-2 py-0.5 rounded-md bg-black/95 text-white border border-gray-700 shadow-sm">
                        {dot.start.label}
                      </span>
                    </div>
                  </foreignObject>
                )}
              </g>

              {/* End Point */}
              <g>
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="3"
                  fill={lineColor}
                  filter="url(#glow)"
                />
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="3"
                  fill={lineColor}
                  opacity="0.5"
                >
                  <animate attributeName="r" from="3" to="12" dur="2s" begin="0.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.6" to="0" dur="2s" begin="0.5s" repeatCount="indefinite" />
                </circle>

                {showLabels && dot.end.label && (
                  <foreignObject
                    x={endPoint.x - 50}
                    y={endPoint.y - 35}
                    width="100"
                    height="30"
                    className="pointer-events-none"
                  >
                    <div className="flex items-center justify-center h-full">
                      <span className="text-sm font-medium px-2 py-0.5 rounded-md bg-black/95 text-white border border-gray-700 shadow-sm">
                        {dot.end.label}
                      </span>
                    </div>
                  </foreignObject>
                )}
              </g>
            </g>
          )
        })}
      </svg>

    </div>
  )
}

export function WorldMap({ data }: { data: WorldMapData }) {
  const connections = data.connections ?? []
  const dots: MapDot[] = connections.map((c) => ({
    start: { lat: c.startLat, lng: c.startLng, label: c.startLabel ?? undefined },
    end: { lat: c.endLat, lng: c.endLng, label: c.endLabel ?? undefined },
  }))

  return (
    <section className="w-full bg-background px-8 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        {(data.heading || data.description) && (
          <div className="mb-8 text-center md:mb-12">
            {data.heading && (
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                {data.heading}
              </h2>
            )}
            {data.description && (
              <p className="mx-auto mt-4 max-w-3xl text-foreground/70">
                {data.description}
              </p>
            )}
          </div>
        )}
        <WorldMapCanvas
          dots={dots}
          lineColor={data.lineColor ?? '#0ea5e9'}
          showLabels={data.showLabels ?? true}
          loop={data.loop ?? true}
        />
      </div>
    </section>
  )
}

import React from 'react'
import DottedMap from 'dotted-map'
import type { Page } from '@/payload-types'
import { cityCoordinates } from '@/lib/city-coordinates'

type WorldMapData = Extract<NonNullable<Page['layout']>[number], { blockType: 'worldMap' }>

interface MapDot {
  start: { lat: number; lng: number; label?: string }
  end: { lat: number; lng: number; label?: string }
}

function projectPoint(lat: number, lng: number) {
  const x = (lng + 180) * (800 / 360)
  const y = (90 - lat) * (400 / 180)
  return { x, y }
}

function createCurvedPath(start: { x: number; y: number }, end: { x: number; y: number }) {
  const midX = (start.x + end.x) / 2
  const midY = Math.min(start.y, end.y) - 50
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`
}

function WorldMapCanvas({
  dots = [],
  lineColor = '#0ea5e9',
  dotColor = '#FFFF7F40',
  showLabels = true,
  animationDuration = 2,
  loop = true,
}: {
  dots: MapDot[]
  lineColor?: string
  dotColor?: string
  showLabels?: boolean
  animationDuration?: number
  loop?: boolean
}) {
  // dotted-map runs server-side only — no JS shipped to client
  const map = new DottedMap({ height: 100, grid: 'diagonal' })
  const svgMap = map.getSVG({
    radius: 0.22,
    color: dotColor,
    shape: 'circle',
    backgroundColor: 'black',
  })

  const staggerDelay = 0.3
  const totalAnimationTime = dots.length * staggerDelay + animationDuration
  const pauseTime = 2
  const fullCycleDuration = totalAnimationTime + pauseTime

  return (
    <div className="w-full aspect-[2/1] md:aspect-[2.5/1] lg:aspect-[2/1] bg-background rounded-lg relative font-sans overflow-hidden [will-change:transform] [transform:translateZ(0)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,white,white_90%,transparent)] pointer-events-none select-none object-cover [will-change:transform] [transform:translateZ(0)]"
        alt="world map"
        loading="lazy"
        draggable={false}
      />
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none [will-change:transform] [transform:translateZ(0)]"
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

        {/* Animated arc paths — pure SVG SMIL */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng)
          const endPoint = projectPoint(dot.end.lat, dot.end.lng)
          const d = createCurvedPath(startPoint, endPoint)
          const delay = i * staggerDelay

          return (
            <g key={`path-${i}`}>
              <path
                d={d}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                strokeDasharray="1"
                pathLength="1"
                strokeDashoffset="1"
              >
                {loop ? (
                  <animate
                    attributeName="stroke-dashoffset"
                    values={`1;0;0;1`}
                    keyTimes={`0;${(animationDuration / fullCycleDuration).toFixed(3)};${((totalAnimationTime - delay) / fullCycleDuration).toFixed(3)};1`}
                    dur={`${fullCycleDuration}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                ) : (
                  <animate
                    attributeName="stroke-dashoffset"
                    from="1"
                    to="0"
                    dur={`${animationDuration}s`}
                    begin={`${delay}s`}
                    fill="freeze"
                  />
                )}
              </path>
            </g>
          )
        })}

        {/* Static dots + pulse rings */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng)
          const endPoint = projectPoint(dot.end.lat, dot.end.lng)

          return (
            <g key={`points-${i}`}>
              <circle cx={startPoint.x} cy={startPoint.y} r="3" fill={lineColor} filter="url(#glow)" />
              <circle cx={startPoint.x} cy={startPoint.y} r="3" fill={lineColor} opacity="0.5">
                <animate attributeName="r" from="3" to="12" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
              </circle>

              {showLabels && dot.start.label && (
                <foreignObject x={startPoint.x - 50} y={startPoint.y - 35} width="100" height="30" className="pointer-events-none">
                  <div className="flex items-center justify-center h-full">
                    <span className="text-sm font-medium px-2 py-0.5 rounded-md bg-black/95 text-white border border-gray-700 shadow-sm">
                      {dot.start.label}
                    </span>
                  </div>
                </foreignObject>
              )}

              <circle cx={endPoint.x} cy={endPoint.y} r="3" fill={lineColor} filter="url(#glow)" />
              <circle cx={endPoint.x} cy={endPoint.y} r="3" fill={lineColor} opacity="0.5">
                <animate attributeName="r" from="3" to="12" dur="2s" begin="0.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0" dur="2s" begin="0.5s" repeatCount="indefinite" />
              </circle>

              {showLabels && dot.end.label && (
                <foreignObject x={endPoint.x - 50} y={endPoint.y - 35} width="100" height="30" className="pointer-events-none">
                  <div className="flex items-center justify-center h-full">
                    <span className="text-sm font-medium px-2 py-0.5 rounded-md bg-black/95 text-white border border-gray-700 shadow-sm">
                      {dot.end.label}
                    </span>
                  </div>
                </foreignObject>
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export function WorldMap({ data, descriptionHtml = '' }: { data: WorldMapData; descriptionHtml?: string }) {
  const connections = data.connections ?? []
  const dots: MapDot[] = []
  for (const c of connections) {
    const start = c.startCity ? cityCoordinates[c.startCity] : null
    const end = c.endCity ? cityCoordinates[c.endCity] : null
    if (!start || !end) continue
    dots.push({
      start: { lat: start.lat, lng: start.lng, label: start.label },
      end: { lat: end.lat, lng: end.lng, label: end.label },
    })
  }

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
            {descriptionHtml && (
              <div
                className="prose prose-invert mx-auto mt-4 max-w-5xl text-foreground/70 prose-strong:text-foreground prose-em:text-foreground/80"
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
              />
            )}
          </div>
        )}
        {/* Stats */}
        {data.stats && data.stats.length > 0 && (
          <div className="mb-10 flex flex-wrap items-center justify-center gap-8 md:gap-24">
            {data.stats.map((stat, i) => (
              <div key={stat.id ?? i} className="text-center">
                <p
                  className="text-3xl font-extrabold md:text-6xl lg:text-7xl"
                  style={{ color: data.statsColor ?? '#facc15' }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-foreground/60 md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}

        <WorldMapCanvas
          dots={dots}
          lineColor={data.lineColor ?? '#0ea5e9'}
          dotColor={data.dotColor ?? '#FFFF7F40'}
          showLabels={data.showLabels ?? true}
          loop={data.loop ?? true}
        />
      </div>
    </section>
  )
}

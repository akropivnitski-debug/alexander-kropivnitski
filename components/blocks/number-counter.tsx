'use client'

import React, { useEffect, useRef, useState } from 'react'
import type { Page } from '@/payload-types'

type NumberCounterData = Extract<NonNullable<Page['layout']>[number], { blockType: 'numberCounter' }>

function Counter({ value, prefix, suffix, label, accentColor }: {
  value: number
  prefix?: string | null
  suffix?: string | null
  label: string
  accentColor?: string | null
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const duration = 1500
          const start = performance.now()
          function tick(now: number) {
            const t = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - t, 3)
            setCount(Math.round(eased * value))
            if (t < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      <span
        className="text-4xl font-bold md:text-5xl"
        style={accentColor ? { color: accentColor } : undefined}
      >
        {prefix}{count}{suffix}
      </span>
      <span className="text-sm text-foreground/60">{label}</span>
    </div>
  )
}

export function NumberCounter({ data }: { data: NumberCounterData }) {
  const items = data.items ?? []
  if (items.length === 0) return null

  return (
    <section className="w-full bg-background px-8 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-5xl">
        {(data.heading || data.description) && (
          <div className="mb-10 text-center md:mb-14">
            {data.heading && (
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">{data.heading}</h2>
            )}
            {data.description && (
              <p className="mx-auto mt-4 max-w-2xl text-foreground/60">{data.description}</p>
            )}
          </div>
        )}
        <div className={`grid gap-8 ${items.length <= 3 ? 'grid-cols-1 sm:grid-cols-' + items.length : 'grid-cols-2 md:grid-cols-' + Math.min(items.length, 4)}`}>
          {items.map((item, i) => (
            <Counter
              key={item.id ?? i}
              value={item.value}
              prefix={item.prefix}
              suffix={item.suffix}
              label={item.label}
              accentColor={item.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

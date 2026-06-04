'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { resolveImage } from '@/lib/resolveImage'
import type { Page } from '@/payload-types'

type TestimonialsData = Extract<
  NonNullable<Page['layout']>[number],
  { blockType: 'testimonials' }
>

type Testimonial = NonNullable<TestimonialsData['testimonials']>[number]

function getInitials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

function TestimonialSlide({ item, direction }: { item: Testimonial; direction: 'in' | 'out' }) {
  const avatarSrc = resolveImage(item.avatar)

  return (
    <div
      className="flex flex-col items-center text-center transition-all duration-400 ease-in-out"
      style={{
        opacity: direction === 'in' ? 1 : 0,
        transform: direction === 'in' ? 'translateX(0)' : 'translateX(-40px)',
      }}
    >
      <blockquote className="space-y-6">
        <p className="text-xl font-medium leading-relaxed md:text-2xl">
          &ldquo;{item.quote}&rdquo;
        </p>
        <div className="flex items-center justify-center gap-3">
          <Avatar className="size-12">
            {avatarSrc && (
              <AvatarImage
                src={avatarSrc}
                alt={item.authorName}
                loading="lazy"
              />
            )}
            <AvatarFallback>{getInitials(item.authorName)}</AvatarFallback>
          </Avatar>
          <div className="text-left">
            <cite className="text-sm font-medium not-italic">
              {item.authorName}
            </cite>
            {item.authorRole && (
              <span className="text-muted-foreground block text-sm">
                {item.authorRole}
              </span>
            )}
          </div>
        </div>
      </blockquote>
    </div>
  )
}

export function Testimonials({ data }: { data: TestimonialsData }) {
  const items = data.testimonials ?? []
  const [active, setActive] = useState(0)

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % items.length)
  }, [items.length])

  useEffect(() => {
    if (items.length <= 1) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next, items.length])

  if (items.length === 0) return null

  return (
    <section className="bg-background pt-8 pb-16 md:pt-16 md:pb-32">
      <div className="mx-auto max-w-4xl space-y-8 px-6 md:space-y-16">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium lg:text-5xl">{data.heading}</h2>
          {data.description && (
            <p className="text-muted-foreground">{data.description}</p>
          )}
        </div>

        <div className="relative min-h-[200px]">
          <TestimonialSlide key={active} item={items[active]} direction="in" />
        </div>

        {items.length > 1 && (
          <div className="flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? 'w-6 bg-foreground'
                    : 'w-2 bg-foreground/30 hover:bg-foreground/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

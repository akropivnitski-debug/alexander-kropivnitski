'use client'

import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
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

function TestimonialCard({ item }: { item: Testimonial }) {
  const avatarSrc = resolveImage(item.avatar)
  const logoSrc = resolveImage(item.logo)
  const isFeatured = item.featured

  return (
    <Card
      className={
        isFeatured
          ? 'grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2'
          : undefined
      }
    >
      {isFeatured && logoSrc && (
        <CardHeader>
          <img
            className="h-6 w-fit invert"
            src={logoSrc}
            alt="Company logo"
            height={24}
          />
        </CardHeader>
      )}
      <CardContent className={isFeatured ? undefined : 'h-full pt-6'}>
        <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
          <p className={isFeatured ? 'text-xl font-medium' : undefined}>
            {item.quote}
          </p>
          <div className="grid grid-cols-[auto_1fr] items-center gap-3">
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
            <div>
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
      </CardContent>
    </Card>
  )
}

export function Testimonials({ data }: { data: TestimonialsData }) {
  const items = data.testimonials ?? []
  if (items.length === 0) return null

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium lg:text-5xl">{data.heading}</h2>
          {data.description && <p>{data.description}</p>}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          {items.map((item, i) => (
            <TestimonialCard key={item.id ?? i} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import Image from 'next/image'
import { resolveImage } from '@/lib/resolveImage'
import type { Page } from '@/payload-types'

type ImageSliderData = Extract<
  NonNullable<Page['layout']>[number],
  { blockType: 'imageSlider' }
>

export function ImageSlider({ data }: { data: ImageSliderData }) {
  const items = data.images ?? []
  if (items.length === 0) return null

  const speed = data.speed ?? 20

  // Duplicate for seamless loop
  const allItems = [...items, ...items]

  return (
    <section className="relative w-full overflow-hidden bg-background py-8 md:py-12">
      <div
        className="image-slider-mask w-full"
        style={{
          mask: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMask: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div
          className="image-slider-scroll flex w-max gap-6"
          style={{ '--slider-speed': `${speed}s` } as React.CSSProperties}
        >
          {allItems.map((item, i) => {
            const src = resolveImage(item.image)
            if (!src) return null
            return (
              <div
                key={i}
                className="image-slider-item shrink-0 overflow-hidden rounded-xl shadow-2xl"
              >
                <Image
                  src={src}
                  alt={item.alt || `Gallery image ${(i % items.length) + 1}`}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

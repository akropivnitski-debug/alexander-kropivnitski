import React from 'react'
import Image from 'next/image'
import type { Page } from '@/payload-types'
import { resolveImage } from '@/lib/resolveImage'

type SplitSectionData = Extract<NonNullable<Page['layout']>[number], { blockType: 'splitSection' }>

export function SplitSection({
  data,
  descriptionHtml = '',
}: {
  data: SplitSectionData
  descriptionHtml?: string
}) {
  const imageSrc = resolveImage(data.image)
  const isImageLeft = data.layout === 'imageLeft'

  return (
    <section className="w-full bg-background px-8 py-16 md:px-12 md:py-24">
      <div className={`mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16 ${isImageLeft ? '' : ''}`}>
        {/* Image */}
        <div className={`relative overflow-hidden rounded-2xl ${isImageLeft ? 'md:order-1' : 'md:order-2'}`}>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={data.heading}
              width={800}
              height={600}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-auto w-full object-cover"
            />
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center bg-foreground/5 text-foreground/30">
              No image
            </div>
          )}
        </div>

        {/* Text */}
        <div className={isImageLeft ? 'md:order-2' : 'md:order-1'}>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">{data.heading}</h2>
          {descriptionHtml && (
            <div
              className="prose prose-invert mt-4 max-w-none text-foreground/70 prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />
          )}
          {data.buttonLabel && data.buttonHref && (
            <a
              href={data.buttonHref}
              className="mt-6 inline-flex items-center rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              {data.buttonLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

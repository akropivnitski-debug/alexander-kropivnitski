import React from 'react'
import type { Page } from '@/payload-types'

type VideoSectionData = Extract<NonNullable<Page['layout']>[number], { blockType: 'videoSection' }>

function getEmbedUrl(url: string): string | null {
  // YouTube
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?#]+)/)
  if (ytMatch) return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}`
  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`
  return null
}

export function VideoSection({ data }: { data: VideoSectionData }) {
  const embedUrl = getEmbedUrl(data.videoUrl)
  if (!embedUrl) return null

  const isSplit = data.layout === 'split'

  return (
    <section className="w-full bg-background px-8 py-16 md:px-12 md:py-24">
      <div className={`mx-auto ${isSplit ? 'grid max-w-7xl items-center gap-10 md:grid-cols-2' : 'max-w-4xl'}`}>
        {!isSplit && (data.heading || data.description) && (
          <div className="mb-8 text-center">
            {data.heading && (
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">{data.heading}</h2>
            )}
            {data.description && (
              <p className="mx-auto mt-4 max-w-2xl text-foreground/60">{data.description}</p>
            )}
          </div>
        )}

        <div
          className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-black"
          style={{ aspectRatio: data.aspectRatio ?? '16/9' }}
        >
          <iframe
            src={embedUrl}
            title={data.heading ?? 'Video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            loading="lazy"
          />
        </div>

        {isSplit && (data.heading || data.description) && (
          <div>
            {data.heading && (
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">{data.heading}</h2>
            )}
            {data.description && (
              <p className="mt-4 text-foreground/60">{data.description}</p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

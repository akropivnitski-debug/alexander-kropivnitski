import React from 'react'
import { lexicalToHtml } from '@/lib/lexicalToHtml'
import type { Page } from '@/payload-types'

type AboutSimpleData = Extract<
  NonNullable<Page['layout']>[number],
  { blockType: 'aboutSimple' }
>

export function AboutSimple({ data }: { data: AboutSimpleData }) {
  const descriptionHtml = lexicalToHtml(data.description)

  return (
    <section className="w-full bg-background px-6 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        {data.heading && (
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {data.heading}
          </h2>
        )}

        {descriptionHtml && (
          <div
            className="prose prose-invert mt-6 max-w-none text-foreground/80 prose-strong:text-foreground prose-em:text-foreground/80 prose-li:marker:text-foreground/50"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
        )}
      </div>
    </section>
  )
}

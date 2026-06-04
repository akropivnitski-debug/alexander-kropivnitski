import { Quote } from 'lucide-react'
import type { Page } from '@/payload-types'

type BlockquoteData = Extract<NonNullable<Page['layout']>[number], { blockType: 'blockquote' }>

export function Blockquote({ data }: { data: BlockquoteData }) {
  return (
    <section className="w-full bg-background px-6 py-12 md:px-12 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <Quote className="mx-auto mb-6 size-8 text-foreground/20" strokeWidth={1} />
        <blockquote className="text-xl font-medium leading-relaxed text-foreground md:text-2xl lg:text-3xl">
          &ldquo;{data.quote}&rdquo;
        </blockquote>
        {(data.author || data.role) && (
          <div className="mt-6">
            {data.author && <p className="font-semibold text-foreground">{data.author}</p>}
            {data.role && <p className="mt-1 text-sm text-foreground/60">{data.role}</p>}
          </div>
        )}
      </div>
    </section>
  )
}

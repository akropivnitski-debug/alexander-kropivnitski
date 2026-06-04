'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { Page } from '@/payload-types'

type FaqData = Extract<NonNullable<Page['layout']>[number], { blockType: 'faq' }>

export function Faq({ data }: { data: FaqData }) {
  const items = data.items ?? []
  if (items.length === 0) return null

  return (
    <section className="w-full bg-background px-6 py-12 md:px-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        {(data.heading || data.description) && (
          <div className="mb-10 text-center">
            {data.heading && <h2 className="text-3xl font-bold text-foreground md:text-4xl">{data.heading}</h2>}
            {data.description && <p className="mt-4 text-foreground/60">{data.description}</p>}
          </div>
        )}
        <div className="divide-y divide-foreground/10 rounded-xl border border-foreground/10">
          {items.map((item, i) => (
            <AccordionItem key={item.id ?? i} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        className="flex w-full items-center justify-between px-6 py-5 text-left text-base font-medium text-foreground transition-colors hover:text-foreground/80"
        onClick={() => setOpen(!open)}
        type="button"
      >
        {question}
        <ChevronDown
          className={`size-4 shrink-0 text-foreground/40 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className="grid transition-all duration-200"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm text-foreground/60">{answer}</p>
        </div>
      </div>
    </div>
  )
}

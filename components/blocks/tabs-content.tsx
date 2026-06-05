'use client'

import React, { useState } from 'react'
import type { Page } from '@/payload-types'
import { resolveIcon } from '@/lib/iconMap'

type TabsContentData = Extract<NonNullable<Page['layout']>[number], { blockType: 'tabsContent' }>

export function TabsContent({
  data,
  tabsHtml = [],
}: {
  data: TabsContentData
  tabsHtml?: string[]
}) {
  const tabs = data.tabs ?? []
  const [active, setActive] = useState(0)
  if (tabs.length === 0) return null

  return (
    <section className="w-full bg-background px-8 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        {data.heading && (
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
            {data.heading}
          </h2>
        )}
        <div className="mb-6 flex flex-wrap justify-center gap-2 rounded-xl border border-foreground/10 bg-foreground/[0.03] p-1.5">
          {tabs.map((tab, i) => {
            const Icon = resolveIcon(tab.icon)
            return (
              <button
                key={tab.id ?? i}
                onClick={() => setActive(i)}
                aria-label={`Show ${tab.label} tab`}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  active === i
                    ? 'bg-foreground text-background shadow-sm'
                    : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                {Icon && <Icon className="h-4 w-4" />}
                {tab.label}
              </button>
            )
          })}
        </div>
        <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] p-6 md:p-8">
          {tabsHtml[active] ? (
            <div
              className="prose prose-invert max-w-none text-foreground/80 prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: tabsHtml[active] }}
            />
          ) : (
            <p className="text-foreground/60">No content for this tab.</p>
          )}
        </div>
      </div>
    </section>
  )
}

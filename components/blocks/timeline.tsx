import * as LucideIcons from 'lucide-react'
import type { Page } from '@/payload-types'

type TimelineData = Extract<NonNullable<Page['layout']>[number], { blockType: 'timeline' }>

function resolveIcon(name?: string | null) {
  if (!name) return null
  const icons = LucideIcons as Record<string, unknown>
  const icon = icons[name] || icons[name + 'Icon']
  if (typeof icon === 'function' || (typeof icon === 'object' && icon !== null)) {
    return icon as React.ComponentType<{ className?: string; strokeWidth?: number }>
  }
  return null
}

export function Timeline({ data }: { data: TimelineData }) {
  const events = data.events ?? []
  if (events.length === 0) return null

  return (
    <section className="w-full bg-background px-6 py-12 md:px-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        {(data.heading || data.description) && (
          <div className="mb-12 text-center">
            {data.heading && <h2 className="text-3xl font-bold text-foreground md:text-4xl">{data.heading}</h2>}
            {data.description && <p className="mt-4 text-foreground/60">{data.description}</p>}
          </div>
        )}
        <div className="relative border-l-2 border-foreground/10 pl-8 md:pl-12">
          {events.map((event, i) => {
            const Icon = resolveIcon(event.icon)
            return (
              <div key={event.id ?? i} className="relative mb-10 last:mb-0">
                <div className="absolute -left-[calc(2rem+1px)] flex h-8 w-8 items-center justify-center rounded-full border-2 border-foreground/10 bg-background md:-left-[calc(3rem+1px)]">
                  {Icon ? <Icon className="size-4 text-foreground/60" strokeWidth={1.5} /> : <div className="size-2 rounded-full bg-foreground/40" />}
                </div>
                <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-foreground/40">{event.date}</span>
                <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                {event.description && <p className="mt-2 text-sm text-foreground/60">{event.description}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

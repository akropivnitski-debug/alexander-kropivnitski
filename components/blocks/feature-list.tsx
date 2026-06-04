import * as LucideIcons from 'lucide-react'
import type { Page } from '@/payload-types'

type FeatureListData = Extract<NonNullable<Page['layout']>[number], { blockType: 'featureList' }>

function resolveIcon(name?: string | null) {
  if (!name) return null
  const icons = LucideIcons as Record<string, unknown>
  const icon = icons[name] || icons[name + 'Icon']
  if (typeof icon === 'function' || (typeof icon === 'object' && icon !== null)) {
    return icon as React.ComponentType<{ className?: string; strokeWidth?: number }>
  }
  return null
}

const colsClass: Record<string, string> = {
  '1': 'md:grid-cols-1',
  '2': 'md:grid-cols-2',
  '3': 'md:grid-cols-3',
}

export function FeatureList({ data }: { data: FeatureListData }) {
  const items = data.items ?? []
  if (items.length === 0) return null
  const cols = data.columns || '2'

  return (
    <section className="w-full bg-background px-6 py-12 md:px-12 md:py-20">
      <div className="mx-auto max-w-5xl">
        {(data.heading || data.description) && (
          <div className="mb-10 text-center">
            {data.heading && <h2 className="text-3xl font-bold text-foreground md:text-4xl">{data.heading}</h2>}
            {data.description && <p className="mt-4 text-foreground/60 mx-auto max-w-2xl">{data.description}</p>}
          </div>
        )}
        <div className={`grid gap-8 ${colsClass[cols] ?? 'md:grid-cols-2'}`}>
          {items.map((item, i) => {
            const Icon = resolveIcon(item.icon)
            return (
              <div key={item.id ?? i} className="flex gap-4">
                {Icon && (
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/5">
                    <Icon className="size-5 text-foreground/70" strokeWidth={1.5} />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  {item.description && <p className="mt-1 text-sm text-foreground/60">{item.description}</p>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

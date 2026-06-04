import type { Page } from '@/payload-types'

type StatsData = Extract<NonNullable<Page['layout']>[number], { blockType: 'stats' }>

export function Stats({ data }: { data: StatsData }) {
  const items = data.items ?? []
  if (items.length === 0) return null

  return (
    <section className="w-full bg-background px-6 py-12 md:px-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 md:space-y-16">
        {(data.heading || data.description) && (
          <div className="mx-auto max-w-xl space-y-4 text-center">
            {data.heading && <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">{data.heading}</h2>}
            {data.description && <p className="text-foreground/60">{data.description}</p>}
          </div>
        )}
        <div className="grid gap-8 divide-y text-center md:grid-cols-{items.length > 4 ? 4 : items.length} md:gap-2 md:divide-x md:divide-y-0" style={{ gridTemplateColumns: `repeat(${Math.min(items.length, 4)}, minmax(0, 1fr))` }}>
          {items.map((item, i) => (
            <div key={item.id ?? i} className="space-y-2 pt-6 md:pt-0">
              <div className="text-4xl font-bold text-foreground md:text-5xl">{item.value}</div>
              <p className="text-sm text-foreground/60">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

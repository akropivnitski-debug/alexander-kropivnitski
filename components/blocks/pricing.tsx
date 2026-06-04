import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Page } from '@/payload-types'

type PricingData = Extract<NonNullable<Page['layout']>[number], { blockType: 'pricing' }>

export function Pricing({ data }: { data: PricingData }) {
  const tiers = data.tiers ?? []
  if (tiers.length === 0) return null

  return (
    <section className="w-full bg-background px-6 py-12 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        {(data.heading || data.description) && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            {data.heading && <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">{data.heading}</h2>}
            {data.description && <p className="mt-4 text-foreground/60">{data.description}</p>}
          </div>
        )}
        <div className={cn('grid gap-6', tiers.length === 2 && 'md:grid-cols-2', tiers.length >= 3 && 'md:grid-cols-3')}>
          {tiers.map((tier, i) => {
            const features = tier.features ?? []
            return (
              <div
                key={tier.id ?? i}
                className={cn(
                  'relative flex flex-col rounded-2xl border p-8',
                  tier.highlighted
                    ? 'border-foreground/30 bg-foreground/[0.03]'
                    : 'border-foreground/10',
                )}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
                    Popular
                  </span>
                )}
                <h3 className="text-lg font-medium text-foreground">{tier.name}</h3>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                  {tier.period && <span className="pb-1 text-sm text-foreground/60">{tier.period}</span>}
                </div>
                {tier.description && <p className="mt-3 text-sm text-foreground/60">{tier.description}</p>}
                {tier.buttonLabel && tier.buttonHref && (
                  <a
                    href={tier.buttonHref}
                    className={cn(
                      'mt-6 block rounded-lg px-4 py-2.5 text-center text-sm font-medium transition-colors',
                      tier.highlighted
                        ? 'bg-foreground text-background hover:bg-foreground/90'
                        : 'border border-foreground/20 text-foreground hover:bg-foreground/[0.05]',
                    )}
                  >
                    {tier.buttonLabel}
                  </a>
                )}
                {features.length > 0 && (
                  <>
                    <hr className="my-6 border-foreground/10" />
                    <ul className="space-y-3">
                      {features.map((f, fi) => (
                        <li key={fi} className="flex items-center gap-2 text-sm text-foreground/70">
                          <Check className="size-4 shrink-0 text-foreground/40" />
                          {f.text}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

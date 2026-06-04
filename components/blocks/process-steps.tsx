import * as LucideIcons from 'lucide-react'
import type { Page } from '@/payload-types'

type ProcessStepsData = Extract<NonNullable<Page['layout']>[number], { blockType: 'processSteps' }>

function resolveIcon(name?: string | null) {
  if (!name) return null
  const icons = LucideIcons as Record<string, unknown>
  const icon = icons[name] || icons[name + 'Icon']
  if (typeof icon === 'function' || (typeof icon === 'object' && icon !== null)) {
    return icon as React.ComponentType<{ className?: string; strokeWidth?: number }>
  }
  return null
}

export function ProcessSteps({ data }: { data: ProcessStepsData }) {
  const steps = data.steps ?? []
  if (steps.length === 0) return null

  return (
    <section className="w-full bg-background px-6 py-12 md:px-12 md:py-20">
      <div className="mx-auto max-w-5xl">
        {(data.heading || data.description) && (
          <div className="mb-12 text-center">
            {data.heading && <h2 className="text-3xl font-bold text-foreground md:text-4xl">{data.heading}</h2>}
            {data.description && <p className="mt-4 text-foreground/60 mx-auto max-w-2xl">{data.description}</p>}
          </div>
        )}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = resolveIcon(step.icon)
            return (
              <div key={step.id ?? i} className="relative rounded-xl border border-foreground/10 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-sm font-bold text-foreground">
                    {i + 1}
                  </span>
                  {Icon && <Icon className="size-5 text-foreground/60" strokeWidth={1.5} />}
                </div>
                <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { cn } from '@/lib/utils'
import type { Page } from '@/payload-types'

type BannerData = Extract<NonNullable<Page['layout']>[number], { blockType: 'banner' }>

const variantStyles: Record<string, string> = {
  default: 'bg-foreground/5 border-foreground/10',
  accent: 'bg-foreground text-background',
  subtle: 'bg-transparent border-foreground/10 border-y',
}

export function Banner({ data }: { data: BannerData }) {
  const variant = data.variant || 'default'

  return (
    <section className={cn('w-full px-6 py-4 md:px-12 md:py-5', variantStyles[variant] ?? variantStyles.default)}>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-6">
        <p className={cn('text-sm font-medium', variant === 'accent' ? 'text-background' : 'text-foreground')}>
          {data.text}
        </p>
        {data.buttonLabel && data.buttonHref && (
          <a
            href={data.buttonHref}
            className={cn(
              'shrink-0 rounded-lg px-4 py-1.5 text-xs font-medium transition-colors',
              variant === 'accent'
                ? 'bg-background text-foreground hover:bg-background/90'
                : 'bg-foreground text-background hover:bg-foreground/90',
            )}
          >
            {data.buttonLabel}
          </a>
        )}
      </div>
    </section>
  )
}

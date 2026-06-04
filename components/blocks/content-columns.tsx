import type { Page } from '@/payload-types'

type ContentColumnsData = Extract<NonNullable<Page['layout']>[number], { blockType: 'contentColumns' }>

export function ContentColumns({ data, columnsHtml }: { data: ContentColumnsData; columnsHtml: string[] }) {
  if (!columnsHtml || columnsHtml.length === 0) return null

  const columns = data.columns ?? []

  return (
    <section className="w-full bg-background px-6 py-12 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        {data.heading && (
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">{data.heading}</h2>
        )}
        <div className={`grid gap-8 md:gap-12 ${columnsHtml.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
          {columnsHtml.map((html, i) => (
            <div key={i}>
              {columns[i]?.title && (
                <h3 className="mb-4 text-lg font-semibold text-foreground">{columns[i].title}</h3>
              )}
              <div
                className="prose prose-invert max-w-none text-foreground/80 prose-li:marker:text-foreground/50"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

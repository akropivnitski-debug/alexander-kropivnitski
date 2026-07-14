import { rolesFoldedInto } from '@/lib/roleRedirects'

export function RolesCovered({ slug }: { slug: string }) {
  const roles = rolesFoldedInto(slug)
  if (roles.length === 0) return null

  return (
    <section className="w-full border-t border-foreground/10 bg-background px-8 py-12 md:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Roles This Covers
        </h2>
        <div className="flex flex-wrap gap-3">
          {roles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-foreground/15 px-4 py-2 text-sm text-foreground/70"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

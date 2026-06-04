import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import type { Page } from '@/payload-types'

type ContactInfoData = Extract<NonNullable<Page['layout']>[number], { blockType: 'contactInfo' }>

export function ContactInfo({ data }: { data: ContactInfoData }) {
  const details = [
    data.email && { icon: Mail, label: data.email, href: `mailto:${data.email}` },
    data.phone && { icon: Phone, label: data.phone, href: `tel:${data.phone}` },
    data.location && { icon: MapPin, label: data.location },
  ].filter(Boolean) as { icon: React.ComponentType<{ className?: string }>; label: string; href?: string }[]

  const socials = [
    data.linkedinUrl && { icon: ExternalLink, href: data.linkedinUrl, label: 'LinkedIn' },
    data.githubUrl && { icon: ExternalLink, href: data.githubUrl, label: 'GitHub' },
    data.twitterUrl && { icon: ExternalLink, href: data.twitterUrl, label: 'Twitter' },
  ].filter(Boolean) as { icon: React.ComponentType<{ className?: string }>; href: string; label: string }[]

  return (
    <section className="w-full bg-background px-6 py-12 md:px-12 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        {data.heading && <h2 className="text-3xl font-bold text-foreground md:text-4xl">{data.heading}</h2>}
        {data.description && <p className="mt-4 text-foreground/60">{data.description}</p>}

        {details.length > 0 && (
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {details.map((d, i) => {
              const content = (
                <div className="flex items-center gap-3 text-foreground/70 transition-colors hover:text-foreground">
                  <d.icon className="size-5" />
                  <span className="text-sm">{d.label}</span>
                </div>
              )
              return d.href ? (
                <a key={i} href={d.href}>{content}</a>
              ) : (
                <div key={i}>{content}</div>
              )
            })}
          </div>
        )}

        {socials.length > 0 && (
          <div className="mt-8 flex justify-center gap-4">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 text-foreground/60 transition-colors hover:bg-foreground/5 hover:text-foreground"
                aria-label={s.label}
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

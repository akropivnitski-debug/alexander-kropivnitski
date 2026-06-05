'use client'

import React, { useState } from 'react'
import { Mail } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { ContactFormPopup } from '@/components/ContactFormPopup'
import type { Page } from '@/payload-types'

type CtaData = Extract<NonNullable<Page['layout']>[number], { blockType: 'cta' }>

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function Cta({ data }: { data: CtaData }) {
  const buttonColor = data.buttonColor ?? '#facc15'
  const [ref, inView] = useInView({ threshold: 0.2 })
  const isMailto = data.buttonHref?.startsWith('mailto:')
  const [popupOpen, setPopupOpen] = useState(false)

  return (
    <section className="relative w-full overflow-hidden bg-background px-8 py-12 md:px-12 md:py-16">
      <div ref={ref} className="mx-auto max-w-3xl text-center">
        <h2
          className="reveal text-4xl font-bold text-foreground md:text-5xl lg:text-6xl"
          style={inView ? { animation: 'reveal-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards' } : { opacity: 0 }}
        >
          {data.heading}
        </h2>

        {data.description && (
          <p
            className="reveal mx-auto mt-6 max-w-xl text-lg text-foreground/60"
            style={inView ? { animation: 'reveal-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards' } : { opacity: 0 }}
          >
            {data.description}
          </p>
        )}

        <div
          className="reveal mt-10 flex flex-col items-center gap-6"
          style={inView ? { animation: 'reveal-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards' } : { opacity: 0 }}
        >
          {isMailto ? (
            <button
              onClick={() => setPopupOpen(true)}
              className="group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold text-black transition-all hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: buttonColor,
                boxShadow: `0 0 20px ${buttonColor}33`,
              }}
            >
              <Mail className="size-5" />
              {data.buttonLabel}
            </button>
          ) : (
            <a
              href={data.buttonHref}
              className="group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold text-black transition-all hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: buttonColor,
                boxShadow: `0 0 20px ${buttonColor}33`,
              }}
            >
              <Mail className="size-5" />
              {data.buttonLabel}
            </a>
          )}

          {(data.linkedinUrl || data.githubUrl) && (
            <div className="flex items-center gap-4">
              {data.githubUrl && (
                <a
                  href={data.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 p-3 text-foreground/50 transition-all hover:border-foreground/20 hover:bg-foreground/10 hover:text-foreground"
                >
                  <GithubIcon className="size-5" />
                </a>
              )}
              {data.linkedinUrl && (
                <a
                  href={data.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 p-3 text-foreground/50 transition-all hover:border-foreground/20 hover:bg-foreground/10 hover:text-foreground"
                >
                  <LinkedinIcon className="size-5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
      {isMailto && (
        <ContactFormPopup
          open={popupOpen}
          onClose={() => setPopupOpen(false)}
          buttonColor={buttonColor}
        />
      )}
    </section>
  )
}

'use client'

import React, { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import type { Footer as FooterType } from '@/payload-types'

const TextHoverEffect = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const gradientRef = useRef<SVGRadialGradientElement>(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const handleMove = (e: MouseEvent) => {
      const rect = svg.getBoundingClientRect()
      const cx = ((e.clientX - rect.left) / rect.width) * 100
      const cy = ((e.clientY - rect.top) / rect.height) * 100
      if (gradientRef.current) {
        gradientRef.current.setAttribute('cx', `${cx}%`)
        gradientRef.current.setAttribute('cy', `${cy}%`)
      }
    }
    svg.addEventListener('mousemove', handleMove)
    return () => svg.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 800 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn('select-none uppercase cursor-pointer', className)}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="25%" stopColor="#facc15" />
              <stop offset="50%" stopColor="#eab308" />
              <stop offset="75%" stopColor="#ca8a04" />
              <stop offset="100%" stopColor="#fef08a" />
            </>
          )}
        </linearGradient>

        <radialGradient
          ref={gradientRef}
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          cx="50%"
          cy="50%"
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 font-[helvetica] font-bold dark:stroke-neutral-800"
        style={{ fontSize: 48, opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-[#facc15] font-[helvetica] font-bold dark:stroke-[#facc1599] footer-stroke-draw"
        style={{ fontSize: 48 }}
      >
        {text}
      </text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] font-bold"
        style={{ fontSize: 48 }}
      >
        {text}
      </text>
    </svg>
  )
}

function SocialIcon({ type, url }: { type: string; url: string }) {
  const icons: Record<string, React.ReactNode> = {
    github: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" />
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
        <path fill="black" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground/50 transition-colors hover:text-foreground"
    >
      {icons[type]}
    </a>
  )
}

export function Footer({ data }: { data: FooterType }) {
  const currentYear = new Date().getFullYear()
  const copyright = data.copyrightText || `© ${currentYear} ${data.logoText || 'Alexander Kropivnitski'}. All rights reserved.`
  const linkGroups = data.linkGroups ?? []

  const socials = [
    data.githubUrl && { type: 'github', url: data.githubUrl },
    data.linkedinUrl && { type: 'linkedin', url: data.linkedinUrl },
    data.facebookUrl && { type: 'facebook', url: data.facebookUrl },
    data.instagramUrl && { type: 'instagram', url: data.instagramUrl },
    data.youtubeUrl && { type: 'youtube', url: data.youtubeUrl },
  ].filter(Boolean) as { type: string; url: string }[]

  return (
    <footer className="relative w-full overflow-hidden bg-background border-t border-foreground/10">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(125% 125% at 50% 10%, #0F0F1166 50%, #facc1520 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-8 pt-16 pb-8 md:px-12">
        {/* Top section — links + socials */}
        {(linkGroups.length > 0 || socials.length > 0) && (
          <div className="mb-12 flex flex-col gap-8 md:flex-row md:justify-between">
            {/* Link groups */}
            {linkGroups.length > 0 && (
              <div className="flex flex-wrap gap-12">
                {linkGroups.map((group, i) => (
                  <div key={group.id ?? i}>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground/60">
                      {group.label}
                    </h3>
                    <ul className="space-y-2">
                      {(group.links ?? []).map((link, j) => (
                        <li key={link.id ?? j}>
                          <a
                            href={link.href}
                            className="text-sm text-foreground/50 transition-colors hover:text-foreground"
                          >
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Social icons */}
            {socials.length > 0 && (
              <div className="flex items-start gap-4">
                {socials.map((s) => (
                  <SocialIcon key={s.type} type={s.type} url={s.url} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Hover text effect */}
        <div className="h-32 md:h-40">
          <TextHoverEffect text={data.logoText || 'ALEXANDER'} />
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-6 md:flex-row">
          <p className="text-xs text-foreground/40">{copyright}</p>
          {data.description && (
            <p className="text-xs text-foreground/40">{data.description}</p>
          )}
        </div>
      </div>
    </footer>
  )
}

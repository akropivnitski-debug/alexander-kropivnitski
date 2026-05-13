'use client'

import React, { useState } from 'react'
import type { Header as HeaderType } from '@/payload-types'

export function Header({ data }: { data: HeaderType }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = data.navItems ?? []

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          {data.logoUrl ? (
            <img
              src={data.logoUrl}
              alt={data.logoAlt ?? 'Logo'}
              style={{ height: data.logoHeight ?? 32 }}
              className="w-auto"
            />
          ) : (
            <span className="text-lg font-bold text-foreground">
              {data.logoAlt ?? 'Alexander Kropivnitski'}
            </span>
          )}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item, i) => (
            <a
              key={item.id ?? i}
              href={item.href}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          {data.ctaLabel && data.ctaHref && (
            <a
              href={data.ctaHref}
              className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              {data.ctaLabel}
            </a>
          )}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-foreground/10 px-6 py-6 md:hidden">
          {navItems.map((item, i) => (
            <a
              key={item.id ?? i}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          {data.ctaLabel && data.ctaHref && (
            <a
              href={data.ctaHref}
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-foreground px-5 py-2 text-center text-sm font-medium text-background"
            >
              {data.ctaLabel}
            </a>
          )}
        </nav>
      )}
    </header>
  )
}

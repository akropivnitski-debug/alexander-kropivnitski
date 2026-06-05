'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { DynamicFormPopup } from '@/components/DynamicFormPopup'

interface FormConfig {
  slug: string
  heading?: string | null
  description?: string | null
  recipientEmail: string
  successMessage?: string | null
  submitLabel?: string | null
  buttonColor?: string | null
  fields: {
    name: string
    label: string
    type: string
    placeholder?: string | null
    required?: boolean | null
    width?: string | null
  }[]
}

// Cache fetched forms to avoid re-fetching
const formCache = new Map<string, FormConfig>()

export function FormPopupProvider({ children }: { children: React.ReactNode }) {
  const [activeForm, setActiveForm] = useState<FormConfig | null>(null)
  const [loading, setLoading] = useState(false)

  const openForm = useCallback(async (slug: string) => {
    // Check cache first
    const cached = formCache.get(slug)
    if (cached) {
      setActiveForm(cached)
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`/api/forms?where[slug][equals]=${encodeURIComponent(slug)}&limit=1&depth=0`)
      const data = await res.json()
      const form = data.docs?.[0]
      if (!form) {
        console.error(`[FormPopup] Form not found: ${slug}`)
        setLoading(false)
        return
      }
      const config: FormConfig = {
        slug: form.slug,
        heading: form.heading,
        description: form.popupDescription,
        recipientEmail: form.recipientEmail,
        successMessage: form.successMessage,
        submitLabel: form.submitLabel,
        buttonColor: form.buttonColor,
        fields: (form.fields ?? []).map((f: Record<string, unknown>) => ({
          name: f.name as string,
          label: f.label as string,
          type: f.type as string,
          placeholder: f.placeholder as string | null,
          required: f.required as boolean | null,
          width: f.width as string | null,
        })),
      }
      formCache.set(slug, config)
      setActiveForm(config)
    } catch (err) {
      console.error('[FormPopup] Failed to load form:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  // Intercept clicks on #form:slug links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a, button')
      if (!target) return

      // Check href on <a> tags
      const href = target.getAttribute('href')
      if (href) {
        const match = href.match(/^#form:(.+)$/)
        if (match) {
          e.preventDefault()
          e.stopPropagation()
          openForm(match[1])
          return
        }
      }

      // Check data-form attribute on any element
      const formSlug = target.getAttribute('data-form')
      if (formSlug) {
        e.preventDefault()
        e.stopPropagation()
        openForm(formSlug)
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [openForm])

  // Also handle hash changes (direct navigation to #form:slug)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      const match = hash.match(/^#form:(.+)$/)
      if (match) {
        openForm(match[1])
        // Clear hash without scrolling
        history.replaceState(null, '', window.location.pathname + window.location.search)
      }
    }

    handleHash() // Check on mount
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [openForm])

  return (
    <>
      {children}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-foreground/20 border-t-foreground" />
        </div>
      )}
      {activeForm && (
        <DynamicFormPopup
          form={activeForm}
          open={!!activeForm}
          onClose={() => setActiveForm(null)}
        />
      )}
    </>
  )
}

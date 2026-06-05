'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import { X, Send, CheckCircle, Loader2, Mail } from 'lucide-react'

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: Record<string, unknown>) => string
      remove: (widgetId: string) => void
      reset: (widgetId: string) => void
    }
  }
}

interface FormField {
  name: string
  label: string
  type: string
  placeholder?: string | null
  required?: boolean | null
  width?: string | null
}

interface FormConfig {
  slug: string
  heading?: string | null
  description?: string | null
  recipientEmail: string
  successMessage?: string | null
  submitLabel?: string | null
  buttonColor?: string | null
  fields: FormField[]
}

interface DynamicFormPopupProps {
  form: FormConfig
  open: boolean
  onClose: () => void
}

export function DynamicFormPopup({ form, open, onClose }: DynamicFormPopupProps) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [recipientEmail, setRecipientEmail] = useState('')
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const turnstileRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const buttonColor = form.buttonColor || '#facc15'

  // Load Turnstile script once
  useEffect(() => {
    if (document.getElementById('cf-turnstile-script')) return
    const script = document.createElement('script')
    script.id = 'cf-turnstile-script'
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    document.head.appendChild(script)
  }, [])

  // Render Turnstile widget when popup opens
  useEffect(() => {
    if (!open) return
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
    if (!siteKey) return

    let attempts = 0
    const tryRender = () => {
      if (!window.turnstile || !turnstileRef.current) {
        if (attempts++ < 50) setTimeout(tryRender, 100)
        return
      }
      if (widgetIdRef.current) {
        try { window.turnstile.remove(widgetIdRef.current) } catch {}
        widgetIdRef.current = null
      }
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: siteKey,
        callback: (token: string) => setTurnstileToken(token),
        'error-callback': () => setTurnstileToken(null),
        'expired-callback': () => setTurnstileToken(null),
        theme: 'dark',
        size: 'invisible',
      })
    }
    tryRender()

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try { window.turnstile.remove(widgetIdRef.current) } catch {}
        widgetIdRef.current = null
      }
    }
  }, [open])

  // Dialog management
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    else if (!open && dialog.open) dialog.close()
  }, [open])

  // Reset when opened
  useEffect(() => {
    if (open) {
      setValues({})
      setStatus('idle')
      setErrorMsg('')
      setTurnstileToken(null)
    }
  }, [open])

  const handleCancel = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault()
    onClose()
  }, [onClose])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formSlug: form.slug,
          turnstileToken,
          source: window.location.pathname,
          _hp_name: (document.getElementById('_hp_name') as HTMLInputElement)?.value || '',
          ...values,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong.')
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.reset(widgetIdRef.current)
          setTurnstileToken(null)
        }
        return
      }

      setRecipientEmail(data.recipientEmail)
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again.')
    }
  }

  if (!open) return null

  const inputClass = 'w-full rounded-lg border border-foreground/10 bg-foreground/5 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-foreground/30 focus:outline-none focus:ring-1 focus:ring-foreground/20'

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      className="fixed inset-0 z-50 m-0 flex h-full w-full items-center justify-center bg-transparent p-4 backdrop:bg-black/60 backdrop:backdrop-blur-sm open:flex"
    >
      <div className="relative w-full max-w-md rounded-2xl border border-foreground/10 bg-background p-6 shadow-2xl md:p-8">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-lg p-1.5 text-foreground/40 transition-colors hover:bg-foreground/10 hover:text-foreground"
        >
          <X className="size-5" />
        </button>

        {status === 'success' ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10">
              <CheckCircle className="size-7 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Message Sent!</h3>
            <p className="text-sm text-foreground/60">
              {form.successMessage || 'Thank you for reaching out. I\'ll get back to you soon.'}
            </p>
            <a
              href={`mailto:${recipientEmail}`}
              className="mt-1 flex items-center gap-2 rounded-lg border border-foreground/10 bg-foreground/5 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10"
            >
              <Mail className="size-4 text-foreground/60" />
              {recipientEmail}
            </a>
            <button
              onClick={onClose}
              className="mt-4 rounded-lg px-6 py-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              {form.heading && <h3 className="text-xl font-semibold text-foreground">{form.heading}</h3>}
              {form.description && (
                <p className={`text-sm text-foreground/60 ${form.heading ? 'mt-1.5' : ''}`}>
                  {form.description}
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Honeypot */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="_hp_name">Name</label>
                <input type="text" id="_hp_name" name="_hp_name" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {form.fields.map((field) => {
                  const isFullWidth = field.width !== 'half'
                  const wrapClass = isFullWidth ? 'col-span-2' : 'col-span-2 sm:col-span-1'

                  return (
                    <div key={field.name} className={wrapClass}>
                      {field.label && (
                        <label
                          htmlFor={`form-${field.name}`}
                          className="mb-1.5 block text-sm font-medium text-foreground/80"
                        >
                          {field.label}
                          {field.required && <span className="ml-0.5 text-foreground/30">*</span>}
                        </label>
                      )}
                      {field.type === 'textarea' ? (
                        <textarea
                          id={`form-${field.name}`}
                          required={!!field.required}
                          rows={4}
                          placeholder={field.placeholder || undefined}
                          value={values[field.name] || ''}
                          onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
                          className={`${inputClass} resize-none`}
                        />
                      ) : (
                        <input
                          id={`form-${field.name}`}
                          type={field.type || 'text'}
                          required={!!field.required}
                          placeholder={field.placeholder || undefined}
                          value={values[field.name] || ''}
                          onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
                          className={inputClass}
                        />
                      )}
                    </div>
                  )
                })}
              </div>

              {errorMsg && <p className="text-sm text-red-400">{errorMsg}</p>}

              <div ref={turnstileRef} />

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-black transition-all hover:opacity-90 disabled:opacity-50"
                style={{ backgroundColor: buttonColor }}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    {form.submitLabel || 'Send Message'}
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </dialog>
  )
}

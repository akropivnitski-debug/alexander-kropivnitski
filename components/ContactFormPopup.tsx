'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import { X, Mail, Send, CheckCircle, Loader2 } from 'lucide-react'

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: Record<string, unknown>) => string
      remove: (widgetId: string) => void
      reset: (widgetId: string) => void
    }
  }
}

interface ContactFormPopupProps {
  open: boolean
  onClose: () => void
  buttonColor?: string
  source?: string
}

export function ContactFormPopup({ open, onClose, buttonColor = '#facc15', source }: ContactFormPopupProps) {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [resultEmail, setResultEmail] = useState('')
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const turnstileRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  // Load Turnstile script
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
      // Clean up previous widget
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
    if (open && !dialog.open) {
      dialog.showModal()
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  // Reset form when opened
  useEffect(() => {
    if (open) {
      setEmail('')
      setMessage('')
      setStatus('idle')
      setErrorMsg('')
      setTurnstileToken(null)
    }
  }, [open])

  // Close on escape
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
          email,
          message,
          turnstileToken,
          source: source || window.location.pathname,
          _hp_name: (document.getElementById('_hp_name') as HTMLInputElement)?.value || '',
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong.')
        // Reset Turnstile on error
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.reset(widgetIdRef.current)
          setTurnstileToken(null)
        }
        return
      }

      setResultEmail(data.email)
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again.')
    }
  }

  if (!open) return null

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      className="fixed inset-0 z-50 m-0 flex h-full w-full items-center justify-center bg-transparent p-4 backdrop:bg-black/60 backdrop:backdrop-blur-sm open:flex"
    >
      <div className="relative w-full max-w-md rounded-2xl border border-foreground/10 bg-background p-6 shadow-2xl md:p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-lg p-1.5 text-foreground/40 transition-colors hover:bg-foreground/10 hover:text-foreground"
        >
          <X className="size-5" />
        </button>

        {status === 'success' ? (
          /* Success state */
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10">
              <CheckCircle className="size-7 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Message Sent!</h3>
            <p className="text-sm text-foreground/60">
              Thank you for reaching out. I'll get back to you soon at:
            </p>
            <a
              href={`mailto:${resultEmail}`}
              className="mt-1 flex items-center gap-2 rounded-lg border border-foreground/10 bg-foreground/5 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10"
            >
              <Mail className="size-4 text-foreground/60" />
              {resultEmail}
            </a>
            <button
              onClick={onClose}
              className="mt-4 rounded-lg px-6 py-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Close
            </button>
          </div>
        ) : (
          /* Form state */
          <>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground">Get in Touch</h3>
              <p className="mt-1.5 text-sm text-foreground/60">
                Drop me a message and I'll reply within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Honeypot — hidden from humans, bots fill it */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="_hp_name">Name</label>
                <input type="text" id="_hp_name" name="_hp_name" tabIndex={-1} autoComplete="off" />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-foreground/80">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-foreground/10 bg-foreground/5 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-foreground/30 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-foreground/80">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  minLength={5}
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg border border-foreground/10 bg-foreground/5 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-foreground/30 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                />
              </div>

              {errorMsg && (
                <p className="text-sm text-red-400">{errorMsg}</p>
              )}

              {/* Turnstile invisible widget container */}
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
                    Send Message
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

import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

// In-memory rate limiter (per-IP, resets on redeploy)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW = 60_000 // 1 minute
const RATE_LIMIT_MAX = 5 // 5 submissions per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return false
  }
  entry.count++
  return entry.count > RATE_LIMIT_MAX
}

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    console.warn('[contact] TURNSTILE_SECRET_KEY not set — skipping verification')
    return true
  }
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    })
    const data = await res.json()
    return data.success === true
  } catch (err) {
    console.error('[contact] Turnstile verification failed:', err)
    return false
  }
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

  // Rate limiting
  if (isRateLimited(ip)) {
    console.warn(`[contact] Rate limited: ${ip}`)
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const { formSlug, turnstileToken, source, _hp_name, ...fieldValues } = body as {
    formSlug?: string
    turnstileToken?: string
    source?: string
    _hp_name?: string
    [key: string]: unknown
  }

  const payload = await getPayload({ config })

  // Honeypot check
  if (_hp_name) {
    console.warn(`[contact] Honeypot triggered from ${ip}`)
    try {
      await payload.create({
        collection: 'form-submissions',
        data: {
          email: (fieldValues.email as string) || 'honeypot@bot.blocked',
          data: fieldValues,
          source: source || '',
          ip,
          blocked: true,
          blockReason: 'Honeypot field filled',
        },
      })
    } catch { /* best effort */ }
    return NextResponse.json({ success: true, recipientEmail: 'blocked@example.com' })
  }

  // Turnstile verification
  if (!turnstileToken || typeof turnstileToken !== 'string') {
    console.warn(`[contact] Missing Turnstile token from ${ip}`)
    return NextResponse.json({ error: 'Bot verification failed. Please try again.' }, { status: 403 })
  }

  const turnstileValid = await verifyTurnstile(turnstileToken, ip)
  if (!turnstileValid) {
    console.warn(`[contact] Turnstile verification failed for ${ip}`)
    try {
      await payload.create({
        collection: 'form-submissions',
        data: {
          email: (fieldValues.email as string) || 'turnstile@bot.blocked',
          data: fieldValues,
          source: source || '',
          ip,
          blocked: true,
          blockReason: 'Turnstile verification failed',
        },
      })
    } catch { /* best effort */ }
    return NextResponse.json({ error: 'Bot verification failed. Please try again.' }, { status: 403 })
  }

  // Load form definition if formSlug provided
  let formId: number | undefined
  let recipientEmail = 'a.kropivnitski@digitalnexusstrategy.com'
  let formFields: { name: string; label?: string | null; type: string; required?: boolean | null }[] = []

  if (formSlug) {
    const formResult = await payload.find({
      collection: 'forms',
      where: { slug: { equals: formSlug } },
      limit: 1,
    })
    const form = formResult.docs[0]
    if (!form) {
      return NextResponse.json({ error: 'Form not found.' }, { status: 404 })
    }
    formId = form.id
    recipientEmail = form.recipientEmail
    formFields = form.fields ?? []

    // Validate required fields
    for (const field of formFields) {
      if (field.required && !fieldValues[field.name]) {
        return NextResponse.json({ error: `${field.label || field.name} is required.` }, { status: 400 })
      }
    }
  }

  // Find email: check field type from form definition first, then fall back to common names
  let email: string | undefined
  const emailField = formFields.find(f => f.type === 'email')
  if (emailField) email = fieldValues[emailField.name] as string | undefined
  if (!email) {
    email = (fieldValues.email ?? fieldValues.Email) as string | undefined
  }
  if (!email || typeof email !== 'string' || !email.includes('@') || email.length > 320) {
    return NextResponse.json({ error: 'Valid email is required.' }, { status: 400 })
  }

  // Save submission
  try {
    await payload.create({
      collection: 'form-submissions',
      data: {
        form: formId,
        email,
        message: (fieldValues[formFields.find(f => f.type === 'textarea')?.name ?? 'message'] as string) || '',
        data: fieldValues,
        source: source || '',
        ip,
        blocked: false,
      },
    })
  } catch (err) {
    console.error('[contact] Failed to save submission:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }

  console.log(`[contact] New submission from ${email} (${ip}) form=${formSlug || 'default'}`)
  return NextResponse.json({ success: true, recipientEmail })
}

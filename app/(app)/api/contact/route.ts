import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

// In-memory rate limiter (per-IP, resets on redeploy — good enough for low-traffic portfolio)
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
    return true // allow in dev when key isn't configured
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

  const { email, message, turnstileToken, source, _hp_name } = body as {
    email?: string
    message?: string
    turnstileToken?: string
    source?: string
    _hp_name?: string // honeypot field
  }

  // Honeypot check — bots fill hidden fields, humans don't
  if (_hp_name) {
    console.warn(`[contact] Honeypot triggered from ${ip}`)
    // Save blocked submission for logging
    try {
      const payload = await getPayload({ config })
      await payload.create({
        collection: 'form-submissions',
        data: {
          email: email || 'honeypot@bot.blocked',
          message: message || '',
          source: source || '',
          ip,
          blocked: true,
          blockReason: 'Honeypot field filled',
        },
      })
    } catch { /* best effort */ }
    // Return fake success to not alert bot
    return NextResponse.json({ success: true, email: 'a.kropivnitski@digitalnexusstrategy.com' })
  }

  // Validate inputs
  if (!email || typeof email !== 'string' || !email.includes('@') || email.length > 320) {
    return NextResponse.json({ error: 'Valid email is required.' }, { status: 400 })
  }
  if (!message || typeof message !== 'string' || message.trim().length < 5) {
    return NextResponse.json({ error: 'Message must be at least 5 characters.' }, { status: 400 })
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: 'Message too long.' }, { status: 400 })
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
      const payload = await getPayload({ config })
      await payload.create({
        collection: 'form-submissions',
        data: {
          email,
          message: message.slice(0, 500),
          source: source || '',
          ip,
          blocked: true,
          blockReason: 'Turnstile verification failed',
        },
      })
    } catch { /* best effort */ }
    return NextResponse.json({ error: 'Bot verification failed. Please try again.' }, { status: 403 })
  }

  // Save submission
  try {
    const payload = await getPayload({ config })
    await payload.create({
      collection: 'form-submissions',
      data: {
        email,
        message: message.trim(),
        source: source || '',
        ip,
        blocked: false,
      },
    })
  } catch (err) {
    console.error('[contact] Failed to save submission:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }

  console.log(`[contact] New submission from ${email} (${ip})`)
  return NextResponse.json({ success: true, email: 'a.kropivnitski@digitalnexusstrategy.com' })
}

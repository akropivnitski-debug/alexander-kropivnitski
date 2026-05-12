import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ background: '#0a0a0a', color: '#ededed', margin: 0 }}>
        <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>404</h1>
            <p style={{ color: '#888', marginBottom: '2rem' }}>Page not found</p>
            <Link href="/" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              Go home
            </Link>
          </div>
        </main>
      </body>
    </html>
  )
}

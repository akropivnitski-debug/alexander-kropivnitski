"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="bg-black min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-white text-3xl font-bold mb-4">Something went wrong</h1>
        <p className="text-gray-400 mb-8">An unexpected error occurred. Please try again.</p>
        <button
          onClick={reset}
          className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-8 rounded-full border border-white/20 transition duration-300 backdrop-blur"
        >
          Try again
        </button>
      </div>
    </main>
  )
}

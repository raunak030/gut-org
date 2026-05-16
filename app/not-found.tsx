import Link from 'next/link'
import { ArrowLeft, Leaf } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6">🌿</div>
        <h1 className="font-display text-6xl font-bold text-forest-800 mb-2">404</h1>
        <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 font-sans mb-8 leading-relaxed">
          Looks like this page took a healing break. Let&apos;s guide you back to
          your wellness journey.
        </p>
        <Link
          href="/"
          className="btn-primary inline-flex"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { ArrowRight, Leaf } from 'lucide-react'

export default function CTASection() {
  return (
    <section id="cta" className="section-padding relative overflow-hidden" aria-label="Call to action">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-800 via-forest-900 to-forest-950" />
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full
                        bg-gradient-radial from-forest-500/30 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full
                        bg-gradient-radial from-terracotta-500/20 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full
                        bg-gradient-radial from-sand-500/10 to-transparent blur-3xl" />

        {/* Floating leaf */}
        <svg className="absolute right-10 top-10 w-40 h-40 text-white/5 animate-leaf-float"
             viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
          <ellipse cx="50" cy="50" rx="30" ry="48" transform="rotate(-20 50 50)" />
        </svg>
        <svg className="absolute left-10 bottom-10 w-28 h-28 text-white/5 animate-leaf-float"
             style={{ animationDelay: '3s' }}
             viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
          <ellipse cx="50" cy="50" rx="25" ry="40" transform="rotate(15 50 50)" />
        </svg>
      </div>

      <div className="section-container relative z-10 text-center">

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl
                        bg-white/10 backdrop-blur-sm border border-white/20 mb-8
                        animate-pulse-glow">
          <Leaf className="w-8 h-8 text-forest-300" />
        </div>

        {/* Headline */}
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white
                       leading-tight mb-6 max-w-3xl mx-auto">
          Your Healing Starts{' '}
          <span className="italic" style={{ color: '#fbbf24' }}>from the Gut.</span>
        </h2>

        {/* Subtext */}
        <p className="text-forest-200 font-sans text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Don&apos;t wait another day. Every day of gut imbalance impacts your energy, hormones, skin
          and mental health. Start healing today.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/consultation"
            id="cta-book-now"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full
                       bg-white text-forest-800 font-sans font-semibold text-base
                       shadow-[0_4px_32px_rgba(255,255,255,0.2)]
                       hover:shadow-[0_8px_48px_rgba(255,255,255,0.3)] hover:-translate-y-0.5
                       transition-all duration-300"
          >
            Book Now — It&apos;s Free
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/services"
            id="cta-explore-programs"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full
                       border-2 border-white/30 text-white font-sans font-medium text-base
                       hover:border-white/60 hover:bg-white/10 hover:-translate-y-0.5
                       transition-all duration-300"
          >
            Explore Programs
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {[
            { icon: '🌿', text: '100% Natural & Ayurvedic' },
            { icon: '💯', text: 'No Medical Claims' },
            { icon: '🔒', text: 'Private & Confidential' },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-sm">{badge.icon}</span>
              <span className="text-xs text-forest-300 font-sans font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

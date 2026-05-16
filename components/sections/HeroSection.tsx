'use client'

import Link from 'next/link'
import { ArrowRight, ChevronDown, Sparkles, Star } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-warmwhite"
      aria-label="Hero section"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large green gradient orb */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full
                        bg-gradient-radial from-forest-100/60 via-forest-50/30 to-transparent
                        blur-3xl" />
        {/* Warm sand accent bottom left */}
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full
                        bg-gradient-radial from-sand-200/40 via-sand-100/20 to-transparent
                        blur-3xl" />
        {/* Terracotta subtle */}
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full
                        bg-gradient-radial from-terracotta-100/30 to-transparent blur-2xl" />

        {/* Decorative leaf SVGs */}
        <svg className="absolute top-20 right-[10%] w-32 h-32 text-forest-200/50 animate-leaf-float"
             viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
          <path d="M50 5 C20 5, 5 30, 5 50 C5 75, 25 95, 50 95 C75 95, 95 75, 95 50 C95 25, 80 5, 50 5Z" opacity="0.3"/>
          <ellipse cx="50" cy="50" rx="30" ry="45" transform="rotate(-30 50 50)" opacity="0.4"/>
        </svg>
        <svg className="absolute bottom-32 left-[8%] w-20 h-20 text-terracotta-200/50 animate-leaf-float"
             style={{ animationDelay: '2s' }}
             viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
          <ellipse cx="50" cy="50" rx="25" ry="40" transform="rotate(20 50 50)" opacity="0.5"/>
        </svg>
        <svg className="absolute top-1/2 right-[5%] w-16 h-16 text-sand-300/60 animate-leaf-float"
             style={{ animationDelay: '4s' }}
             viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
          <ellipse cx="50" cy="50" rx="20" ry="35" transform="rotate(-15 50 50)" opacity="0.4"/>
        </svg>
      </div>

      {/* Content */}
      <div className="section-container relative z-10 pt-28 pb-20 md:pt-36 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                          bg-forest-50 border border-forest-200 mb-8
                          animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
            <Sparkles className="w-3.5 h-3.5 text-forest-600" />
            <span className="text-xs font-medium text-forest-700 font-sans tracking-wide">
              Ancient Wisdom · Modern Healing
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                         font-bold text-forest-900 leading-[1.05] tracking-tight mb-6
                         animate-[fadeInUp_0.7s_ease-out_0.2s_both]">
            Fix Your Gut.{' '}
            <span className="italic text-gradient-forest">Transform</span>
            <br />
            <span className="relative">
              Health.
              {/* Underline decoration */}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12"
                   preserveAspectRatio="none" fill="none" aria-hidden="true">
                <path d="M0 8 Q75 2, 150 8 Q225 14, 300 8"
                      stroke="url(#heroGrad)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d4532a" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 font-sans font-light leading-relaxed
                        max-w-2xl mx-auto mb-10
                        animate-[fadeInUp_0.7s_ease-out_0.35s_both]">
            Ayurvedic Solutions for{' '}
            <span className="text-terracotta-600 font-medium">Bloating</span>,{' '}
            <span className="text-forest-700 font-medium">Hormones</span> &{' '}
            <span className="text-sand-600 font-medium">Weight Loss</span>.
            Root-cause healing, not just symptom relief.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14
                          animate-[fadeInUp_0.7s_ease-out_0.5s_both]">
            <Link
              href="/consultation"
              id="hero-cta-primary"
              className="btn-primary text-base px-8 py-4 gap-2"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#services"
              id="hero-cta-secondary"
              className="btn-secondary text-base px-8 py-4"
            >
              Explore Gut Programs
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8
                          animate-[fadeInUp_0.7s_ease-out_0.65s_both]">
            {/* Stars */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                ))}
              </div>
              <span className="text-xs text-gray-500 font-sans">500+ Happy Clients</span>
            </div>

            <div className="w-px h-8 bg-sand-200" />

            {/* Natural badge */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-display font-bold text-forest-700">100%</span>
              <span className="text-xs text-gray-500 font-sans">Natural & Ayurvedic</span>
            </div>

            <div className="w-px h-8 bg-sand-200" />

            {/* Expertise */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-display font-bold text-forest-700">5+</span>
              <span className="text-xs text-gray-500 font-sans">Years of Expertise</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Cards */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto
                        animate-[fadeInUp_0.8s_ease-out_0.75s_both]">
          {[
            { icon: '🌿', label: 'Gut Healing',  sub: 'Root-cause approach' },
            { icon: '⚖️', label: 'Hormonal Balance', sub: 'Natural wellness' },
            { icon: '✨', label: 'Transformation', sub: 'Sustainable results' },
          ].map((item, i) => (
            <div
              key={i}
              className="card-glass p-5 text-center group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="font-display font-semibold text-forest-800 text-sm">{item.label}</p>
              <p className="text-xs text-gray-500 font-sans mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-xs text-gray-400 font-sans tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-forest-500 rounded-full animate-scroll-down" />
        </div>
      </div>
    </section>
  )
}

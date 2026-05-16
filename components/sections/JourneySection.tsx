'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Understand Your Gut',
    description:
      'We begin with a comprehensive assessment of your body type (Prakriti), current symptoms, lifestyle, and gut health markers. Every healing journey is unique.',
    icon: '🔍',
    color: 'bg-forest-600',
    lightBg: 'bg-forest-50',
    border: 'border-forest-200',
  },
  {
    number: '02',
    title: 'Personalized Ayurvedic Guidance',
    description:
      'Based on your assessment, we craft a custom protocol — combining herbal recommendations, dietary guidance, lifestyle corrections, and gut-healing practices.',
    icon: '📋',
    color: 'bg-terracotta-500',
    lightBg: 'bg-terracotta-50',
    border: 'border-terracotta-200',
  },
  {
    number: '03',
    title: 'Sustainable Transformation',
    description:
      'With consistent follow-ups and adjustments, you experience lasting change — not just symptom relief, but a fundamentally healthier, more vibrant life.',
    icon: '🌟',
    color: 'bg-sand-600',
    lightBg: 'bg-sand-50',
    border: 'border-sand-200',
  },
]

export default function JourneySection() {
  return (
    <section id="journey" className="section-padding bg-cream relative overflow-hidden"
             aria-label="Transformation journey">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px]
                        rounded-full bg-gradient-radial from-forest-100/30 to-transparent blur-3xl" />
      </div>

      <div className="section-container relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge-sand mb-4 mx-auto w-fit">
            <span>Your Journey</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Your Path to{' '}
            <span className="italic text-gradient-forest">Gut Transformation</span>
          </h2>
          <p className="text-gray-500 font-sans text-base leading-relaxed">
            A simple, proven 3-step process that has helped hundreds reclaim their health
            and vitality through Ayurvedic gut healing.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px
                          bg-gradient-to-r from-transparent via-forest-200 to-transparent
                          z-0 mx-[16.67%]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                {/* Number + Icon */}
                <div className="relative mb-6">
                  <div className={`w-24 h-24 rounded-full ${step.lightBg} border-2 ${step.border}
                                  flex items-center justify-center text-4xl
                                  group-hover:scale-110 transition-transform duration-300
                                  shadow-card group-hover:shadow-card-hover`}>
                    {step.icon}
                  </div>
                  <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${step.color}
                                  flex items-center justify-center shadow-lg`}>
                    <span className="text-white text-xs font-bold font-sans">{i + 1}</span>
                  </div>
                </div>

                {/* Step number label */}
                <span className="text-xs font-mono text-gray-400 tracking-widest mb-2">
                  STEP {step.number}
                </span>

                {/* Title */}
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 font-sans leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link href="/consultation" id="journey-cta-book" className="btn-primary">
              Begin Your Journey
              <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-sm text-gray-400 font-sans">
              Free first consultation · No commitment
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

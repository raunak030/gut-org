'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const pillars = [
  {
    number: '01',
    title: 'Gut-Brain Axis',
    description:
      'Your gut and brain are in constant conversation. A healthy gut leads to clarity, calm, and mental wellbeing — naturally.',
    icon: '🧠',
  },
  {
    number: '02',
    title: 'Agni — Digestive Fire',
    description:
      'Ayurveda calls your digestive power "Agni". When Agni is strong, your body absorbs nutrients, expels toxins, and thrives.',
    icon: '🔥',
  },
  {
    number: '03',
    title: 'Gut Microbiome',
    description:
      'Trillions of microorganisms live in your gut. Modern science confirms what Ayurveda has always known — gut flora is everything.',
    icon: '🌿',
  },
  {
    number: '04',
    title: 'Root-Cause Healing',
    description:
      'Instead of suppressing symptoms, we trace them to their origin — usually the gut — and heal from within, naturally.',
    icon: '🌱',
  },
]

export default function AyurvedaSection() {
  return (
    <section id="ayurveda" className="section-padding bg-cream relative overflow-hidden"
             aria-label="Ayurveda philosophy">

      {/* Decorative BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full
                        bg-gradient-radial from-forest-100/40 to-transparent blur-3xl" />
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full
                        bg-gradient-radial from-sand-200/30 to-transparent blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <div className="badge-forest mb-5 w-fit">
              <span>🌿 Ayurvedic Wisdom</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Where{' '}
              <span className="italic text-gradient-forest">Ancient Wisdom</span>
              {' '}Meets Modern Science
            </h2>
            <p className="text-gray-600 font-sans text-base leading-relaxed mb-6">
              Ayurveda — the 5,000-year-old science of life — places the gut at the centre of all
              health. Modern research agrees. At GUT ORG, we bridge both worlds to give you the
              most holistic and effective healing possible.
            </p>
            <p className="text-gray-600 font-sans text-base leading-relaxed mb-8">
              We don&apos;t just treat symptoms. We ask{' '}
              <em className="text-forest-700 not-italic font-medium">why</em> your body is sending
              these signals — and we address the root.
            </p>

            <Link
              href="/about"
              id="ayurveda-learn-more"
              className="btn-primary inline-flex"
            >
              Our Approach
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="card p-5 group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{pillar.icon}</span>
                  <span className="text-xs font-mono text-forest-400 font-medium mt-1">{pillar.number}</span>
                </div>
                <h3 className="font-display font-semibold text-base text-gray-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-500 font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Banner */}
        <div className="mt-16 text-center">
          <div className="inline-block max-w-3xl">
            <div className="divider-leaf mb-6">
              <span className="text-xs font-sans text-gray-400 tracking-widest uppercase px-4">
                Ancient Saying
              </span>
            </div>
            <blockquote className="font-display text-2xl md:text-3xl italic text-forest-800 leading-relaxed">
              &ldquo;When diet is wrong, medicine is of no use.
              <br />When diet is correct, medicine is of no need.&rdquo;
            </blockquote>
            <p className="text-xs text-gray-400 font-sans mt-4 tracking-widest uppercase">
              — Ayurvedic Proverb
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

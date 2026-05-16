import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Leaf, Heart, Eye, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us — GUT ORG Wellness',
  description:
    'Learn about GUT ORG\'s Ayurvedic philosophy, our mission to heal gut health naturally, and why gut health is the foundation of total wellness.',
}

const values = [
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'Root-Cause Healing',
    description: 'We never suppress symptoms. We trace every issue to its origin and heal from within.',
    color: 'text-forest-700 bg-forest-50',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Compassionate Care',
    description: 'Your healing journey is personal. We listen, understand, and support you every step.',
    color: 'text-terracotta-600 bg-terracotta-50',
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Transparent Approach',
    description: 'No false claims, no miracle promises. Just honest, evidence-backed Ayurvedic guidance.',
    color: 'text-sand-700 bg-sand-50',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Sustainable Results',
    description: 'We build habits and protocols that last a lifetime, not just 30-day quick fixes.',
    color: 'text-purple-700 bg-purple-50',
  },
]

const milestones = [
  { number: '500+', label: 'Lives Transformed' },
  { number: '5+',   label: 'Years of Expertise' },
  { number: '4',    label: 'Wellness Programs' },
  { number: '100%', label: 'Natural & Ayurvedic' },
]

export default function AboutPage() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="section-padding bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full
                          bg-gradient-radial from-forest-100/50 to-transparent blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <div className="badge-forest mb-6 w-fit">
              <span>Our Story</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Healing Begins{' '}
              <span className="italic text-gradient-forest">from Within.</span>
            </h1>
            <p className="text-xl text-gray-600 font-sans font-light leading-relaxed max-w-2xl">
              GUT ORG was born from a simple truth: most modern health problems
              trace back to one overlooked organ — the gut. We exist to change that.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-forest-800">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-4xl font-bold text-white mb-1">{m.number}</p>
                <p className="text-sm text-forest-300 font-sans">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Why We Started <span className="italic text-gradient-forest">GUT ORG</span>
              </h2>
              <div className="space-y-4 text-gray-600 font-sans text-base leading-relaxed">
                <p>
                  In a world flooded with quick-fix diets, fat-burning pills, and symptom-suppressing
                  medications, millions still suffer from bloating, hormonal chaos, unexplained weight
                  gain, and low energy — with no real answers.
                </p>
                <p>
                  GUT ORG was created to offer a different path. Rooted in Ayurveda — the ancient
                  Indian science of life — we believe your body has an innate wisdom to heal itself.
                  It simply needs the right environment, guidance, and support.
                </p>
                <p>
                  Our approach combines 5,000 years of Ayurvedic wisdom with modern understanding
                  of gut microbiome science, providing a truly holistic healing experience that is
                  both deeply traditional and evidence-informed.
                </p>
              </div>
            </div>

            {/* Visual panel */}
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-forest-100 to-sand-100
                              p-10 text-center shadow-warm-lg">
                <div className="text-7xl mb-6">🌿</div>
                <blockquote className="font-display text-xl italic text-forest-800 leading-relaxed">
                  &ldquo;The gut is the seat of all health.
                  Heal it, and everything else follows.&rdquo;
                </blockquote>
                <p className="text-sm text-gray-500 font-sans mt-4">— GUT ORG Philosophy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="section-padding bg-cream">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-5">
              Our Mission & Philosophy
            </h2>
            <p className="text-gray-500 font-sans leading-relaxed">
              Everything we do is guided by three core principles that define the GUT ORG approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Our Mission',
                icon: '🎯',
                text: 'To make Ayurvedic gut healing accessible to every person suffering from modern lifestyle diseases — naturally, safely, and effectively.',
              },
              {
                title: 'Our Vision',
                icon: '🌏',
                text: 'A world where people understand the gut-health connection and make informed, natural choices for their wellbeing — not reactive, symptom-only treatments.',
              },
              {
                title: 'Our Philosophy',
                icon: '⚖️',
                text: 'Balance is health. We seek to restore balance in your digestion, hormones, energy, and mental state through the timeless wisdom of Ayurveda.',
              },
            ].map((item, i) => (
              <div key={i} className="card p-7 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {values.map((value, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-sand-50/50 border border-sand-100">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${value.color}`}>
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-gray-900 mb-1.5">{value.title}</h3>
                  <p className="text-sm text-gray-600 font-sans leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-forest-800">
        <div className="section-container text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-5">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-forest-200 font-sans mb-8 max-w-lg mx-auto">
            Book a free consultation and discover how Ayurvedic gut healing can transform your health.
          </p>
          <Link href="/consultation" id="about-cta" className="inline-flex items-center gap-2 px-8 py-4 rounded-full
            bg-white text-forest-800 font-semibold font-sans hover:-translate-y-0.5
            shadow-[0_4px_32px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_48px_rgba(255,255,255,0.25)]
            transition-all duration-300">
            Book Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

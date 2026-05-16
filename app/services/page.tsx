import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wellness Programs — GUT ORG Services',
  description:
    'Explore GUT ORG\'s Ayurvedic wellness programs: Gut Healing, Hormonal Wellness, Weight Loss Support & Personal Consultation. Book your program today.',
}

const services = [
  {
    id: 'gut-healing',
    icon: '🌿',
    title: 'Gut Healing Program',
    subtitle: 'The Foundation of All Health',
    gradient: 'from-forest-600 to-emerald-700',
    lightBg: 'bg-forest-50',
    border: 'border-forest-100',
    accentColor: 'text-forest-700',
    duration: '30–90 Days',
    tagline: 'Fix digestion at its root, not just the symptoms.',
    description:
      'Our flagship gut healing program is a comprehensive, personalized Ayurvedic protocol that systematically addresses your digestive health from the ground up. Through a combination of dietary guidance, herbal support, lifestyle corrections, and gut-strengthening practices, we restore your gut microbiome and digestive fire (Agni) to optimal health.',
    includes: [
      'Detailed gut health assessment (Prakriti analysis)',
      'Personalized diet plan based on your body type',
      'Ayurvedic herbal protocol',
      'Weekly follow-up consultations',
      'Gut-strengthening yoga and pranayama',
      'Lifestyle correction guidance',
      'Detox and cleanse protocol',
      'Ongoing support via WhatsApp',
    ],
    idealFor: ['IBS & IBD', 'Bloating & Gas', 'Constipation', 'Acid Reflux', 'Food Intolerances', 'Leaky Gut'],
  },
  {
    id: 'hormonal',
    icon: '⚡',
    title: 'Hormonal Wellness Program',
    subtitle: 'Balance is Everything',
    gradient: 'from-purple-600 to-indigo-700',
    lightBg: 'bg-purple-50',
    border: 'border-purple-100',
    accentColor: 'text-purple-700',
    duration: '60–90 Days',
    tagline: 'Restore hormonal balance through gut healing.',
    description:
      'Hormonal imbalance rarely exists in isolation. In most cases, it begins in the gut — where hormones are metabolized, and where gut bacteria influence estrogen, cortisol, and thyroid function. Our hormonal wellness program addresses this gut-hormone axis directly, using Ayurvedic herbs, dietary shifts, and lifestyle medicine.',
    includes: [
      'Hormonal symptom assessment',
      'Gut-hormone connection protocol',
      'Herbal formulations for hormone balance',
      'Anti-inflammatory diet plan',
      'Cycle regulation support (for women)',
      'Stress management & cortisol control',
      'Monthly progress reviews',
      'PCOS & PCOD-specific guidance',
    ],
    idealFor: ['PCOS / PCOD', 'Irregular Cycles', 'Hormonal Acne', 'Mood Swings', 'Thyroid Issues', 'Stress & Anxiety'],
  },
  {
    id: 'weight-loss',
    icon: '✨',
    title: 'Weight Loss Wellness',
    subtitle: 'Sustainable. Natural. Lasting.',
    gradient: 'from-terracotta-500 to-orange-700',
    lightBg: 'bg-terracotta-50',
    border: 'border-terracotta-100',
    accentColor: 'text-terracotta-700',
    duration: '45–90 Days',
    tagline: 'Heal your gut, fix your metabolism, transform your body.',
    description:
      'True weight loss is not about starving — it is about fixing the underlying metabolic and gut health issues that prevent your body from functioning optimally. Our weight loss wellness program addresses gut bacteria imbalance, inflammation, sluggish metabolism, and stress hormones that contribute to weight retention.',
    includes: [
      'Metabolic health assessment',
      'Gut microbiome optimization plan',
      'Anti-inflammatory Ayurvedic diet',
      'Herbal metabolism support',
      'Movement and activity guidance',
      'Sleep and stress optimization',
      'Biweekly progress tracking',
      'Long-term habit formation coaching',
    ],
    idealFor: ['Weight Gain', 'Slow Metabolism', 'Emotional Eating', 'Post-Pregnancy Weight', 'Belly Fat', 'Low Energy'],
  },
  {
    id: 'consultation',
    icon: '💬',
    title: 'Personal Consultation',
    subtitle: 'Your Personalized Wellness Roadmap',
    gradient: 'from-sand-500 to-amber-700',
    lightBg: 'bg-sand-50',
    border: 'border-sand-100',
    accentColor: 'text-sand-700',
    duration: '60 Minutes',
    tagline: 'One session, a lifetime of clarity.',
    description:
      'A one-on-one deep-dive session with our Ayurvedic wellness expert. We assess your body type (Prakriti), current health concerns, lifestyle, diet patterns, and stress levels to create a completely personalized wellness roadmap — giving you clarity on what your body needs and exactly how to heal.',
    includes: [
      'Comprehensive health history review',
      'Ayurvedic Prakriti (body type) assessment',
      'Symptom root-cause analysis',
      'Personalized wellness roadmap',
      'Diet and lifestyle recommendations',
      'Supplement and herb suggestions',
      'Priority healing protocol',
      'Follow-up action plan',
    ],
    idealFor: ['First-time consultation', 'Unclear symptoms', 'Wanting expert direction', 'Before starting a program', 'Preventive wellness', 'General gut health'],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">

      {/* Page Hero */}
      <section className="section-padding bg-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full
                        bg-gradient-radial from-forest-100/50 to-transparent blur-3xl pointer-events-none" />
        <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
          <div className="badge-forest mb-5 mx-auto w-fit">
            <span>Wellness Programs</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Healing Programs{' '}
            <span className="italic text-gradient-forest">Built for You</span>
          </h1>
          <p className="text-xl text-gray-500 font-sans font-light leading-relaxed">
            Every program is personalized to your body, symptoms, and goals.
            No one-size-fits-all. Just precise, Ayurvedic healing.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="space-y-12">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className={`rounded-3xl border ${service.border} ${service.lightBg}
                            overflow-hidden transition-all duration-300 hover:shadow-card-hover`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>

                  {/* Content */}
                  <div className={`p-8 md:p-12 flex flex-col justify-between ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div>
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient}
                                        flex items-center justify-center text-3xl shadow-lg shrink-0`}>
                          {service.icon}
                        </div>
                        <div>
                          <span className={`text-xs font-medium font-sans ${service.accentColor} tracking-wide`}>
                            {service.duration}
                          </span>
                          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                            {service.title}
                          </h2>
                          <p className={`text-sm font-medium font-sans ${service.accentColor} mt-0.5`}>
                            {service.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-medium text-gray-700 font-sans italic mb-4 border-l-4 border-forest-300 pl-4">
                        {service.tagline}
                      </p>

                      <p className="text-gray-600 font-sans text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* What's included */}
                      <div className="mb-6">
                        <h3 className="font-sans font-semibold text-sm text-gray-800 mb-3">What&apos;s Included:</h3>
                        <div className="grid grid-cols-1 gap-2">
                          {service.includes.map((item, j) => (
                            <div key={j} className="flex items-center gap-2.5">
                              <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${service.gradient}
                                             flex items-center justify-center shrink-0`}>
                                <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                              </div>
                              <span className="text-xs text-gray-600 font-sans">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/consultation"
                      id={`service-${service.id}-cta`}
                      className="btn-primary w-fit"
                    >
                      Book This Program
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Ideal For panel */}
                  <div className={`p-8 md:p-12 bg-white/60 flex flex-col justify-center
                                  ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <h3 className="font-display font-semibold text-xl text-gray-900 mb-6">
                      Ideal For:
                    </h3>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {service.idealFor.map((condition, j) => (
                        <div
                          key={j}
                          className={`px-3 py-2.5 rounded-xl border ${service.border} ${service.lightBg}
                                     flex items-center gap-2`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.gradient} shrink-0`} />
                          <span className={`text-xs font-medium font-sans ${service.accentColor}`}>
                            {condition}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="p-5 rounded-2xl bg-forest-50 border border-forest-100">
                      <p className="text-sm text-gray-700 font-sans leading-relaxed">
                        <strong className="text-forest-800">Not sure which program is right for you?</strong>
                        {' '}Book a free 15-minute discovery call and we will guide you to the best fit.
                      </p>
                      <Link
                        href="/consultation"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-forest-700
                                   hover:text-forest-800 transition-colors mt-2 font-sans"
                      >
                        Book Discovery Call <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

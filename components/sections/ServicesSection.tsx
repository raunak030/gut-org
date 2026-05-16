'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'gut-healing',
    icon: '🌿',
    title: 'Gut Healing Program',
    tagline: 'Restore your digestive harmony',
    description:
      'A complete 30–90 day Ayurvedic protocol to heal bloating, constipation, IBS, and restore your gut microbiome naturally.',
    benefits: ['Reduces bloating & gas', 'Fixes irregular digestion', 'Detox & cleanse', 'Lifestyle correction'],
    color: 'from-forest-600 to-forest-800',
    lightColor: 'bg-forest-50 border-forest-100',
    accent: 'text-forest-700',
    duration: '30–90 Days',
  },
  {
    id: 'hormonal',
    icon: '⚡',
    title: 'Hormonal Wellness',
    tagline: 'Balance your hormones naturally',
    description:
      'Specifically designed for women with PCOS, irregular cycles, mood swings, and hormonal acne — using Ayurvedic herbs and gut healing.',
    benefits: ['PCOS management', 'Cycle regulation', 'Mood balance', 'Energy restoration'],
    color: 'from-purple-600 to-purple-800',
    lightColor: 'bg-purple-50 border-purple-100',
    accent: 'text-purple-700',
    duration: '60–90 Days',
  },
  {
    id: 'weight-loss',
    icon: '✨',
    title: 'Weight Loss Wellness',
    tagline: 'Sustainable transformation',
    description:
      'Not a crash diet — a holistic approach that fixes your metabolism, gut health, and lifestyle for lasting, natural weight transformation.',
    benefits: ['Metabolism support', 'Gut-fat connection', 'No crash diets', 'Sustainable habits'],
    color: 'from-terracotta-500 to-terracotta-700',
    lightColor: 'bg-terracotta-50 border-terracotta-100',
    accent: 'text-terracotta-700',
    duration: '45–90 Days',
  },
  {
    id: 'consultation',
    icon: '💬',
    title: 'Personal Consultation',
    tagline: 'One-on-one expert guidance',
    description:
      'A deep-dive session with our wellness expert. We assess your body type, symptoms, and lifestyle to create your personalized healing roadmap.',
    benefits: ['Personalized plan', 'Body type assessment', 'Direct expert guidance', 'Follow-up support'],
    color: 'from-sand-500 to-sand-700',
    lightColor: 'bg-sand-50 border-sand-100',
    accent: 'text-sand-700',
    duration: '60 Minutes',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white" aria-label="Services">
      <div className="section-container">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge-forest mb-4 mx-auto w-fit">
            <span>Our Programs</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Wellness Programs{' '}
            <span className="italic text-gradient-forest">Tailored for You</span>
          </h2>
          <p className="text-gray-500 font-sans text-base leading-relaxed">
            Every body is different. Our Ayurvedic programs are personalized to your unique
            constitution, symptoms, and healing goals.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className={`rounded-2xl border ${service.lightColor} p-6 md:p-8
                          transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover
                          group flex flex-col`}
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color}
                                  flex items-center justify-center text-2xl shadow-lg
                                  group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-gray-900 leading-tight">
                      {service.title}
                    </h3>
                    <p className={`text-xs font-medium font-sans ${service.accent} mt-0.5`}>
                      {service.tagline}
                    </p>
                  </div>
                </div>
                <span className={`text-xs font-sans font-medium px-3 py-1 rounded-full
                                 border ${service.lightColor} ${service.accent}`}>
                  {service.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 font-sans leading-relaxed mb-5 flex-1">
                {service.description}
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.color} shrink-0`} />
                    <span className="text-xs text-gray-600 font-sans">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/consultation"
                className={`inline-flex items-center gap-2 text-sm font-medium font-sans
                           ${service.accent} hover:gap-3 transition-all duration-200`}
              >
                Learn More & Book
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link href="/services" id="services-view-all" className="btn-secondary">
            View All Programs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Instagram, Phone, MapPin, Send, Check, ArrowRight } from 'lucide-react'

const concerns = [
  'Bloating & Gas',
  'Hormonal Imbalance / PCOS',
  'Weight Gain',
  'Low Energy / Fatigue',
  'Skin Issues (Acne/Eczema)',
  'Digestive Issues (IBS)',
  'Stress & Anxiety',
  'Other',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="section-padding bg-cream">
        <div className="section-container">
          <div className="max-w-2xl">
            <div className="badge-forest mb-5 w-fit">
              <span>Get in Touch</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-5">
              Start Your{' '}
              <span className="italic text-gradient-forest">Healing Conversation</span>
            </h1>
            <p className="text-xl text-gray-500 font-sans font-light leading-relaxed">
              Have questions? Want to know which program is right for you? We&apos;re here to help.
              Reach out and we&apos;ll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left: Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-8">
                Contact Details
              </h2>

              <div className="space-y-5 mb-10">
                <a
                  href="mailto:gutorgwellness@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-forest-50 border border-forest-100
                             hover:bg-forest-100 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-forest-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-forest-600 font-sans uppercase tracking-wide mb-0.5">
                      Email Us
                    </p>
                    <p className="text-sm font-medium text-gray-800 font-sans group-hover:text-forest-700 transition-colors">
                      gutorgwellness@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/gutorg_wellness/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-pink-50 border border-pink-100
                             hover:bg-pink-100 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500
                                  flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-pink-600 font-sans uppercase tracking-wide mb-0.5">
                      Instagram
                    </p>
                    <p className="text-sm font-medium text-gray-800 font-sans">
                      @gutorg_wellness
                    </p>
                  </div>
                </a>
              </div>

              {/* Response time */}
              <div className="p-5 rounded-2xl bg-sand-50 border border-sand-100">
                <p className="text-sm font-medium text-gray-800 font-sans mb-1">⏱ Response Time</p>
                <p className="text-sm text-gray-600 font-sans">
                  We typically respond within <strong>24 hours</strong> on business days.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/consultation"
                  id="contact-book-cta"
                  className="btn-primary w-full justify-center"
                >
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-forest-100 flex items-center justify-center mx-auto mb-5">
                      <Check className="w-8 h-8 text-forest-600" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">
                      Message Received! 🌿
                    </h3>
                    <p className="text-gray-500 font-sans max-w-md mx-auto">
                      Thank you for reaching out to GUT ORG. We&apos;ll get back to you within 24 hours.
                      Meanwhile, follow us on Instagram for daily wellness tips.
                    </p>
                    <Link href="/blog" className="btn-secondary mt-6">
                      Read Our Blog
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} id="contact-form" className="space-y-5">
                    <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-sm text-gray-500 font-sans mb-6">
                      Fill out the form and we&apos;ll reach out to discuss how we can help you.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="form-label">Full Name *</label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your name"
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="form-label">Email Address *</label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="form-label">Phone Number</label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-concern" className="form-label">Primary Health Concern *</label>
                      <select
                        id="contact-concern"
                        name="concern"
                        required
                        className="form-input"
                      >
                        <option value="">Select your main concern</option>
                        {concerns.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="form-label">Message</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your health concerns, how long you've been experiencing them, and what you've tried so far..."
                        className="form-input resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      id="contact-submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-400 font-sans text-center">
                      By submitting, you agree to our{' '}
                      <Link href="/privacy-policy" className="underline hover:text-gray-600">Privacy Policy</Link>.
                      We never share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

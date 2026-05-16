'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, ArrowRight, Star, Shield, Clock } from 'lucide-react'

const healthConcerns = [
  'Bloating & Gas',
  'Hormonal Imbalance / PCOS',
  'Weight Gain',
  'Low Energy / Fatigue',
  'Skin Issues (Acne/Eczema)',
  'Digestive Issues (IBS/IBD)',
  'Constipation / Loose Motions',
  'Acid Reflux / GERD',
  'Stress & Anxiety',
  'Sleep Issues',
  'Thyroid Issues',
  'Other',
]

const timeSlots = [
  'Morning (9 AM – 12 PM)',
  'Afternoon (12 PM – 3 PM)',
  'Evening (3 PM – 6 PM)',
  'Night (6 PM – 9 PM)',
]

const programs = [
  'Gut Healing Program (30–90 Days)',
  'Hormonal Wellness Program (60–90 Days)',
  'Weight Loss Wellness (45–90 Days)',
  'Personal Consultation (60 Min)',
  'Not Sure – Need Guidance',
]

const trustPoints = [
  { icon: '🆓', text: 'First consultation is FREE' },
  { icon: '🔒', text: 'Your data is 100% private' },
  { icon: '⚡', text: 'Response within 24 hours' },
  { icon: '🌿', text: 'No medical claims made' },
]

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 2000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="pt-20 min-h-screen">

      {/* Hero */}
      <section className="section-padding bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full
                          bg-gradient-radial from-forest-100/50 to-transparent blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>
              <div className="badge-forest mb-5 w-fit">
                <span>Free Consultation</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-5">
                Book Your{' '}
                <span className="italic text-gradient-forest">Free Gut Health</span>{' '}
                Consultation
              </h1>
              <p className="text-lg text-gray-600 font-sans font-light leading-relaxed mb-8">
                Your first step to a transformed gut and a healthier life. Our wellness expert will
                assess your symptoms, understand your goals, and give you a clear roadmap — for free.
              </p>

              {/* Trust points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {trustPoints.map((point, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-sand-100">
                    <span className="text-xl">{point.icon}</span>
                    <span className="text-sm text-gray-700 font-sans font-medium">{point.text}</span>
                  </div>
                ))}
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {['P', 'R', 'A', 'K'].map((letter, i) => (
                    <div
                      key={i}
                      className={`w-9 h-9 rounded-full border-2 border-white flex items-center justify-center
                                 text-xs font-bold text-white font-sans
                                 ${['bg-forest-600', 'bg-terracotta-500', 'bg-purple-600', 'bg-sand-600'][i]}`}
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 font-sans">Trusted by 500+ wellness seekers</p>
                </div>
              </div>
            </div>

            {/* Right: mini features */}
            <div className="hidden lg:flex flex-col gap-4">
              {[
                {
                  step: '01',
                  title: 'Fill the Form',
                  desc: 'Share your health concerns and preferred timing',
                  icon: '📝',
                },
                {
                  step: '02',
                  title: 'We Reach Out',
                  desc: 'Our expert contacts you within 24 hours to confirm',
                  icon: '📞',
                },
                {
                  step: '03',
                  title: 'Your Session',
                  desc: 'A 30–60 min personalized wellness assessment',
                  icon: '🌿',
                },
                {
                  step: '04',
                  title: 'Your Roadmap',
                  desc: 'Get your personalized gut healing plan',
                  icon: '✨',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-sand-100
                                        shadow-card">
                  <div className="w-10 h-10 rounded-xl bg-forest-50 border border-forest-200
                                  flex items-center justify-center text-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-forest-400 mb-0.5">STEP {item.step}</div>
                    <p className="font-display font-semibold text-gray-900">{item.title}</p>
                    <p className="text-xs text-gray-500 font-sans">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">

            {submitted ? (
              <div className="card p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-forest-100 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-forest-600" />
                </div>
                <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
                  Booking Confirmed! 🌿
                </h2>
                <p className="text-gray-500 font-sans leading-relaxed mb-8 max-w-md mx-auto">
                  Thank you for booking a consultation with GUT ORG. Our wellness expert will reach
                  out to you within <strong>24 hours</strong> to confirm your session details.
                  Your healing journey begins now!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/" className="btn-primary">
                    Back to Home
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://www.instagram.com/gutorg_wellness/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Follow on Instagram
                  </a>
                </div>
              </div>
            ) : (
              <div className="card p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-forest-700 flex items-center justify-center">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-gray-900">
                      Book Your Consultation
                    </h2>
                    <p className="text-sm text-gray-500 font-sans">All fields marked * are required</p>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  id="consultation-form"
                  className="space-y-6"
                >
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="consult-name" className="form-label">Full Name *</label>
                      <input
                        id="consult-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="consult-age" className="form-label">Age</label>
                      <input
                        id="consult-age"
                        name="age"
                        type="number"
                        min="10"
                        max="100"
                        placeholder="Your age"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="consult-email" className="form-label">Email Address *</label>
                      <input
                        id="consult-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="consult-phone" className="form-label">WhatsApp Number *</label>
                      <input
                        id="consult-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Health Concern */}
                  <div>
                    <label htmlFor="consult-concern" className="form-label">Primary Health Concern *</label>
                    <select
                      id="consult-concern"
                      name="concern"
                      required
                      className="form-input"
                    >
                      <option value="">Select your main concern</option>
                      {healthConcerns.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Program Interest */}
                  <div>
                    <label htmlFor="consult-program" className="form-label">Program of Interest</label>
                    <select
                      id="consult-program"
                      name="program"
                      className="form-input"
                    >
                      <option value="">Select a program (optional)</option>
                      {programs.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label htmlFor="consult-time" className="form-label">Preferred Consultation Time</label>
                    <select
                      id="consult-time"
                      name="preferred_time"
                      className="form-input"
                    >
                      <option value="">Select preferred time slot</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Additional Info */}
                  <div>
                    <label htmlFor="consult-message" className="form-label">
                      Tell Us More About Your Symptoms
                    </label>
                    <textarea
                      id="consult-message"
                      name="message"
                      rows={4}
                      placeholder="How long have you been experiencing these issues? What have you tried? Any medications? Be as detailed as you like — it helps us prepare."
                      className="form-input resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    id="consult-submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-4 text-base
                               disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Booking Your Consultation...
                      </>
                    ) : (
                      <>
                        Book Free Consultation
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-6 pt-2">
                    {[
                      { icon: <Shield className="w-4 h-4" />, text: 'Private & Secure' },
                      { icon: <Clock className="w-4 h-4" />, text: '24h Response' },
                      { icon: <Check className="w-4 h-4" />, text: '100% Free' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-gray-400 font-sans">
                        {item.icon}
                        {item.text}
                      </div>
                    ))}
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

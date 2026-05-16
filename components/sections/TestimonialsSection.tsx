'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Delhi',
    concern: 'Bloating & PCOS',
    review:
      'I had been struggling with severe bloating and PCOS for 3 years. After following GUT ORG\'s personalized protocol for 60 days, my cycles are regular and the bloating is completely gone. This was life-changing.',
    rating: 5,
    initial: 'P',
    color: 'bg-forest-600',
    duration: '60-day program',
  },
  {
    id: 2,
    name: 'Rohan Mehta',
    location: 'Mumbai',
    concern: 'Weight Loss & Energy',
    review:
      'Lost 12 kg in 90 days without any crash dieting. More importantly, I have so much energy now. The gut healing approach is completely different from anything I tried before. Highly recommend.',
    rating: 5,
    initial: 'R',
    color: 'bg-terracotta-500',
    duration: '90-day program',
  },
  {
    id: 3,
    name: 'Ananya Gupta',
    location: 'Bangalore',
    concern: 'Skin & Digestion',
    review:
      'My acne and digestive issues were all connected to my gut — something no dermatologist ever told me. GUT ORG\'s approach healed both simultaneously. My skin is glowing and digestion is perfect.',
    rating: 5,
    initial: 'A',
    color: 'bg-purple-600',
    duration: '45-day program',
  },
  {
    id: 4,
    name: 'Kavita Reddy',
    location: 'Hyderabad',
    concern: 'Hormonal Imbalance',
    review:
      'After years of hormonal issues and mood swings, the GUT ORG hormonal wellness program brought me back to myself. The Ayurvedic herbs combined with gut healing made all the difference.',
    rating: 5,
    initial: 'K',
    color: 'bg-pink-600',
    duration: '90-day program',
  },
  {
    id: 5,
    name: 'Suresh Nair',
    location: 'Chennai',
    concern: 'IBS & Stress',
    review:
      'IBS had made my life miserable for 5 years. Within 30 days of the gut healing protocol, I had my first symptom-free week. By 60 days, IBS was no longer controlling my life. Truly grateful.',
    rating: 5,
    initial: 'S',
    color: 'bg-sand-600',
    duration: '60-day program',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ]

  return (
    <section id="testimonials" className="section-padding bg-white" aria-label="Testimonials">
      <div className="section-container">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge-terracotta mb-4 mx-auto w-fit">
            <span>Real Stories</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Transformations That{' '}
            <span className="italic text-gradient-warm">Speak for Themselves</span>
          </h2>
          <p className="text-gray-500 font-sans text-base leading-relaxed">
            Real people, real results. Join hundreds who have healed their gut and transformed
            their health with GUT ORG.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {visible.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className={`testimonial-card transition-all duration-500
                         ${i === 0 ? 'opacity-100 scale-100' : 'opacity-75 scale-95 hidden md:block'}`}
            >
              {/* Quote icon */}
              <Quote className="w-6 h-6 text-forest-200 mb-4 shrink-0" />

              {/* Review */}
              <p className="text-sm text-gray-700 font-sans leading-relaxed mb-6 italic">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              {/* Rating */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-sand-100">
                <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center
                                 text-white font-bold text-sm font-sans`}>
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-gray-500 font-sans">{testimonial.location} · {testimonial.concern}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs font-medium text-forest-600 bg-forest-50 px-2 py-1 rounded-full font-sans">
                    {testimonial.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            id="testimonials-prev"
            onClick={prev}
            className="w-10 h-10 rounded-full border-2 border-sand-200 flex items-center justify-center
                       text-gray-500 hover:border-forest-400 hover:text-forest-600
                       transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 h-2 bg-forest-600' : 'w-2 h-2 bg-sand-200'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            id="testimonials-next"
            onClick={next}
            className="w-10 h-10 rounded-full border-2 border-sand-200 flex items-center justify-center
                       text-gray-500 hover:border-forest-400 hover:text-forest-600
                       transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

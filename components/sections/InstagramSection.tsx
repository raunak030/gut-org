'use client'

import { Instagram, ExternalLink } from 'lucide-react'

// Placeholder Instagram posts (gradient cards simulating real posts)
const posts = [
  { id: 1, gradient: 'from-forest-400 to-forest-700', emoji: '🌿', caption: 'Morning gut ritual' },
  { id: 2, gradient: 'from-terracotta-400 to-terracotta-700', emoji: '🍵', caption: 'Herbal teas for digestion' },
  { id: 3, gradient: 'from-sand-400 to-sand-700', emoji: '🌾', caption: 'Ayurvedic superfoods' },
  { id: 4, gradient: 'from-purple-400 to-purple-700', emoji: '✨', caption: 'Client transformation' },
  { id: 5, gradient: 'from-emerald-400 to-emerald-700', emoji: '🥗', caption: 'Gut-friendly meals' },
  { id: 6, gradient: 'from-amber-400 to-amber-700', emoji: '🌞', caption: 'Daily wellness habits' },
]

export default function InstagramSection() {
  return (
    <section id="instagram" className="section-padding bg-cream" aria-label="Instagram feed">
      <div className="section-container">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
          <div>
            <div className="badge-terracotta mb-3 w-fit">
              <Instagram className="w-3 h-3" />
              <span>@gutorg_wellness</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Follow Our{' '}
              <span className="italic text-gradient-warm">Wellness Journey</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/gutorg_wellness/"
            target="_blank"
            rel="noopener noreferrer"
            id="instagram-follow-cta"
            className="btn-secondary flex items-center gap-2 shrink-0"
          >
            <Instagram className="w-4 h-4" />
            Follow on Instagram
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="instagram-grid rounded-2xl overflow-hidden shadow-warm-lg">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/gutorg_wellness/"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square relative group overflow-hidden"
              aria-label={`Instagram post: ${post.caption}`}
            >
              {/* Gradient background simulating an image */}
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}
                              group-hover:scale-110 transition-transform duration-500`}>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl mb-1">{post.emoji}</span>
                  <span className="text-white/70 text-xs text-center px-2 hidden group-hover:block
                                   font-sans transition-all duration-300">
                    {post.caption}
                  </span>
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100
                              transition-opacity duration-300 flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-white" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 font-sans mb-4">
            Daily tips on gut health, Ayurveda recipes & wellness routines
          </p>
          <a
            href="https://www.instagram.com/gutorg_wellness/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-pink-600 hover:text-pink-700
                       transition-colors font-sans"
          >
            <Instagram className="w-4 h-4" />
            Join 10,000+ wellness seekers on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

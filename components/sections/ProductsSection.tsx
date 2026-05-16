'use client'

import Link from 'next/link'
import { ArrowRight, ShoppingBag, MessageCircle } from 'lucide-react'

// Product images via reliable Unsplash URLs (replace with /product-*.png once copied to public/)
const products = [
  {
    id: 'metabolism-booster',
    name: 'Metabolism Booster Mix',
    tagline: 'Introducing',
    description: 'A powerful Ayurvedic blend to naturally support your metabolism, digestion & daily energy.',
    image: 'https://images.unsplash.com/photo-1601001435957-74f0959cf187?w=800&h=600&fit=crop&auto=format&q=80',
    price: '₹399',
    originalPrice: '₹469',
    discount: '15% OFF',
    badge: 'Launch Offer',
    benefits: [
      { icon: '🔥', label: 'Supports\nMetabolism' },
      { icon: '🫁', label: 'Aids\nDigestion' },
      { icon: '🌿', label: 'Reduces\nBloating' },
      { icon: '⚡', label: 'Boosts\nEnergy' },
    ],
    tag: '100% NATURAL | NO CHEMICALS | SAFE FOR DAILY USE',
    cta: 'DM "GUT" to Order',
    ctaLink: 'https://www.instagram.com/gutorg_wellness/',
    accent: 'from-amber-800 to-stone-900',
    badgeColor: 'bg-amber-500',
    featured: true,
  },
  {
    id: 'daily-digest',
    name: 'Daily Digest Powder',
    tagline: 'Introducing',
    description: 'Your everyday Ayurvedic digestive formula. Made with traditional roots and spices for optimal gut health.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=700&fit=crop&auto=format&q=80',
    price: '₹349',
    originalPrice: null,
    discount: null,
    badge: 'New',
    benefits: [
      { icon: '🌿', label: 'Daily\nWellness' },
      { icon: '🫁', label: 'Gut\nHealth' },
      { icon: '✨', label: '100%\nNatural' },
      { icon: '🌾', label: 'Ayurvedic\nFormula' },
    ],
    tag: '100% NATURAL | NO CHEMICALS | SAFE FOR DAILY USE',
    cta: 'DM "GUT" to Order',
    ctaLink: 'https://www.instagram.com/gutorg_wellness/',
    accent: 'from-stone-900 to-black',
    badgeColor: 'bg-forest-600',
    featured: false,
  },
  {
    id: 'after-meal-mix',
    name: 'After Meal Digest Mix',
    tagline: 'Honest Health Starts Here',
    description: 'Follow the journey from smallholder farms to your after-meal ritual. Post-meal gut support, naturally.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=700&fit=crop&auto=format&q=80',
    price: '₹299',
    originalPrice: null,
    discount: null,
    badge: 'Bestseller',
    benefits: [
      { icon: '🍽️', label: 'Post\nMeal' },
      { icon: '🌾', label: 'Farm\nFresh' },
      { icon: '🌿', label: 'Pure\nHerbs' },
      { icon: '💚', label: 'Gut\nFriendly' },
    ],
    tag: '100% NATURAL | FARM TO TABLE | SAFE FOR DAILY USE',
    cta: 'DM "GUT" to Order',
    ctaLink: 'https://www.instagram.com/gutorg_wellness/',
    accent: 'from-stone-500 to-stone-700',
    badgeColor: 'bg-terracotta-500',
    featured: false,
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="section-padding bg-white" aria-label="Our products">
      <div className="section-container">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge-sand mb-4 mx-auto w-fit">
            <ShoppingBag className="w-3 h-3" />
            <span>Our Products</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Ayurvedic Formulas{' '}
            <span className="italic text-gradient-warm">Made with Intention</span>
          </h2>
          <p className="text-gray-500 font-sans text-base leading-relaxed">
            Classic roots, modern health. Every GUT ORG product is crafted from 100% natural
            Ayurvedic ingredients — no chemicals, no fillers, no compromise.
          </p>
        </div>

        {/* Featured Product — Full Width */}
        <div className="mb-8">
          <div className={`rounded-3xl overflow-hidden bg-gradient-to-br ${products[0].accent}
                          shadow-[0_20px_60px_rgba(0,0,0,0.25)]`}>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[480px]">

              {/* Left: Content */}
              <div className="p-8 md:p-12 lg:p-16 order-2 md:order-1">
                <p className="font-serif text-2xl italic text-amber-200/80 mb-2">
                  {products[0].tagline}
                </p>
                <h3 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                  {products[0].name}
                </h3>
                <p className="text-amber-100/70 font-sans text-base leading-relaxed mb-6 max-w-sm">
                  {products[0].description}
                </p>

                {/* Benefits Grid */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {products[0].benefits.map((b, i) => (
                    <div key={i} className="flex flex-col items-center text-center gap-1.5
                                            bg-white/10 rounded-xl p-2.5">
                      <span className="text-2xl">{b.icon}</span>
                      <span className="text-[10px] text-white/70 font-sans leading-tight whitespace-pre-line">
                        {b.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Natural Tag */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-px flex-1 bg-white/20" />
                  <span className="text-xs text-amber-200 font-sans font-medium tracking-wide px-2">
                    🌿 {products[0].tag}
                  </span>
                  <div className="h-px flex-1 bg-white/20" />
                </div>

                {/* Pricing */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-serif italic text-amber-300 text-lg">Launch Offer</span>
                  <span className="text-white/50 text-lg font-sans line-through">{products[0].originalPrice}</span>
                  <span className="text-3xl font-display font-bold text-white">{products[0].price}</span>
                  <span className="bg-amber-500 text-white text-xs font-bold font-sans px-2.5 py-1 rounded-full">
                    {products[0].discount}
                  </span>
                </div>

                {/* CTA */}
                <a
                  href={products[0].ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`product-${products[0].id}-cta`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                             bg-white text-stone-800 font-sans font-bold text-sm
                             hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(255,255,255,0.3)]
                             transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  {products[0].cta}
                </a>
                <p className="text-xs text-white/40 font-sans mt-3">
                  DM on Instagram · Fresh batches now available!
                </p>
              </div>

              {/* Right: Product Image via CSS background */}
              <div
                className="relative h-72 md:h-full min-h-[380px] order-1 md:order-2"
                style={{
                  backgroundImage: `url('${products[0].image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                role="img"
                aria-label={products[0].name}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`${products[0].badgeColor} text-white text-xs font-bold font-sans
                                   px-3 py-1.5 rounded-full shadow-lg`}>
                    {products[0].badge}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Product Cards — Half Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {products.slice(1).map((product) => (
            <div
              key={product.id}
              className={`rounded-3xl overflow-hidden bg-gradient-to-br ${product.accent}
                          shadow-[0_12px_40px_rgba(0,0,0,0.2)] relative`}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`${product.badgeColor} text-white text-xs font-bold font-sans
                                 px-3 py-1.5 rounded-full shadow-lg`}>
                  {product.badge}
                </span>
              </div>

              {/* Product Image via CSS background */}
              <div
                className="relative h-64 w-full"
                style={{
                  backgroundImage: `url('${product.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                role="img"
                aria-label={product.name}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-5 left-5">
                  <p className="font-serif italic text-white/80 text-lg">{product.tagline}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-white/60 font-sans text-sm leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Benefits row */}
                <div className="grid grid-cols-4 gap-2 mb-5">
                  {product.benefits.map((b, i) => (
                    <div key={i} className="flex flex-col items-center text-center gap-1
                                            bg-white/10 rounded-lg p-2">
                      <span className="text-lg">{b.icon}</span>
                      <span className="text-[9px] text-white/60 font-sans leading-tight whitespace-pre-line">
                        {b.label}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-white/40 font-sans mb-4">🌿 {product.tag}</p>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-display font-bold text-white">{product.price}</span>
                  <a
                    href={product.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`product-${product.id}-cta`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                               bg-white text-stone-800 font-sans font-bold text-xs
                               hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    {product.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="text-center bg-gradient-to-r from-forest-50 to-sand-50 rounded-2xl
                        border border-forest-100 p-7">
          <p className="font-display text-xl font-semibold text-forest-800 mb-2">
            🌿 100% Natural · No Chemicals · Safe for Daily Use
          </p>
          <p className="text-sm text-gray-600 font-sans mb-4">
            All GUT ORG products are made from Ayurvedic ingredients sourced from trusted farms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/gutorg_wellness/"
              target="_blank"
              rel="noopener noreferrer"
              id="products-instagram-order"
              className="btn-primary text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Order via Instagram DM
            </a>
            <Link href="/services" id="products-view-programs" className="btn-secondary text-sm">
              View Wellness Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

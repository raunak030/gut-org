import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gut Health Blog — Ayurvedic Wellness Tips | GUT ORG',
  description:
    'Read expert articles on gut health, Ayurveda, hormonal wellness, natural weight loss, and digestive health. Educate yourself on the path to wellness.',
}

const categories = ['All', 'Gut Health', 'Ayurveda', 'Hormones', 'Weight Loss', 'Lifestyle', 'Recipes']

const blogPosts = [
  {
    id: 'gut-microbiome-ayurveda',
    title: 'What Ayurveda Says About Your Gut Microbiome',
    excerpt:
      'Ayurveda has described the gut as the seat of health for 5,000 years. Modern science confirms it. Here\'s how ancient wisdom maps to your gut microbiome.',
    category: 'Ayurveda',
    readTime: '6 min read',
    gradient: 'from-forest-400 to-forest-700',
    emoji: '🌿',
    featured: true,
    date: 'May 10, 2025',
  },
  {
    id: 'bloating-natural-remedies',
    title: '7 Natural Ayurvedic Remedies to Fix Bloating Forever',
    excerpt:
      'Bloating is one of the most common gut complaints. These time-tested Ayurvedic solutions address bloating at its root, not just temporarily.',
    category: 'Gut Health',
    readTime: '5 min read',
    gradient: 'from-emerald-400 to-teal-700',
    emoji: '🫧',
    featured: false,
    date: 'May 5, 2025',
  },
  {
    id: 'pcos-gut-connection',
    title: 'The Hidden PCOS-Gut Connection Every Woman Must Know',
    excerpt:
      'Most PCOS treatment ignores the gut entirely. Learn how 80% of PCOS cases have gut inflammation as an underlying driver — and what to do.',
    category: 'Hormones',
    readTime: '8 min read',
    gradient: 'from-purple-400 to-indigo-700',
    emoji: '⚡',
    featured: true,
    date: 'April 28, 2025',
  },
  {
    id: 'gut-weight-loss',
    title: 'Why You Can\'t Lose Weight (Hint: It\'s Your Gut)',
    excerpt:
      'If you\'ve tried every diet and the scale isn\'t moving, your gut microbiome might be the missing piece. Here\'s the science — simplified.',
    category: 'Weight Loss',
    readTime: '7 min read',
    gradient: 'from-terracotta-400 to-orange-700',
    emoji: '✨',
    featured: false,
    date: 'April 20, 2025',
  },
  {
    id: 'morning-gut-routine',
    title: 'The Perfect Ayurvedic Morning Routine for Gut Health',
    excerpt:
      'The first 60 minutes of your day determine your gut\'s health for the entire day. Build this simple, powerful morning routine for digestive wellness.',
    category: 'Lifestyle',
    readTime: '5 min read',
    gradient: 'from-amber-400 to-yellow-700',
    emoji: '🌞',
    featured: false,
    date: 'April 15, 2025',
  },
  {
    id: 'gut-skin-connection',
    title: 'Acne, Eczema & the Gut-Skin Axis Explained',
    excerpt:
      'Your skin is a mirror of your gut health. Discover the science behind the gut-skin axis and how healing one heals the other.',
    category: 'Gut Health',
    readTime: '6 min read',
    gradient: 'from-pink-400 to-rose-700',
    emoji: '✨',
    featured: false,
    date: 'April 8, 2025',
  },
]

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured)
  const regular  = blogPosts.filter((p) => !p.featured)

  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="section-padding bg-cream">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto">
            <div className="badge-forest mb-5 mx-auto w-fit">
              <span>Wellness Blog</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Learn.{' '}
              <span className="italic text-gradient-forest">Heal.</span>{' '}
              Thrive.
            </h1>
            <p className="text-xl text-gray-500 font-sans font-light leading-relaxed">
              Expert articles on gut health, Ayurveda, and holistic wellness — written to help you
              understand your body and heal it naturally.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-white border-b border-sand-100 sticky top-[72px] z-30">
        <div className="section-container">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium font-sans
                           transition-all duration-200
                           ${cat === 'All'
                             ? 'bg-forest-700 text-white'
                             : 'bg-sand-50 text-gray-600 hover:bg-forest-50 hover:text-forest-700 border border-sand-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {featured.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                id={`blog-featured-${post.id}`}
                className="card group overflow-hidden"
              >
                {/* Visual */}
                <div className={`h-48 bg-gradient-to-br ${post.gradient} relative flex items-center justify-center`}>
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
                    {post.emoji}
                  </span>
                  <div className="absolute top-4 left-4">
                    <span className="badge badge-forest bg-white/90 text-forest-700 border-0">
                      {post.category}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-400 font-sans">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-gray-900 leading-tight mb-3
                                 group-hover:text-forest-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-sans leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-forest-700
                                   group-hover:gap-2.5 transition-all duration-200 font-sans">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Regular Posts Grid */}
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-8">More Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {regular.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                id={`blog-${post.id}`}
                className="card group overflow-hidden flex flex-col"
              >
                <div className={`h-32 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-500">
                    {post.emoji}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-400 font-sans">{post.category}</span>
                  </div>
                  <h3 className="font-display font-semibold text-sm text-gray-900 leading-snug mb-2 flex-1
                                 group-hover:text-forest-700 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-sans mt-auto pt-3
                                  border-t border-sand-100">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-forest-800">
        <div className="section-container text-center max-w-xl mx-auto">
          <div className="text-4xl mb-5">📧</div>
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Get Weekly Wellness Tips
          </h2>
          <p className="text-forest-200 font-sans mb-8">
            Join 5,000+ wellness seekers receiving Ayurvedic gut health tips every week.
          </p>
          <form className="flex gap-3 max-w-md mx-auto" id="blog-newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20
                         text-white placeholder-white/50 text-sm font-sans outline-none
                         focus:border-white/50 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-white text-forest-800 text-sm font-semibold
                         font-sans hover:-translate-y-0.5 transition-all duration-200 shrink-0"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-forest-400 font-sans mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}

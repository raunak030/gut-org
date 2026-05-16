'use client'

const symptoms = [
  {
    icon: '🫧',
    title: 'Bloating & Gas',
    description:
      'Constant discomfort after meals, feeling heavy and inflated — your gut is signalling for help.',
    color: 'from-terracotta-50 to-orange-50 border-terracotta-100',
    textColor: 'text-terracotta-700',
  },
  {
    icon: '⚖️',
    title: 'Hormonal Imbalance',
    description:
      'PCOS, irregular cycles, mood swings — 70% of hormonal issues originate in the gut.',
    color: 'from-forest-50 to-emerald-50 border-forest-100',
    textColor: 'text-forest-700',
  },
  {
    icon: '📈',
    title: 'Unexplained Weight Gain',
    description:
      'Struggling to lose weight despite dieting? Your gut microbiome may be the missing link.',
    color: 'from-sand-50 to-amber-50 border-sand-100',
    textColor: 'text-sand-700',
  },
  {
    icon: '🔋',
    title: 'Low Energy & Brain Fog',
    description:
      'Feeling drained by noon? Your gut produces 95% of serotonin — the energy molecule.',
    color: 'from-purple-50 to-indigo-50 border-purple-100',
    textColor: 'text-purple-700',
  },
  {
    icon: '🌿',
    title: 'Skin Issues',
    description:
      'Acne, eczema, dull skin — gut inflammation manifests directly on your skin.',
    color: 'from-pink-50 to-rose-50 border-pink-100',
    textColor: 'text-pink-700',
  },
  {
    icon: '😰',
    title: 'Stress & Anxiety',
    description:
      'The gut-brain axis directly links your digestive health to your mental state.',
    color: 'from-blue-50 to-cyan-50 border-blue-100',
    textColor: 'text-blue-700',
  },
]

export default function ProblemSection() {
  return (
    <section id="problem" className="section-padding bg-white" aria-label="Problem awareness">
      <div className="section-container">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge-terracotta mb-4 mx-auto w-fit">
            <span>Do You Relate?</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Are These Symptoms{' '}
            <span className="italic text-gradient-warm">Holding You Back?</span>
          </h2>
          <p className="text-gray-500 font-sans text-base leading-relaxed">
            Millions suffer in silence, not knowing that most of these issues share{' '}
            <strong className="text-forest-700">one root cause</strong> — an unhealthy gut.
            You are not alone.
          </p>
        </div>

        {/* Symptom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {symptoms.map((symptom, i) => (
            <div
              key={i}
              className={`rounded-2xl border bg-gradient-to-br ${symptom.color} p-6
                          transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover
                          group cursor-default`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {symptom.icon}
              </div>
              <h3 className={`font-display font-semibold text-lg mb-2 ${symptom.textColor}`}>
                {symptom.title}
              </h3>
              <p className="text-sm text-gray-600 font-sans leading-relaxed">
                {symptom.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA message */}
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl
                          bg-gradient-to-r from-forest-50 to-sand-50
                          border border-forest-100">
            <span className="text-2xl">🌱</span>
            <p className="font-sans text-sm text-gray-700 text-left leading-relaxed">
              <strong className="text-forest-800">Good news:</strong> All of these can be healed
              naturally through the right gut protocol.
              <span className="text-forest-600 font-medium"> That&apos;s what we do at GUT ORG.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

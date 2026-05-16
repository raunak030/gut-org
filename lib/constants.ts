// ============================================
// GUT ORG — Site Constants
// ============================================

export const SITE_CONFIG = {
  name:        'GUT ORG',
  tagline:     'Fix Your Gut. Transform Health.',
  description: 'Ayurvedic Solutions for Bloating, Hormones & Weight Loss.',
  url:         'https://gutorg.in',
  email:       'gutorgwellness@gmail.com',
  instagram:   'https://www.instagram.com/gutorg_wellness/',
  instagram_handle: '@gutorg_wellness',
}

export const NAV_LINKS = [
  { href: '/',            label: 'Home' },
  { href: '/about',       label: 'About' },
  { href: '/services',    label: 'Services' },
  { href: '/blog',        label: 'Blog' },
  { href: '/contact',     label: 'Contact' },
] as const

export const SERVICE_SLUGS = {
  GUT_HEALING:   'gut-healing',
  HORMONAL:      'hormonal',
  WEIGHT_LOSS:   'weight-loss',
  CONSULTATION:  'consultation',
} as const

export const HEALTH_CONCERNS = [
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
] as const

export const SEO_KEYWORDS = [
  'gut health',
  'ayurvedic gut healing',
  'bloating solutions',
  'hormonal wellness',
  'natural weight loss',
  'PCOS ayurveda',
  'gut health india',
  'digestion problems',
  'ayurvedic wellness',
  'gut org wellness',
] as const

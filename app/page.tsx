import type { Metadata } from 'next'
import HeroSection         from '@/components/sections/HeroSection'
import ProblemSection      from '@/components/sections/ProblemSection'
import AyurvedaSection     from '@/components/sections/AyurvedaSection'
import ServicesSection     from '@/components/sections/ServicesSection'
import ProductsSection     from '@/components/sections/ProductsSection'
import JourneySection      from '@/components/sections/JourneySection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import InstagramSection    from '@/components/sections/InstagramSection'
import CTASection          from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'GUT ORG — Fix Your Gut. Transform Health.',
  description:
    'Ayurvedic solutions for bloating, hormonal imbalance & weight loss. Book a free consultation with GUT ORG and start your gut healing journey today.',
  alternates: {
    canonical: 'https://gutorg.in',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <AyurvedaSection />
      <ServicesSection />
      <ProductsSection />
      <JourneySection />
      <TestimonialsSection />
      <InstagramSection />
      <CTASection />
    </>
  )
}

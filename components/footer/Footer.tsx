import Link from 'next/link'
import { Mail, Instagram, ArrowRight } from 'lucide-react'

function GutOrgLogo({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="GUT ORG Logo">
      <circle cx="50" cy="50" r="48" fill="#FAF7F0" stroke="#B5521A" strokeWidth="4"/>
      <circle cx="50" cy="50" r="42" fill="none" stroke="#C8962A" strokeWidth="1.5"/>
      <ellipse cx="50" cy="62" rx="14" ry="7" fill="#D4C4A0" stroke="#A08040" strokeWidth="1"/>
      <path d="M36 60 Q50 72 64 60" fill="#C4B490" stroke="#A08040" strokeWidth="0.8"/>
      <line x1="50" y1="45" x2="50" y2="62" stroke="#B09060" strokeWidth="2.5" strokeLinecap="round"/>
      <ellipse cx="50" cy="44" rx="3" ry="5" fill="#C0A070" stroke="#906030" strokeWidth="0.8"/>
      <path d="M32 56 Q24 46 30 40 Q36 48 32 56Z" fill="#3A7A2A" opacity="0.85"/>
      <path d="M68 56 Q76 46 70 40 Q64 48 68 56Z" fill="#3A7A2A" opacity="0.85"/>
      <path d="M42 52 Q38 44 40 38" stroke="#4A8A3A" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <ellipse cx="40" cy="37" rx="3" ry="4.5" fill="#3A8A2A" transform="rotate(-15 40 37)" opacity="0.8"/>
      <path d="M58 52 Q62 44 60 38" stroke="#4A8A3A" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <ellipse cx="60" cy="37" rx="3" ry="4.5" fill="#3A8A2A" transform="rotate(15 60 37)" opacity="0.8"/>
      <path d="M62 58 Q68 60 66 64" stroke="#C87830" strokeWidth="2" strokeLinecap="round"/>
      <path d="M66 64 Q72 63 70 68" stroke="#C87830" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

const footerLinks = {
  pages: [
    { href: '/',              label: 'Home' },
    { href: '/about',         label: 'About Us' },
    { href: '/services',      label: 'Services' },
    { href: '/blog',          label: 'Blog' },
    { href: '/contact',       label: 'Contact' },
    { href: '/consultation',  label: 'Book Consultation' },
  ],
  services: [
    { href: '/services#gut-healing',   label: 'Gut Healing Program' },
    { href: '/services#hormonal',      label: 'Hormonal Wellness' },
    { href: '/services#weight-loss',   label: 'Weight Loss Support' },
    { href: '/services#consultation',  label: 'One-on-One Session' },
  ],
  legal: [
    { href: '/privacy-policy',   label: 'Privacy Policy' },
    { href: '/terms',            label: 'Terms of Service' },
    { href: '/disclaimer',       label: 'Health Disclaimer' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-white" aria-label="Site footer">
      {/* Main Footer */}
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="group-hover:scale-105 transition-transform duration-300">
                <GutOrgLogo size={50} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold text-white tracking-tight">GUT ORG™</span>
                <span className="text-[9px] font-sans tracking-widest text-terracotta-300 uppercase">Classic Roots Modern Health</span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 font-sans leading-relaxed mb-6 max-w-[240px]">
              Healing begins from within. Ayurvedic solutions for a healthier gut and a transformed life.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/gutorg_wellness/"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center
                           hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500
                           transition-all duration-300 group"
                aria-label="GUT ORG Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="mailto:gutorgwellness@gmail.com"
                id="footer-email"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center
                           hover:bg-forest-600 transition-all duration-300"
                aria-label="Email GUT ORG"
              >
                <Mail className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-semibold text-sm tracking-widest uppercase text-forest-300 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white font-sans
                               transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 text-forest-400 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans font-semibold text-sm tracking-widest uppercase text-forest-300 mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white font-sans
                               transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 text-forest-400 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h3 className="font-sans font-semibold text-sm tracking-widest uppercase text-forest-300 mb-5">
              Start Healing
            </h3>

            <div className="space-y-4 mb-6">
              <a
                href="mailto:gutorgwellness@gmail.com"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-forest-400 shrink-0" />
                gutorgwellness@gmail.com
              </a>
              <a
                href="https://www.instagram.com/gutorg_wellness/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-forest-400 shrink-0" />
                @gutorg_wellness
              </a>
            </div>

            <Link
              href="/consultation"
              id="footer-cta-book"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full
                         bg-forest-600 text-white text-sm font-medium font-sans
                         hover:bg-forest-500 transition-all duration-300 hover:-translate-y-0.5
                         shadow-[0_4px_20px_rgba(30,107,35,0.3)]"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Health Disclaimer */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <p className="text-xs text-gray-500 font-sans leading-relaxed text-center md:text-left max-w-3xl">
            <strong className="text-gray-400">Health Disclaimer:</strong> The information provided on this website is for
            educational purposes only and is not intended as medical advice. Always consult a qualified healthcare
            professional before starting any wellness program.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="section-container py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-600 font-sans">
              © {new Date().getFullYear()} GUT ORG Wellness. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-gray-600 hover:text-gray-400 font-sans transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

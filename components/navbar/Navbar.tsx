'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/',            label: 'Home' },
  { href: '/about',       label: 'About' },
  { href: '/services',    label: 'Services' },
  { href: '/blog',        label: 'Blog' },
  { href: '/contact',     label: 'Contact' },
]

// Inline GUT ORG logo — circular badge matching the brand
function GutOrgLogo({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="GUT ORG Logo">
      {/* Outer ring — terracotta */}
      <circle cx="50" cy="50" r="48" fill="#FAF7F0" stroke="#B5521A" strokeWidth="4"/>
      {/* Inner ring — gold */}
      <circle cx="50" cy="50" r="42" fill="none" stroke="#C8962A" strokeWidth="1.5"/>
      {/* Mortar bowl */}
      <ellipse cx="50" cy="62" rx="14" ry="7" fill="#D4C4A0" stroke="#A08040" strokeWidth="1"/>
      <path d="M36 60 Q50 72 64 60" fill="#C4B490" stroke="#A08040" strokeWidth="0.8"/>
      {/* Pestle */}
      <line x1="50" y1="45" x2="50" y2="62" stroke="#B09060" strokeWidth="2.5" strokeLinecap="round"/>
      <ellipse cx="50" cy="44" rx="3" ry="5" fill="#C0A070" stroke="#906030" strokeWidth="0.8"/>
      {/* Left leaf */}
      <path d="M32 56 Q24 46 30 40 Q36 48 32 56Z" fill="#3A7A2A" opacity="0.85"/>
      <path d="M32 56 Q28 48 30 40" stroke="#2A6020" strokeWidth="0.5" fill="none"/>
      {/* Right leaf */}
      <path d="M68 56 Q76 46 70 40 Q64 48 68 56Z" fill="#3A7A2A" opacity="0.85"/>
      <path d="M68 56 Q72 48 70 40" stroke="#2A6020" strokeWidth="0.5" fill="none"/>
      {/* Small herb sprigs */}
      <path d="M42 52 Q38 44 40 38" stroke="#4A8A3A" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <ellipse cx="40" cy="37" rx="3" ry="4.5" fill="#3A8A2A" transform="rotate(-15 40 37)" opacity="0.8"/>
      <path d="M58 52 Q62 44 60 38" stroke="#4A8A3A" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <ellipse cx="60" cy="37" rx="3" ry="4.5" fill="#3A8A2A" transform="rotate(15 60 37)" opacity="0.8"/>
      {/* Turmeric root hint */}
      <path d="M62 58 Q68 60 66 64" stroke="#C87830" strokeWidth="2" strokeLinecap="round"/>
      <path d="M66 64 Q72 63 70 68" stroke="#C87830" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export default function Navbar() {
  const [isScrolled,   setIsScrolled]   = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsMobileOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-warmwhite/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.06)] border-b border-sand-100'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="GUT ORG Home">
              <div className="group-hover:scale-105 transition-transform duration-300">
                <GutOrgLogo size={46} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-base font-bold text-forest-800 tracking-tight leading-none">
                  GUT ORG<sup className="text-[8px] ml-0.5">™</sup>
                </span>
                <span className="text-[9px] font-sans font-medium tracking-widest text-terracotta-600 uppercase mt-0.5">
                  Classic Roots Modern Health
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium font-sans
                      transition-all duration-200
                      ${isActive
                        ? 'text-forest-700 bg-forest-50'
                        : 'text-gray-600 hover:text-forest-700 hover:bg-forest-50/70'
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1
                                       rounded-full bg-forest-500" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/consultation"
                id="nav-cta-book"
                className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5"
              >
                Book Consultation
              </Link>
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center
                           text-gray-700 hover:bg-forest-50 transition-all duration-200"
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-warmwhite z-50 md:hidden
                    shadow-2xl transition-transform duration-400 ease-in-out
                    ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Mobile navigation"
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-sand-100">
          <Link href="/" className="flex items-center gap-2">
            <GutOrgLogo size={38} />
            <div className="flex flex-col leading-none">
              <span className="font-display text-sm font-bold text-forest-800">GUT ORG™</span>
              <span className="text-[8px] font-sans text-terracotta-600 uppercase tracking-wider">
                Classic Roots Modern Health
              </span>
            </div>
          </Link>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="w-9 h-9 rounded-xl flex items-center justify-center
                       text-gray-500 hover:bg-sand-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="px-4 pt-4 pb-6 flex flex-col gap-1" aria-label="Mobile navigation links">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{ animationDelay: `${i * 60}ms` }}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-sans text-sm font-medium
                  transition-all duration-200
                  ${isActive
                    ? 'bg-forest-50 text-forest-700'
                    : 'text-gray-700 hover:bg-sand-50 hover:text-forest-700'
                  }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile CTA */}
        <div className="px-4 pb-6 border-t border-sand-100 pt-4">
          <Link
            href="/consultation"
            id="mobile-nav-cta"
            className="btn-primary w-full justify-center"
          >
            Book Consultation
          </Link>
          <p className="text-center text-xs text-gray-400 mt-3 font-sans">
            📧 gutorgwellness@gmail.com
          </p>
        </div>
      </div>
    </>
  )
}

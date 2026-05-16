import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://gutorg.in'),
  title: {
    default: 'GUT ORG — Fix Your Gut. Transform Health.',
    template: '%s | GUT ORG',
  },
  description:
    'Ayurvedic solutions for bloating, hormonal imbalance, weight loss & gut health. Book a consultation with GUT ORG — your premium wellness transformation partner.',
  keywords: [
    'gut health',
    'ayurvedic wellness',
    'bloating solutions',
    'hormonal wellness',
    'weight loss natural',
    'gut healing',
    'ayurveda india',
    'digestion problems',
    'holistic wellness',
    'gut org',
  ],
  authors: [{ name: 'GUT ORG Wellness' }],
  creator: 'GUT ORG',
  publisher: 'GUT ORG',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://gutorg.in',
    siteName: 'GUT ORG',
    title: 'GUT ORG — Fix Your Gut. Transform Health.',
    description:
      'Ayurvedic Solutions for Bloating, Hormones & Weight Loss. Start your gut healing journey today.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GUT ORG — Ayurvedic Wellness',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GUT ORG — Fix Your Gut. Transform Health.',
    description:
      'Ayurvedic Solutions for Bloating, Hormones & Weight Loss.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-warmwhite text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

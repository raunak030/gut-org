# GUT ORG — Ayurvedic Wellness Website

> Fix Your Gut. Transform Health.

A premium wellness brand website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Focused on Ayurvedic gut health education, lead generation, and consultation bookings.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📁 Project Structure

```
gut-org/
├── app/
│   ├── (public pages)
│   │   ├── page.tsx          # Homepage
│   │   ├── about/            # About page
│   │   ├── services/         # Services page
│   │   ├── blog/             # Blog listing
│   │   ├── contact/          # Contact form
│   │   └── consultation/     # Booking form
│   ├── api/
│   │   ├── leads/            # Lead capture API
│   │   ├── consultations/    # Booking API
│   │   └── newsletter/       # Newsletter API
│   ├── layout.tsx            # Root layout + SEO
│   ├── globals.css           # Design system CSS
│   ├── sitemap.ts            # XML sitemap
│   └── robots.ts             # Robots.txt
├── components/
│   ├── navbar/Navbar.tsx
│   ├── footer/Footer.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── ProblemSection.tsx
│       ├── AyurvedaSection.tsx
│       ├── ServicesSection.tsx
│       ├── JourneySection.tsx
│       ├── TestimonialsSection.tsx
│       ├── InstagramSection.tsx
│       └── CTASection.tsx
├── lib/
│   ├── constants.ts
│   └── utils.ts
└── .env.example
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary | Forest Green `#1e6b23` |
| Secondary | Sand/Beige `#cfa05a` |
| Accent | Terracotta `#d4532a` |
| Highlight | Gold `#f59e0b` |
| Background | Warm White `#FEFCF8` |
| Heading Font | Playfair Display |
| Body Font | Inter |

---

## 📄 Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, problem awareness, services, testimonials |
| About | `/about` | Brand story, mission, philosophy |
| Services | `/services` | All 4 wellness programs with details |
| Blog | `/blog` | SEO content, articles |
| Contact | `/contact` | Contact form |
| Consultation | `/consultation` | Lead capture booking form |

---

## 🔌 Integrations (Setup Required)

| Service | Purpose | Status |
|---------|---------|--------|
| Supabase | Database (leads, consultations) | Ready for config |
| Resend | Email notifications | Ready for config |
| Sanity CMS | Blog & content management | Ready for config |
| Google Analytics | Traffic tracking | Ready for config |
| Meta Pixel | Ad conversion tracking | Ready for config |

Copy `.env.example` → `.env.local` and fill in your keys.

---

## 🌍 Deployment

1. Push to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Auto-deploy on every push to `main`

---

## 📧 Contact

**Email:** gutorgwellness@gmail.com  
**Instagram:** [@gutorg_wellness](https://www.instagram.com/gutorg_wellness/)

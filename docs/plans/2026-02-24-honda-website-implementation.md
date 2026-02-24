# Honda Indonesia Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a Honda Indonesia website with 3 pages (homepage, model list, model detail) supporting EN/ID localization.

**Architecture:** Next.js 14+ App Router with `[lang]` dynamic segment for i18n. Static model data in TypeScript. Server-side dictionary loading. Framer Motion for animations.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `.gitignore`

**Step 1: Initialize Next.js project**

Run:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

Expected: Next.js project created with App Router, Tailwind, TypeScript.

**Step 2: Install additional dependencies**

Run:
```bash
npm install framer-motion
npm install -D @types/node
```

**Step 3: Initialize shadcn/ui**

Run:
```bash
npx shadcn@latest init -d
```

**Step 4: Add shadcn/ui components we need**

Run:
```bash
npx shadcn@latest add button card tabs badge
```

**Step 5: Verify dev server starts**

Run:
```bash
npm run dev
```

Expected: Server starts on http://localhost:3000 without errors.

**Step 6: Commit**

```bash
git add .
git commit -m "chore: scaffold Next.js project with Tailwind, shadcn/ui, Framer Motion"
```

---

### Task 2: i18n Infrastructure

**Files:**
- Create: `src/i18n/config.ts`
- Create: `src/i18n/get-dictionary.ts`
- Create: `src/i18n/dictionaries/en.json`
- Create: `src/i18n/dictionaries/id.json`
- Create: `src/middleware.ts`

**Step 1: Create i18n config**

Create `src/i18n/config.ts`:
```typescript
export const i18n = {
  defaultLocale: "en",
  locales: ["en", "id"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
```

**Step 2: Create English dictionary**

Create `src/i18n/dictionaries/en.json`:
```json
{
  "common": {
    "exploreModels": "Explore Models",
    "allModels": "All Models",
    "startingFrom": "Starting from",
    "testDrive": "Request a Test Drive",
    "downloadBrochure": "Download Brochure",
    "findDealer": "Find Dealer",
    "backToModels": "Back to All Models",
    "learnMore": "Learn More",
    "currency": "Rp",
    "million": "Million"
  },
  "nav": {
    "home": "Home",
    "models": "Models",
    "language": "Language"
  },
  "home": {
    "heroTitle": "Power of Dreams",
    "heroSubtitle": "Discover the complete Honda lineup designed for Indonesian roads",
    "scrollDown": "Scroll to explore",
    "featuredTitle": "Featured Models",
    "featuredSubtitle": "Explore our most popular vehicles",
    "whyHondaTitle": "Why Honda",
    "innovationTitle": "Innovation",
    "innovationDesc": "Cutting-edge technology that pushes the boundaries of automotive engineering",
    "safetyTitle": "Safety",
    "safetyDesc": "Advanced safety features designed to protect you and your loved ones",
    "technologyTitle": "Technology",
    "technologyDesc": "Smart connectivity and intuitive interfaces for the modern driver",
    "ctaTitle": "Find Your Perfect Honda",
    "ctaSubtitle": "Explore our complete lineup and discover the Honda that fits your lifestyle",
    "ctaButton": "View All Models"
  },
  "models": {
    "pageTitle": "All Models",
    "pageSubtitle": "Discover the complete Honda lineup",
    "filterAll": "All",
    "filterSedan": "Sedan",
    "filterHatchback": "Hatchback",
    "filterSuv": "SUV",
    "explore": "Explore",
    "newBadge": "New"
  },
  "detail": {
    "specifications": "Specifications",
    "features": "Key Features",
    "colors": "Available Colors",
    "engine": "Engine",
    "dimensions": "Dimensions",
    "safety": "Safety",
    "comfort": "Comfort",
    "horsepower": "Horsepower",
    "torque": "Torque",
    "transmission": "Transmission",
    "fuelConsumption": "Fuel Consumption",
    "length": "Length",
    "width": "Width",
    "height": "Height",
    "wheelbase": "Wheelbase",
    "seatingCapacity": "Seating Capacity",
    "airbags": "Airbags",
    "interested": "Interested in this model?",
    "interestedSubtitle": "Take the next step towards owning your dream Honda"
  },
  "footer": {
    "quickLinks": "Quick Links",
    "followUs": "Follow Us",
    "contact": "Contact",
    "copyright": "Honda Indonesia. All rights reserved.",
    "address": "Jakarta, Indonesia",
    "phone": "+62 21 1234 5678"
  }
}
```

**Step 3: Create Indonesian dictionary**

Create `src/i18n/dictionaries/id.json`:
```json
{
  "common": {
    "exploreModels": "Jelajahi Model",
    "allModels": "Semua Model",
    "startingFrom": "Mulai dari",
    "testDrive": "Minta Test Drive",
    "downloadBrochure": "Unduh Brosur",
    "findDealer": "Cari Dealer",
    "backToModels": "Kembali ke Semua Model",
    "learnMore": "Pelajari Lebih Lanjut",
    "currency": "Rp",
    "million": "Juta"
  },
  "nav": {
    "home": "Beranda",
    "models": "Model",
    "language": "Bahasa"
  },
  "home": {
    "heroTitle": "Power of Dreams",
    "heroSubtitle": "Temukan seluruh lini Honda yang dirancang untuk jalanan Indonesia",
    "scrollDown": "Gulir untuk menjelajahi",
    "featuredTitle": "Model Unggulan",
    "featuredSubtitle": "Jelajahi kendaraan terpopuler kami",
    "whyHondaTitle": "Mengapa Honda",
    "innovationTitle": "Inovasi",
    "innovationDesc": "Teknologi mutakhir yang mendorong batas rekayasa otomotif",
    "safetyTitle": "Keselamatan",
    "safetyDesc": "Fitur keselamatan canggih yang dirancang untuk melindungi Anda dan orang tercinta",
    "technologyTitle": "Teknologi",
    "technologyDesc": "Konektivitas pintar dan antarmuka intuitif untuk pengemudi modern",
    "ctaTitle": "Temukan Honda Sempurna Anda",
    "ctaSubtitle": "Jelajahi seluruh lini kami dan temukan Honda yang sesuai gaya hidup Anda",
    "ctaButton": "Lihat Semua Model"
  },
  "models": {
    "pageTitle": "Semua Model",
    "pageSubtitle": "Temukan seluruh lini Honda",
    "filterAll": "Semua",
    "filterSedan": "Sedan",
    "filterHatchback": "Hatchback",
    "filterSuv": "SUV",
    "explore": "Jelajahi",
    "newBadge": "Baru"
  },
  "detail": {
    "specifications": "Spesifikasi",
    "features": "Fitur Utama",
    "colors": "Warna Tersedia",
    "engine": "Mesin",
    "dimensions": "Dimensi",
    "safety": "Keselamatan",
    "comfort": "Kenyamanan",
    "horsepower": "Tenaga",
    "torque": "Torsi",
    "transmission": "Transmisi",
    "fuelConsumption": "Konsumsi BBM",
    "length": "Panjang",
    "width": "Lebar",
    "height": "Tinggi",
    "wheelbase": "Jarak Sumbu Roda",
    "seatingCapacity": "Kapasitas Tempat Duduk",
    "airbags": "Airbag",
    "interested": "Tertarik dengan model ini?",
    "interestedSubtitle": "Ambil langkah selanjutnya menuju Honda impian Anda"
  },
  "footer": {
    "quickLinks": "Tautan Cepat",
    "followUs": "Ikuti Kami",
    "contact": "Kontak",
    "copyright": "Honda Indonesia. Hak cipta dilindungi.",
    "address": "Jakarta, Indonesia",
    "phone": "+62 21 1234 5678"
  }
}
```

**Step 4: Create dictionary loader**

Create `src/i18n/get-dictionary.ts`:
```typescript
import type { Locale } from "./config";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  id: () => import("./dictionaries/id.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
```

**Step 5: Create middleware for locale redirect**

Create `src/middleware.ts`:
```typescript
import { NextRequest, NextResponse } from "next/server";
import { i18n } from "@/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to default locale
  const locale = i18n.defaultLocale;
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
```

**Step 6: Verify middleware works**

Run dev server, visit `http://localhost:3000`. Expected: redirects to `/en`.

**Step 7: Commit**

```bash
git add src/i18n src/middleware.ts
git commit -m "feat: add i18n infrastructure with EN/ID dictionaries and locale middleware"
```

---

### Task 3: Model Data Layer

**Files:**
- Create: `src/data/models.ts`

**Step 1: Create model types and static data**

Create `src/data/models.ts` with full type definitions and data for all 9 Honda models (Brio, Jazz, City, Civic, Accord, HR-V, BR-V, CR-V, WR-V). Each model includes:
- `slug`, `name`, `category`, `year`, `startingPrice`
- `tagline` in both EN and ID
- `thumbnail` and `images` array (use placeholder paths `/images/models/{slug}/`)
- `specs`: engine, horsepower, torque, transmission, fuel consumption, dimensions, seating, airbags
- `features`: 3 features per model with icon, title (EN/ID), description (EN/ID)
- `colors`: 3-4 colors per model with name (EN/ID), hex code, image path

Include helper functions:
```typescript
export function getModelBySlug(slug: string): Model | undefined
export function getModelsByCategory(category: Model["category"] | "all"): Model[]
export function getAllSlugs(): string[]
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No type errors.

**Step 3: Commit**

```bash
git add src/data/models.ts
git commit -m "feat: add static model data for 9 Honda Indonesia vehicles"
```

---

### Task 4: Layout Components (Header, Footer, LanguageSwitcher)

**Files:**
- Create: `src/components/layout/header.tsx`
- Create: `src/components/layout/footer.tsx`
- Create: `src/components/layout/language-switcher.tsx`
- Modify: `src/app/[lang]/layout.tsx`

**Step 1: Create LanguageSwitcher component**

Create `src/components/layout/language-switcher.tsx`:
- Client component (`"use client"`)
- Uses `usePathname` from `next/navigation`
- Renders two links: EN | ID
- Highlights current locale
- Replaces locale segment in URL to switch

**Step 2: Create Header component**

Create `src/components/layout/header.tsx`:
- Sticky top navigation bar, transparent on top then solid on scroll
- Honda logo (text-based "HONDA" for now) linked to `/{lang}`
- Navigation links: Home, Models
- LanguageSwitcher on the right
- Mobile hamburger menu with slide-in drawer
- Props: `lang`, `dictionary` (nav section)

**Step 3: Create Footer component**

Create `src/components/layout/footer.tsx`:
- 4-column layout: Quick Links, Models (link to top 4), Contact info, Social media icons
- Bottom bar with copyright
- Props: `lang`, `dictionary` (footer section)

**Step 4: Update root layout**

Modify `src/app/[lang]/layout.tsx`:
- Load dictionary server-side with `getDictionary(lang)`
- Set `<html lang={lang}>`
- Add `hreflang` alternate links in metadata
- Render Header + `{children}` + Footer
- Add `generateStaticParams` returning `[{lang: "en"}, {lang: "id"}]`

**Step 5: Remove default Next.js page content**

Clean up `src/app/[lang]/page.tsx` to render a simple placeholder: `<main>Honda Indonesia</main>`

**Step 6: Verify layout renders**

Run dev server, visit `/en` and `/id`. Expected: Header with nav, placeholder content, footer. Language switcher works.

**Step 7: Commit**

```bash
git add src/components/layout src/app/[lang]/layout.tsx src/app/[lang]/page.tsx
git commit -m "feat: add layout with Header, Footer, and LanguageSwitcher"
```

---

### Task 5: Homepage — Hero Section

**Files:**
- Create: `src/components/sections/home/hero-section.tsx`
- Modify: `src/app/[lang]/page.tsx`

**Step 1: Create HeroSection component**

Create `src/components/sections/home/hero-section.tsx`:
- Full viewport height (`h-screen`) with dark gradient overlay background
- Placeholder background (CSS gradient simulating a car image until real images are added)
- Animated headline (`dictionary.home.heroTitle`) using Framer Motion `motion.h1` with fade-in + slide-up
- Subtitle with staggered fade-in
- CTA Button linking to `/{lang}/all-models` with hover animation
- Animated scroll indicator (bouncing chevron) at bottom

**Step 2: Add HeroSection to homepage**

Modify `src/app/[lang]/page.tsx`:
- Load dictionary
- Render `<HeroSection lang={lang} dictionary={dictionary} />`

**Step 3: Verify hero renders**

Run dev server, visit `/en`. Expected: Full-screen hero with animated text and CTA.

**Step 4: Commit**

```bash
git add src/components/sections/home/hero-section.tsx src/app/[lang]/page.tsx
git commit -m "feat: add homepage hero section with animations"
```

---

### Task 6: Homepage — Featured Models Carousel

**Files:**
- Create: `src/components/sections/home/featured-models.tsx`
- Create: `src/components/sections/home/model-card.tsx`
- Modify: `src/app/[lang]/page.tsx`

**Step 1: Create ModelCard component**

Create `src/components/sections/home/model-card.tsx`:
- Uses shadcn Card component
- Displays: car image (placeholder gradient for now), model name, starting price
- Hover effect: scale(1.03), elevated shadow using Framer Motion `whileHover`
- Link wrapping the card to `/{lang}/all-models/{slug}`

**Step 2: Create FeaturedModels section**

Create `src/components/sections/home/featured-models.tsx`:
- Section title + subtitle from dictionary
- Horizontal scrollable container with 4 featured models (CR-V, Civic, HR-V, BR-V)
- Scroll snap behavior with CSS `snap-x snap-mandatory`
- Staggered entrance animation using Framer Motion `staggerChildren`
- Left/right scroll buttons on desktop

**Step 3: Add to homepage**

Add `<FeaturedModels>` below HeroSection in `page.tsx`.

**Step 4: Verify carousel renders**

Visit `/en`. Expected: Scrollable model cards with hover effects.

**Step 5: Commit**

```bash
git add src/components/sections/home src/app/[lang]/page.tsx
git commit -m "feat: add featured models carousel to homepage"
```

---

### Task 7: Homepage — Why Honda & CTA Sections

**Files:**
- Create: `src/components/sections/home/why-honda.tsx`
- Create: `src/components/sections/home/cta-banner.tsx`
- Modify: `src/app/[lang]/page.tsx`

**Step 1: Create WhyHonda section**

Create `src/components/sections/home/why-honda.tsx`:
- Section title from dictionary
- 3 alternating rows (image left/text right, then swapped):
  - Innovation, Safety, Technology
- Each row uses Framer Motion `useInView` for scroll-triggered fade-in
- Placeholder images (gradient blocks)

**Step 2: Create CTABanner section**

Create `src/components/sections/home/cta-banner.tsx`:
- Full-width section with dark gradient background
- Title + subtitle from dictionary
- Large CTA button linking to `/{lang}/all-models`
- Subtle parallax effect on background using Framer Motion `useScroll` + `useTransform`

**Step 3: Add both sections to homepage**

Add `<WhyHonda>` and `<CTABanner>` to `page.tsx` in order.

**Step 4: Verify full homepage**

Visit `/en` and `/id`. Scroll through all sections. Expected: Hero → Featured → Why Honda → CTA → Footer, all with animations, both languages work.

**Step 5: Commit**

```bash
git add src/components/sections/home src/app/[lang]/page.tsx
git commit -m "feat: add Why Honda and CTA banner sections to homepage"
```

---

### Task 8: Model List Page

**Files:**
- Create: `src/app/[lang]/all-models/page.tsx`
- Create: `src/components/sections/models/model-grid.tsx`
- Create: `src/components/sections/models/filter-bar.tsx`
- Create: `src/components/sections/models/model-list-card.tsx`

**Step 1: Create FilterBar component**

Create `src/components/sections/models/filter-bar.tsx`:
- Client component (`"use client"`)
- Horizontal button group: All | Sedan | Hatchback | SUV
- Active filter highlighted with underline/background
- `onFilterChange` callback to parent
- Animated active indicator using Framer Motion `layoutId`

**Step 2: Create ModelListCard component**

Create `src/components/sections/models/model-list-card.tsx`:
- Displays: car image, model name, tagline (localized), starting price
- Optional "New" badge using shadcn Badge
- Hover: scale up + "Explore" button appears with fade-in
- Framer Motion `motion.div` with `layout` prop for filter animations
- Link to `/{lang}/all-models/{slug}`

**Step 3: Create ModelGrid component**

Create `src/components/sections/models/model-grid.tsx`:
- Client component managing filter state
- Renders FilterBar + grid of ModelListCards
- Uses `AnimatePresence` for smooth add/remove when filtering
- Responsive grid: 3 columns desktop, 2 tablet, 1 mobile
- Staggered entrance animation

**Step 4: Create model list page**

Create `src/app/[lang]/all-models/page.tsx`:
- Load dictionary server-side
- Page header with title + subtitle
- Render `<ModelGrid>` passing all models and dictionary

**Step 5: Verify model list page**

Visit `/en/all-models`. Expected: Grid of 9 models, filter buttons work with smooth animations.

**Step 6: Commit**

```bash
git add src/app/[lang]/all-models src/components/sections/models
git commit -m "feat: add model list page with category filter and animated grid"
```

---

### Task 9: Model Detail Page — Hero & Gallery

**Files:**
- Create: `src/app/[lang]/all-models/[slug]/page.tsx`
- Create: `src/components/sections/detail/detail-hero.tsx`
- Create: `src/components/sections/detail/image-gallery.tsx`

**Step 1: Create DetailHero component**

Create `src/components/sections/detail/detail-hero.tsx`:
- Full-width hero with car image placeholder
- Model name (large), tagline (localized), starting price
- CTA button: "Request a Test Drive"
- Fade-in entrance animation

**Step 2: Create ImageGallery component**

Create `src/components/sections/detail/image-gallery.tsx`:
- Client component
- Horizontal scrollable gallery with multiple images
- Thumbnail strip below for navigation
- Click thumbnail to change main image with crossfade (AnimatePresence)
- Placeholder images (gradient blocks with model name)

**Step 3: Create model detail page**

Create `src/app/[lang]/all-models/[slug]/page.tsx`:
- `generateStaticParams` returning all slug + lang combinations
- Load model by slug, 404 if not found
- Load dictionary
- Render DetailHero + ImageGallery

**Step 4: Verify detail page**

Visit `/en/all-models/cr-v`. Expected: Hero with model info, scrollable gallery.

**Step 5: Commit**

```bash
git add src/app/[lang]/all-models/[slug] src/components/sections/detail
git commit -m "feat: add model detail page with hero and image gallery"
```

---

### Task 10: Model Detail Page — Features, Specs, Colors, CTA

**Files:**
- Create: `src/components/sections/detail/key-features.tsx`
- Create: `src/components/sections/detail/specs-table.tsx`
- Create: `src/components/sections/detail/color-picker.tsx`
- Create: `src/components/sections/detail/detail-cta.tsx`
- Modify: `src/app/[lang]/all-models/[slug]/page.tsx`

**Step 1: Create KeyFeatures component**

Create `src/components/sections/detail/key-features.tsx`:
- Section title from dictionary
- 3-column grid of feature cards (icon placeholder + title + description, localized)
- Staggered scroll-reveal with Framer Motion `useInView`

**Step 2: Create SpecsTable component**

Create `src/components/sections/detail/specs-table.tsx`:
- Client component
- Uses shadcn Tabs: Engine | Dimensions | Safety | Comfort
- Each tab shows relevant specs in a clean table
- Alternating row backgrounds

**Step 3: Create ColorPicker component**

Create `src/components/sections/detail/color-picker.tsx`:
- Client component
- Horizontal row of color swatches (circular, showing hex color)
- Selected color name displayed below (localized)
- Selected swatch has ring/border highlight
- AnimatePresence crossfade on the car image when color changes (placeholder)

**Step 4: Create DetailCTA component**

Create `src/components/sections/detail/detail-cta.tsx`:
- "Interested?" title + subtitle from dictionary
- 3 buttons: Test Drive, Download Brochure, Find Dealer
- Link back to All Models
- Background gradient

**Step 5: Add all sections to detail page**

Update `src/app/[lang]/all-models/[slug]/page.tsx` to render all sections in order:
DetailHero → ImageGallery → KeyFeatures → SpecsTable → ColorPicker → DetailCTA

**Step 6: Verify complete detail page**

Visit `/en/all-models/cr-v`. Scroll through all sections. Tab switching works. Color picker works.

**Step 7: Commit**

```bash
git add src/components/sections/detail src/app/[lang]/all-models/[slug]/page.tsx
git commit -m "feat: add features, specs, color picker, and CTA to model detail page"
```

---

### Task 11: Responsive Design & Polish

**Files:**
- Modify: All component files as needed

**Step 1: Test and fix mobile responsiveness**

Check all 3 pages at mobile (375px), tablet (768px), desktop (1280px) widths:
- Header: hamburger menu works on mobile
- Hero: text scales, no overflow
- Carousel: swipeable on touch
- Model grid: 1 col mobile, 2 col tablet, 3 col desktop
- Detail sections: stack vertically on mobile
- Specs table: horizontally scrollable or stacked on mobile

**Step 2: Add 404 page**

Create `src/app/[lang]/not-found.tsx`:
- Simple "Page Not found" message with link back to homepage

**Step 3: Add metadata and SEO**

Update `src/app/[lang]/layout.tsx`:
- `generateMetadata` with title, description per locale
- Open Graph tags
- hreflang alternate links

Update `src/app/[lang]/all-models/[slug]/page.tsx`:
- `generateMetadata` with model-specific title and description

**Step 4: Final visual review**

Run dev server, navigate all pages in both locales. Verify animations, transitions, and responsive behavior.

**Step 5: Commit**

```bash
git add .
git commit -m "feat: add responsive design, SEO metadata, and 404 page"
```

---

### Task 12: Final Build Verification

**Step 1: Run production build**

Run:
```bash
npm run build
```

Expected: Build succeeds with no errors. All static pages generated.

**Step 2: Test production server**

Run:
```bash
npm run start
```

Visit all pages in both locales. Verify everything works.

**Step 3: Final commit if any fixes needed**

```bash
git add .
git commit -m "fix: resolve production build issues"
```

# Honda Indonesia Website Design

## Overview

Honda Indonesia website inspired by bmw.co.id. Three pages: homepage, model list, and model detail. Built with Next.js App Router, Tailwind CSS, shadcn/ui, and Framer Motion. Supports Indonesian (id) and English (en) localization.

## Tech Stack

- **Next.js 14+** — App Router, React Server Components
- **Tailwind CSS v4** — utility-first styling
- **shadcn/ui** — reusable UI components
- **Framer Motion** — scroll animations, transitions, layout animations
- **TypeScript** — strict mode
- **Static JSON data** — model specs, prices, images

## Project Structure

```
website-honda/
├── src/
│   ├── app/
│   │   └── [lang]/
│   │       ├── layout.tsx
│   │       ├── page.tsx              # homepage
│   │       ├── all-models/
│   │       │   ├── page.tsx          # model list
│   │       │   └── [slug]/
│   │       │       └── page.tsx      # model detail
│   │       └── not-found.tsx
│   ├── components/
│   │   ├── ui/                       # shadcn/ui components
│   │   ├── layout/                   # Header, Footer, LanguageSwitcher
│   │   └── sections/                 # page-specific sections
│   ├── data/
│   │   └── models.ts                 # static model data
│   ├── i18n/
│   │   ├── dictionaries/
│   │   │   ├── en.json
│   │   │   └── id.json
│   │   ├── config.ts
│   │   └── get-dictionary.ts
│   └── lib/
│       └── utils.ts
├── public/
│   └── images/
│       └── models/
├── middleware.ts
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

## Pages

### Homepage (`/[lang]`)

1. **Hero Section** — Full-screen image/video, headline + tagline, CTA button, scroll indicator. Fade-in animation.
2. **Featured Models Carousel** — 3-4 highlighted models in horizontal scroll. Card with image, name, price, link. Hover scale + shadow.
3. **Brand Story / Why Honda** — Split layout (image + text alternating). Topics: innovation, safety, technology. Scroll-triggered fade-in.
4. **CTA Banner** — Full-width gradient banner. "Find Your Perfect Honda" with link to model list. Parallax background.
5. **Footer** — Multi-column: Quick Links, Models, Contact, Social Media. Language switcher. Copyright.

### Model List (`/[lang]/all-models`)

- **Page header** with title and subtitle
- **Filter bar**: All | Sedan | Hatchback | SUV — client-side filtering with AnimatePresence layout animation
- **Model cards grid**: image, name, tagline, starting price, optional badge (new/electric). Hover: scale + "Explore" button. Staggered fade-in on load.

### Model Detail (`/[lang]/all-models/[slug]`)

1. **Hero Section** — Full-width car image, model name + tagline, starting price, test drive CTA
2. **Image Gallery** — Horizontal scroll, thumbnail nav, lightbox full-screen view
3. **Key Features** — 3-column grid with icon + title + description. Staggered reveal.
4. **Specifications Table** — Tabs: Engine | Dimensions | Safety | Comfort. Clean alternating rows.
5. **Color Picker** — Horizontal swatches, click to change car image with crossfade
6. **CTA Section** — Test Drive, Download Brochure, Find Dealer buttons. Back to All Models link.

## Model Data

```typescript
type Locale = "en" | "id"

type ModelSpecs = {
  engine: string
  horsepower: string
  torque: string
  transmission: string
  fuelConsumption: string
  length: string
  width: string
  height: string
  wheelbase: string
  seatingCapacity: number
  airbags: number
}

type ModelFeature = {
  icon: string
  title: Record<Locale, string>
  description: Record<Locale, string>
}

type ModelColor = {
  name: Record<Locale, string>
  hex: string
  image: string
}

type Model = {
  slug: string
  name: string
  category: "sedan" | "hatchback" | "suv"
  year: number
  startingPrice: number
  tagline: Record<Locale, string>
  thumbnail: string
  images: string[]
  specs: ModelSpecs
  features: ModelFeature[]
  colors: ModelColor[]
}
```

### Honda Indonesia Lineup

| Model | Category | Slug |
|-------|----------|------|
| Brio | Hatchback | brio |
| Jazz | Hatchback | jazz |
| City | Sedan | city |
| Civic | Sedan | civic |
| Accord | Sedan | accord |
| HR-V | SUV | hr-v |
| BR-V | SUV | br-v |
| CR-V | SUV | cr-v |
| WR-V | SUV | wr-v |

## Internationalization (i18n)

### Routing

- Middleware redirects `/` to `/en` (default locale)
- All routes under `/[lang]/` — validated against `["en", "id"]`
- Language switcher in header toggles between EN/ID, preserves current path

### Dictionary Structure

```json
{
  "common": {
    "exploreModels": "Explore Models",
    "allModels": "All Models",
    "startingFrom": "Starting from",
    "testDrive": "Request a Test Drive"
  },
  "home": {
    "heroTitle": "Power of Dreams",
    "heroSubtitle": "Discover the Honda lineup"
  },
  "models": {
    "filterAll": "All",
    "filterSedan": "Sedan",
    "filterSuv": "SUV",
    "filterHatchback": "Hatchback"
  },
  "detail": {
    "specifications": "Specifications",
    "features": "Key Features",
    "colors": "Available Colors"
  }
}
```

### Implementation

- Dictionary loaded server-side in layout via `getDictionary(lang)`
- Passed to components via props (no client-side fetch)
- Model data: translatable fields use `Record<Locale, string>`
- Static content (specs, prices) same across all locales

### SEO

- `<html lang={lang}>` per locale
- `<link rel="alternate" hreflang="en" />` and `hreflang="id"` in head
- `generateStaticParams` to pre-render all `lang` + `slug` combinations

## Responsive Design

- **Desktop**: full visual experience with all animations
- **Tablet**: simplified carousel, stacked layouts
- **Mobile**: single column, reduced animations for performance, swipeable galleries

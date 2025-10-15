# Design Guidelines: The Idea Firm - Digital Marketing Agency

## Design Approach

**Reference-Based Approach: Brandingoo-Inspired**
This design follows Brandingoo's proven aesthetic: dark, high-contrast environment with bold typography, spacious grids, section-based storytelling, and smooth scroll-triggered reveals. The visual language emphasizes proof, metrics, and professional credibility for a digital marketing agency in Guwahati.

## Core Design Elements

### A. Color Palette

**Dark Mode Foundation:**
- Background: `#0E0E10` (near-black for depth)
- Primary Text: `#F3F4F6` (soft white for readability)
- Secondary Text: `#9CA3AF` (muted gray for hierarchy)
- Accent: Electric purple `270 80% 60%` OR Teal `180 75% 50%` (strategic use only)
- Surface: `#1A1A1C` (subtle elevation for cards)
- Border: `#27272A` (minimal dividers)

**Accent Usage:**
- Primary CTAs and interactive elements only
- Stat counter highlights
- Link hover states
- Service card icon backgrounds

### B. Typography

**Font Stack:** Inter or Poppins (Google Fonts CDN)

**Scale:**
- H1 Hero: `clamp(2.5rem, 8vw, 5rem)` / 900 weight / -2% letter-spacing
- H2 Section: `clamp(2rem, 5vw, 3.5rem)` / 700 weight
- H3 Card Title: `1.5rem` / 600 weight
- Body Large: `1.125rem` / 400 weight / 1.7 line-height
- Body: `1rem` / 400 weight / 1.6 line-height
- Kicker Labels: `0.875rem` / 600 weight / uppercase / 5% letter-spacing

### C. Layout System

**Tailwind Spacing Primitives:** 4, 8, 12, 16, 20, 24, 32 units
- Section Padding: `py-20` mobile, `py-32` desktop
- Card Padding: `p-8` mobile, `p-12` desktop
- Component Gaps: `gap-8` standard, `gap-12` generous
- Container: `max-w-7xl` with `px-6` mobile, `px-8` desktop

**Grid Systems:**
- Services: 1 column mobile → 2 columns tablet → 3 columns desktop
- Industries: Horizontal scroll mobile → 3×2 grid desktop
- Case Studies: 1 column mobile → 2 columns tablet → 3 columns desktop

### D. Component Library

**Navigation:**
- Sticky header with glass-morphism effect (`backdrop-blur-lg`)
- Logo left, centered nav items, persistent CTA button right
- Hamburger slide-in panel for mobile with smooth GSAP transitions

**Hero Section:**
- Full-bleed with large H1 and supporting subhead
- Dual CTAs: Primary solid button + Secondary outline button (with backdrop-blur)
- Optional subtle parallax background motion (desktop only)
- Pin headline on scroll (GSAP ScrollTrigger)

**Service Cards:**
- Elevated on hover: `scale-102` with `shadow-2xl` 
- Icon (circular accent background) + Title + 3-4 benefit bullets
- Staggered reveal on scroll (fade + translateY 20px)
- Deep-link to service landing page

**Industry Icons:**
- Circular cards with icon, category label
- Horizontal scroll on mobile, grid on desktop
- Gentle fade/scale-in on intersection

**Case Study Cards:**
- Image with overlay gradient
- Flip animation on hover revealing KPI outcomes
- Metrics-first presentation (numbers, percentages)

**Testimonial Slider:**
- Simple card design with quote, client name, role
- Auto-play with pause on hover
- Manual arrow controls with ARIA labels
- Swipeable on mobile

**Stat Counters:**
- Large numbers (3rem+) with accent color
- Animated count-up on scroll (GSAP, once per view)
- Label below in muted text

**CTAs:**
- Primary: Solid accent background, white text, subtle scale on hover
- Secondary: Outline with accent border, backdrop-blur on images
- Button heights: 48px minimum for touch targets

**Footer:**
- Multi-column layout (NAP, Quick Links, Services, Social)
- Secondary email capture form
- Muted background slightly lighter than body

### E. Animations

**GSAP + ScrollTrigger + Lenis Implementation:**
- Lenis for buttery smooth scroll (synced with GSAP ticker)
- Section reveals: fade + translateY (16-24px), stagger 0.1s
- Hero pin on large screens only
- Counter animations trigger once on scroll into view
- Hover transitions: 200-250ms ease-out

**Respect `prefers-reduced-motion`:** Disable scroll-linked effects, use instant transitions

### F. Images

**Hero Section:**
- Full-bleed background image (dark overlay 60% opacity)
- High-impact imagery showing digital marketing success, office environment, or abstract tech patterns
- WebP format with fallback, responsive srcset

**Service Pages:**
- Header image per service (Google Ads dashboard, Facebook analytics, web designs)
- Case study thumbnails (before/after, campaign screenshots)

**Other Placements:**
- Client logos row (grayscale, opacity 60%)
- Team photos in about/contact sections (if applicable)
- Blog post featured images (16:9 ratio)

## Page-Specific Layouts

**Homepage Flow:**
1. Hero with pinned headline and dual CTAs
2. Services grid (7 cards, 3-column desktop)
3. Industries served (circular icon grid)
4. Proof section (animated KPI counters)
5. Case studies (3-6 items, hover reveals)
6. Testimonials slider
7. CTA band (repeated every 2-3 sections)
8. Footer with email capture

**Service Landing Pages:**
- Hero with service-specific headline and local SEO keyword
- Benefits section (icon + text blocks)
- Process steps (numbered timeline)
- FAQs (accordion pattern)
- Contact form with service pre-selected

**Blog:**
- Magazine-style grid for index
- Featured post hero
- Article template with readable max-width (`max-w-prose`)

## Accessibility & Performance

- Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- WCAG AA contrast ratios maintained
- Focus indicators with accent color outline
- Skip-to-content link
- Keyboard navigation for menus and carousels
- Alt text for all images
- ARIA labels for interactive elements
- Lazy-load images below fold
- Critical CSS inline for above-fold
- Target sub-3s LCP on 4G
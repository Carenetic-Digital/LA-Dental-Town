# LA Dental Town — Design System

## Brand Overview

**Aesthetic:** Warm, professional, elevated — inspired by Bel Air Dental Arts. Family-oriented but not clinical. Elevated dentistry with community roots.

**Personality:** Trustworthy, approachable, modern. Playfair Display gives an upscale feel; Lato keeps it readable and friendly.

---

## Colors

All colors defined in `src/styles/global.css` via Tailwind v4 `@theme`. Use Tailwind utilities (`bg-green-dark`, `text-green-mid`, etc.).

| Token | Hex | Tailwind Class | Use |
|-------|-----|----------------|-----|
| Green Dark | `#1D4D2F` | `green-dark` | Logo, headings, nav, footer, dark sections |
| Green Mid | `#3A7D44` | `green-mid` | CTA buttons, links, hover states |
| Teal Dark | `#163232` | `teal-dark` | Footer background, dark CTA panel backgrounds |
| Gold | `#C9A84C` | `gold` | Star ratings, accent icons — use sparingly |
| Cream | `#F8F4EC` | `cream` | Page background, alternating sections |
| White | `#FFFFFF` | `white` | Cards, text on dark, form fields |
| Ink | `#1A1A1A` | `ink` | Body text, headings on light backgrounds |

### Color Rhythm

Alternate section backgrounds: **cream → white → cream → dark panel → white → cream → dark panel**

- Light sections: `bg-cream` or `bg-white`
- Dark/featured sections: `bg-green-dark` (awards) or `bg-teal-dark` (insurance/CTA, footer)
- Never use `bg-gold` as a section background

---

## Typography

**Display (headings):** Playfair Display — `font-display`
- H1: `font-display font-bold text-5xl sm:text-6xl lg:text-7xl` (hero)
- H2: `font-display font-bold text-3xl sm:text-4xl lg:text-5xl` (section headings)
- H3: `font-display font-semibold text-lg sm:text-xl` (card titles)

**Body:** Lato — `font-body`
- Body: `font-body text-base leading-relaxed` — use `text-ink` on light, `text-white/75` on dark
- Eyebrow labels: `font-body text-xs uppercase tracking-widest text-green-mid`
- Buttons/nav: `font-body font-semibold` or `font-body font-medium`

---

## Components

### Buttons

```html
<!-- Primary (filled) -->
<a class="bg-green-mid hover:bg-green-dark text-white font-body font-semibold px-7 py-3.5 rounded-full transition-colors duration-200">
  Book Now
</a>

<!-- Secondary (outline) -->
<a class="border-2 border-green-dark text-green-dark hover:bg-green-dark hover:text-white font-body font-semibold px-7 py-3.5 rounded-full transition-colors duration-200">
  Learn More
</a>

<!-- Ghost (for dark backgrounds) -->
<a class="border-2 border-white/50 hover:border-white text-white font-body font-medium px-8 py-4 rounded-full transition-all duration-200">
  Call Us
</a>
```

### Section Header Pattern

```html
<div class="text-center mb-14">
  <p class="font-body text-xs uppercase tracking-widest text-green-mid mb-3">Eyebrow Label</p>
  <h2 class="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-green-dark mb-5">
    Section Heading
  </h2>
  <p class="font-body text-base sm:text-lg text-ink/60 max-w-2xl mx-auto leading-relaxed">
    Supporting description text.
  </p>
</div>
```

### Cards (Services, Blog)

- Border: `border border-neutral-200` → `hover:border-green-mid/40`
- Shadow: `hover:shadow-xl`
- Radius: `rounded-2xl`
- Padding: `p-6` (content)
- Background: `bg-white`
- Transition: `transition-all duration-200`

### Stats / Feature Tiles

- Two styles: filled (`bg-green-dark text-white`) and outlined (`bg-white border border-neutral-200`)
- Radius: `rounded-2xl`
- Always use `font-display font-bold` for the number

### Testimonials

- Background: `bg-cream`
- Border: `border border-neutral-200/60`
- Stars in `text-gold`
- Quote in `text-ink/80`
- Source as pill: `bg-white border border-neutral-200 rounded-full px-3 py-1 text-xs`

---

## Layout

- Max content width: `max-w-7xl mx-auto`
- Horizontal padding: `px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-20 sm:py-28` (major sections), `py-16 sm:py-20` (dark sections)

---

## Image Guidelines

Images not yet available. Pending delivery from Norma Adams (June 30 deadline).

When photos arrive:
- All images in `public/images/` — never hotlink externally
- Hero/video: `loading="eager" fetchpriority="high"`; target < 200KB for hero image
- All other images: `loading="lazy"`
- Use `width` and `height` attributes to prevent layout shift
- Use `<picture>` with WebP source + JPEG fallback
- Use `OptimizedImage.astro` component for consistent handling

### Placeholder Strategy (pre-photo)

Gradient divs using brand colors stand in for images:
```html
<div class="h-44" style="background: linear-gradient(135deg, #1D4D2F, #3A7D44)" aria-hidden="true"></div>
```

---

## Sitewide Floating Elements

Both live in `BaseLayout.astro`:

1. **Sticky Book Now** (lower-right, `fixed bottom-5 right-5 z-40`)
   - Green button, follows scroll on all pages
   - Currently links to `/contents/appointments/`
   - TODO: wire to booking widget once embed code arrives

2. **Google Reviews badge** (lower-left, `fixed bottom-5 left-5 z-40`)
   - White card with Google G + 4.9★ rating
   - Links to Google Reviews search
   - TODO: update href to verified Google Business profile URL

---

## Navigation

Two-level nav:
- Top bar: Google rating (left) + Se Habla Español + phone (right)
- Main bar: Logo + desktop nav links + Book Now button
- Dropdowns: CSS hover (`.nav-group:hover .dropdown-menu`) with smooth opacity/transform transition
- Mobile: hamburger toggle, full-width accordion with section labels

---

## Accessibility Notes

- All interactive elements have accessible labels (`aria-label` or visible text)
- Dropdown menus use `aria-haspopup="true"` and `aria-expanded` on trigger buttons
- Color contrast: Dark Green (#1D4D2F) on White meets WCAG AA (≥4.5:1)
- Images must have `alt` text when photos are added
- `role="menubar"` / `role="menu"` / `role="menuitem"` on navigation structure

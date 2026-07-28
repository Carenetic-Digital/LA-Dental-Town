// Shared icon set (Material-style, single-color fill, 24x24 viewBox) used
// across /services/ pages. Reuses paths already established on the homepage
// (src/pages/index.astro) where a matching icon exists; new paths are added
// only for sub-services that don't have a homepage equivalent.

export const ICONS = {
  // Homepage-matching icons (kept identical so category pages feel continuous
  // with the homepage service cards they're linked from)
  tooth: `<path d="M12 2C9.79 2 8 3.12 7 4.5 6 3.12 4 3 4 5.5 4 8.5 5.5 10 5.5 13c0 2.5.5 7 2.5 7 1.5 0 2-2.5 2.5-4.5h3C14 17.5 14.5 20 16 20c2 0 2.5-4.5 2.5-7 0-3 1.5-4.5 1.5-7.5 0-2.5-2-2.38-3-1C16 3.12 14.21 2 12 2z"/>`,
  star: `<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 14.24L12 13.41l-4.23 2.83L9.1 11.35 5.42 8.34l5.03-.36L12 3.4l1.55 4.58 5.03.36-3.68 3.01 1.33 4.89z"/>`,
  implant: `<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>`,
  surgery: `<path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>`,
  check: `<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/>`,
  kids: `<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>`,

  // Sub-service icons (no direct homepage equivalent)
  crown: `<path d="M5 20h14v2H5v-2zm14.28-11.03L17 11l-2.5-4.5L12 11 9.5 6.5 7 11 4.72 8.97 3 18h18l-1.72-9.03z"/>`,
  smile: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3.5 6.5c.83 0 1.5.67 1.5 1.5S9.33 11.5 8.5 11.5 7 10.83 7 10s.67-1.5 1.5-1.5zm7 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S14 10.83 14 10s.67-1.5 1.5-1.5zM12 17.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"/>`,
  sparkle: `<path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/>`,
  aligner: `<path d="M12 3C7.58 3 4 5.69 4 9c0 2.13 1.4 3.99 3.5 5.06V17c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-2.94C18.6 12.99 20 11.13 20 9c0-3.31-3.58-6-8-6zm-3 12.5v-2.02c1.85.68 4.15.68 6 0V15.5H9z"/>`,
} as const;

export type IconName = keyof typeof ICONS;

// Shared color pairs (icon fill + circle background) matching the homepage's
// per-category palette (src/pages/index.astro), so sub-service pages inherit
// the same look as their parent category card.
export const CATEGORY_COLORS = {
  generalFamily: { iconColor: '#1D4D2F', bgColor: '#E8F2EB' },
  cosmetic: { iconColor: '#3A7D44', bgColor: '#EBF4EC' },
  implants: { iconColor: '#163232', bgColor: '#E6EFEF' },
  oralSurgery: { iconColor: '#1D4D2F', bgColor: '#E8F2EB' },
  endodontics: { iconColor: '#3A7D44', bgColor: '#EBF4EC' },
  pediatric: { iconColor: '#1D4D2F', bgColor: '#FAF4E4' },
} as const;

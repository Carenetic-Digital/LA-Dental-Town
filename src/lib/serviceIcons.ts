// Shared icon set (Material-style, single-color fill, 24x24 viewBox) used
// across /services/ pages and the homepage service cards. Each glyph is
// chosen to read as the treatment it represents at small sizes.

export const ICONS = {
  // Category icons
  // General & Family — molar
  tooth: `<path d="M12 2C9.79 2 8 3.12 7 4.5 6 3.12 4 3 4 5.5 4 8.5 5.5 10 5.5 13c0 2.5.5 7 2.5 7 1.5 0 2-2.5 2.5-4.5h3C14 17.5 14.5 20 16 20c2 0 2.5-4.5 2.5-7 0-3 1.5-4.5 1.5-7.5 0-2.5-2-2.38-3-1C16 3.12 14.21 2 12 2z"/>`,
  // Cosmetic Dentistry — smile
  star: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3.5 6.5c.83 0 1.5.67 1.5 1.5S9.33 11.5 8.5 11.5 7 10.83 7 10s.67-1.5 1.5-1.5zm7 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S14 10.83 14 10s.67-1.5 1.5-1.5zM12 17.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"/>`,
  // Dental Implants — crown on a threaded fixture
  implant: `<path d="M12 1.5C9.8 1.5 8 3 8 4.8c0 1.2.9 2.2 1.4 2.5h5.2c.5-.3 1.4-1.3 1.4-2.5C16 3 14.2 1.5 12 1.5zM10.5 7.3h3v1.7h-3V7.3zM9.2 9.2h5.6v1.8H9.2V9.2zm.7 2.3h4.2v1.8h-4.2v-1.8zm.6 2.3h3v1.8h-3v-1.8zm.6 2.3h1.8V22h-1.8v-5.9z"/>`,
  // Oral Surgery — medical bag with plus
  surgery: `<path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm6 11h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z"/>`,
  // Endodontics / Root Canal — molar with a treated canal
  check: `<path fill-rule="evenodd" d="M10 1h4v1.5h-1.25V3.2h-1.5V2.5H10V1zM12 3.2C9.79 3.2 8 4.32 7 5.7 6 4.32 4 4.2 4 6.7 4 9.7 5.5 11.2 5.5 14.2c0 2.5.5 7 2.5 7 1.5 0 2-2.5 2.5-4.5h3c.5 2 1 4.5 2.5 4.5 2 0 2.5-4.5 2.5-7 0-3 1.5-4.5 1.5-7.5 0-2.5-2-2.38-3-1C16 4.32 14.21 3.2 12 3.2zM12 7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-7C10.5 7.67 11.17 7 12 7z"/>`,
  // Pediatric Dentistry — adult and child
  kids: `<path d="M8 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM4 9h8v3H10v10H6V12H4V9zM17 5c.83 0 1.5.67 1.5 1.5S17.83 8 17 8s-1.5-.67-1.5-1.5S16.17 5 17 5zM14.5 9.5h5v2H18v8h-2v-8h-1.5v-2z"/>`,

  // Sub-service icons
  // Crowns and Bridges
  crown: `<path d="M5 20h14v2H5v-2zm14.28-11.03L17 11l-2.5-4.5L12 11 9.5 6.5 7 11 4.72 8.97 3 18h18l-1.72-9.03z"/>`,
  // Veneers — porcelain shell / front tooth
  smile: `<path d="M8 3c0-1.1 1.79-2 4-2s4 .9 4 2v10.5c0 .83-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5V3z"/>`,
  // Teeth Whitening
  sparkle: `<path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/>`,
  // Invisalign — clear aligner tray (horseshoe)
  aligner: `<path d="M2 16c0-6.08 4.48-11 10-11s10 4.92 10 11h-3c0-4.42-3.13-8-7-8s-7 3.58-7 8H2zm5 1.5C7 19.43 9.24 21 12 21s5-1.57 5-3.5H7z"/>`,
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

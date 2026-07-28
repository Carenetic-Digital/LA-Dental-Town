// Canonical registry of service cards used for cross-linking from provider
// bio pages back to the /services/* pages each doctor is associated with.
// Icon/color pairs are kept identical to each service's own hero treatment
// (src/pages/services/*.astro) so a given service always looks the same
// wherever it's referenced across the site.

import { ICONS, CATEGORY_COLORS } from './serviceIcons';

export interface ServiceCardData {
  title: string;
  description: string;
  href: string;
  icon: string;
  iconColor: string;
  bgColor: string;
}

export const SERVICE_REGISTRY: Record<string, ServiceCardData> = {
  'general-family-dentistry': {
    title: 'General & Family Dentistry',
    description: 'Comprehensive care for patients of all ages — cleanings, exams, crowns & more.',
    href: '/services/general-family-dentistry/',
    icon: ICONS.tooth,
    ...CATEGORY_COLORS.generalFamily,
  },
  'cosmetic-dentistry': {
    title: 'Cosmetic Dentistry',
    description: 'Veneers, Invisalign, teeth whitening & smile makeovers — beautiful, natural results.',
    href: '/services/cosmetic-dentistry/',
    icon: ICONS.star,
    ...CATEGORY_COLORS.cosmetic,
  },
  'crowns-and-bridges': {
    title: 'Crowns and Bridges',
    description: 'Restore damaged, weakened, or missing teeth with a durable, natural-looking fit.',
    href: '/services/crowns-and-bridges/',
    icon: ICONS.crown,
    ...CATEGORY_COLORS.generalFamily,
  },
  veneers: {
    title: 'Veneers',
    description: 'Thin porcelain shells that cover chips, gaps, and discoloration for a natural finish.',
    href: '/services/veneers/',
    icon: ICONS.smile,
    ...CATEGORY_COLORS.cosmetic,
  },
  invisalign: {
    title: 'Invisalign',
    description: 'Clear aligners that straighten teeth without metal brackets or wires.',
    href: '/services/invisalign/',
    icon: ICONS.aligner,
    ...CATEGORY_COLORS.cosmetic,
  },
  'teeth-whitening': {
    title: 'Teeth Whitening',
    description: 'In-office laser whitening — noticeably brighter in about an hour.',
    href: '/services/teeth-whitening/',
    icon: ICONS.sparkle,
    ...CATEGORY_COLORS.cosmetic,
  },
  'dental-implants': {
    title: 'Dental Implants',
    description: 'The only restoration that preserves jawbone — permanent, natural-looking teeth.',
    href: '/services/dental-implants/',
    icon: ICONS.implant,
    ...CATEGORY_COLORS.implants,
  },
  'oral-surgery': {
    title: 'Oral Surgery',
    description: 'Expert wisdom teeth removal & extractions by our on-staff oral surgeon.',
    href: '/services/oral-surgery/',
    icon: ICONS.surgery,
    ...CATEGORY_COLORS.oralSurgery,
  },
  'wisdom-teeth': {
    title: 'Wisdom Teeth',
    description: 'The most common reason patients see our oral surgeon — evaluated with digital X-rays.',
    href: '/services/wisdom-teeth/',
    icon: ICONS.tooth,
    ...CATEGORY_COLORS.oralSurgery,
  },
  endodontics: {
    title: 'Endodontics',
    description: 'Root canals performed by our board-certified, Columbia-trained endodontist.',
    href: '/services/endodontics/',
    icon: ICONS.check,
    ...CATEGORY_COLORS.endodontics,
  },
  'root-canal': {
    title: 'Root Canal',
    description: 'The most common endodontic treatment — removing infected tissue to save the natural tooth.',
    href: '/services/root-canal/',
    icon: ICONS.check,
    ...CATEGORY_COLORS.endodontics,
  },
  'pediatric-dentistry': {
    title: 'Pediatric Dentistry',
    description: 'Gentle, fun care for kids from their first visit — play area & PlayStation on-site.',
    href: '/services/pediatric-dentistry/',
    icon: ICONS.kids,
    ...CATEGORY_COLORS.pediatric,
  },
};

/** Resolve a list of service registry keys to full card data, skipping any unknown keys. */
export function resolveServices(slugs: string[]): ServiceCardData[] {
  return slugs.map((slug) => SERVICE_REGISTRY[slug]).filter(Boolean);
}

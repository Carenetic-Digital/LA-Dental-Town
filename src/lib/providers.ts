// Provider roster and bio content for /provider/ and /provider/[slug]/ pages.
//
// Photo status (confirmed June 24 headshot shoot — see
// intake/ladentaltown-intake-summary.md and public/images/providers/):
//   - Real photos exist ONLY for margaret-wu, jennifer-wu, tiffany-tran.
//   - The other 4 providers have no photo on file anywhere (confirmed by
//     inspecting the live site's raw HTML — not a fetch failure). photoSlug
//     is null for them; pages must render the initials placeholder, never a
//     broken <img> or an invented photo.
//
// Bio status (see intake/ladentaltown-intake-summary.md lines 239-294):
//   - Approved narrative bios exist ONLY for margaret-wu, jennifer-wu,
//     tiffany-tran. hasBio is true only for those three.
//   - The other 4 providers' bios are confirmed pending from Norma. Their
//     entries carry only facts confirmed in reference/analysis.md's Provider
//     Profiles table — name, title, specialty/credential. No hobbies,
//     education, or personality details are invented for them.

export interface Provider {
  slug: string;
  /** Full display name, e.g. "Dr. Margaret Wu, DDS" */
  name: string;
  /** Name used in headings like "Meet Dr. Wu" — disambiguates the two Dr. Wus */
  shortName: string;
  /** Uppercase tracked line under the eyebrow in the hero, e.g. "CO-FOUNDER · GENERAL & COSMETIC DENTIST" */
  specialtyLine: string;
  /** Short label used on index cards and in cross-links from service pages */
  cardTitle: string;
  /** One or two initials for the placeholder avatar */
  initials: string;
  /** Filename (no extension) in public/images/providers/, or null if no photo exists */
  photoSlug: string | null;
  /** One-sentence pull statement under the name in the hero */
  tagline: string;
  hasBio: boolean;
  /** Approved bio, pre-split into paragraphs. Empty when hasBio is false. */
  bioParagraphs: string[];
  credentialsIntro?: string;
  /** Plain bullet list of confirmed credentials. Empty array = section is omitted. */
  credentialsList: string[];
  /** Keys into SERVICE_REGISTRY (src/lib/providerServices.ts) */
  services: string[];
}

export const PROVIDERS: Provider[] = [
  {
    slug: 'margaret-wu-dds',
    name: 'Dr. Margaret Wu, DDS',
    shortName: 'Dr. Margaret Wu',
    specialtyLine: 'Co-Founder · General & Cosmetic Dentist',
    cardTitle: 'General & Cosmetic Dentist',
    initials: 'MW',
    photoSlug: 'margaret-wu',
    tagline: 'Board-certified general dentist providing comprehensive and cosmetic dental care to the East Los Angeles community for more than two decades.',
    hasBio: true,
    bioParagraphs: [
      "A co-founder of LA Dental Town, board-certified general dentist Margaret Wu, DDS, takes great pride in providing exceptional dental care to the East Los Angeles community through her private practice and in an academic capacity. Dr. Wu provides comprehensive dental care, including cosmetic dentistry makeovers, to patients of all ages in a relaxing, personalized atmosphere where patient comfort and satisfaction are top priorities. Dr. Wu graduated from the University of California, Berkeley, with a bachelor's degree in molecular and cellular biology and a minor in education. She then pursued her dental degree at the University of California, San Francisco, School of Dentistry. In addition to her board certification, Dr. Wu is a certified Invisalign® Premier Provider. She also maintains active memberships in the American Dental Association, the Chinese American Dental Association, and the San Gabriel Valley Dental Society.",
      "In addition to providing the highest standard of dental services to her patients in East Los Angeles and the surrounding communities, Dr. Wu served as a volunteer faculty clinical instructor at UCLA, and she lectures at community organizations and local schools. She excels in general, family, and cosmetic dentistry, including crowns, bridges, dentures, and veneers, and strives to stay abreast of the latest technology and cutting-edge dental techniques. She was awarded \"America's Top Dentist\" several years in a row. When not caring for patients at LA Dental Town, Dr. Wu enjoys cooking, eating at new restaurants, and spending time with her husband and children.",
    ],
    credentialsIntro: "Dr. Wu's education and ongoing memberships reflect two decades of staying current with the latest techniques in general and cosmetic dentistry.",
    credentialsList: [
      'Doctor of Dental Surgery (DDS) — University of California, San Francisco, School of Dentistry',
      "Bachelor's degree in Molecular & Cellular Biology, Minor in Education — University of California, Berkeley",
      'Board Certified General Dentist',
      'Certified Invisalign® Premier Provider',
      'Member, American Dental Association',
      'Member, Chinese American Dental Association',
      'Member, San Gabriel Valley Dental Society',
      'Volunteer Faculty Clinical Instructor, UCLA',
      "Recipient, \"America's Top Dentist\" (multiple years)",
    ],
    services: ['general-family-dentistry', 'cosmetic-dentistry', 'crowns-and-bridges', 'veneers', 'invisalign', 'teeth-whitening'],
  },
  {
    slug: 'jennifer-wu-dds',
    name: 'Dr. Jennifer Wu, DDS',
    shortName: 'Dr. Jennifer Wu',
    specialtyLine: 'Co-Founder · General & Cosmetic Dentist',
    cardTitle: 'General & Cosmetic Dentist',
    initials: 'JW',
    photoSlug: 'jennifer-wu',
    tagline: 'Board-certified general dentist and certified Invisalign® Premier Provider, known for a gentle, patient-first approach to family and cosmetic care.',
    hasBio: true,
    bioParagraphs: [
      "Dr. Jennifer Wu is a co-founder of LA Dental Town. She is a Board Certified general dentist, a certified Invisalign Premier Provider, an active member of the American Dental Association, California Dental Association and San Gabriel Valley Dental Society. She was also awarded America's Top Dentist and Pasadena Top Dentist. As a certified Invisalign Premier Provider, Dr. Jen is your specialist for an alternative and rewarding option for treating misaligned teeth. She understands that regular braces may not be every patient's preferred choice to recover a straight smile. With Invisalign, patients can experience a more comfortable orthodontics treatment that allows them to continue with their regular day-to-day routines without interruption.",
      "She works tirelessly and without making any compromises in order to provide the most exceptional level of dental care. She is passionate about delivering a comprehensive and personalized level of service accompanied with a gentle and personable personality. She enjoys all aspects of family dentistry, but finds smile transformations and cosmetic dentistry to be especially rewarding. Outside of her private practice, Dr. Jen volunteers by providing dental care to the homeless locally and abroad. During her free time, Dr. Jen enjoys good food, relaxing evenings with her husband and beautiful hikes with family and friends.",
    ],
    credentialsIntro: 'Dr. Jen combines board certification with Invisalign specialty training to offer patients a comfortable, comprehensive path to a straighter, healthier smile.',
    credentialsList: [
      'Doctor of Dental Surgery (DDS) — University of the Pacific, Arthur A. Dugoni School of Dentistry',
      "Bachelor's degree in Molecular & Cellular Biology, Minor in Education — University of California, Berkeley",
      'Board Certified General Dentist',
      'Certified Invisalign® Premier Provider',
      'Member, American Dental Association',
      'Member, California Dental Association',
      'Member, San Gabriel Valley Dental Society',
      "Recipient, America's Top Dentist",
      'Recipient, Pasadena Top Dentist',
    ],
    services: ['general-family-dentistry', 'cosmetic-dentistry', 'crowns-and-bridges', 'veneers', 'invisalign', 'teeth-whitening'],
  },
  {
    slug: 'tiffany-tran-dds',
    name: 'Dr. Tiffany Tran, DDS, MS',
    shortName: 'Dr. Tiff',
    specialtyLine: 'Pediatric Dentist',
    cardTitle: 'Pediatric Dentist',
    initials: 'TT',
    photoSlug: 'tiffany-tran',
    tagline: 'Board-certified pediatric dentist with a gentle, behavioral approach that turns anxious first visits into happy ones.',
    hasBio: true,
    bioParagraphs: [
      "Dr. Tiff is a Board Certified pediatric dentist and a Diplomate of the American Board of Pediatric Dentistry. Throughout her career, she has been nothing less than dedicated to providing the highest quality oral health care to children ranging from infants to young adults. Having taught at Boston College of Dentistry, Dr. Tiff takes pride in her ability to nurture fearful children and turn them into happy patients. Her gentle and patient approach to treatment makes dental visits easy and comfortable. Each day, she is committed to her goal of ensuring that each child leaves L.A. Dental Town knowing that dental visits can be fun! Her expertise and behavioral approach to dentistry has gained traction not only among high-end dental offices, but also to children and families of low income background.",
      "Dr. Tiff is an active member of the American Dental Society, American Academy of Pediatric Dentistry, California Dental Association and San Gabriel Valley Dental Society. In her free time, Dr. Tiffany enjoys traveling, baking, staying active, and exploring the outdoors. You can find Dr. Tiff spending her free time with her family, friends and maltipoo Toby.",
    ],
    credentialsIntro: "Dr. Tiff's specialty training focuses on treating children of every age, with particular expertise in helping anxious or fearful patients feel at ease.",
    credentialsList: [
      'Doctor of Dental Surgery (DDS) — University of the Pacific, Arthur A. Dugoni School of Dentistry',
      'Advanced Specialty Training in Pediatric Dentistry — Boston University, Henry M. Goldman School of Dentistry',
      'Board Certified Pediatric Dentist',
      'Diplomate, American Board of Pediatric Dentistry',
      'Former Faculty, Boston College of Dentistry',
      'Member, American Dental Society',
      'Member, American Academy of Pediatric Dentistry',
      'Member, California Dental Association',
      'Member, San Gabriel Valley Dental Society',
    ],
    services: ['pediatric-dentistry'],
  },
  {
    slug: 'nadia-hassan-dds',
    name: 'Dr. Nadia Hassan, DDS',
    shortName: 'Dr. Hassan',
    specialtyLine: 'Oral Surgeon',
    cardTitle: 'Oral Surgeon',
    initials: 'NH',
    photoSlug: null,
    tagline: 'Oral surgeon on staff at LA Dental Town, providing wisdom teeth removal and extractions for patients in East Los Angeles.',
    hasBio: false,
    bioParagraphs: [],
    credentialsList: [],
    services: ['oral-surgery', 'wisdom-teeth'],
  },
  {
    slug: 'seong-lee-dds',
    name: 'Dr. Seong Lee, DDS',
    shortName: 'Dr. Lee',
    specialtyLine: 'Endodontist',
    cardTitle: 'Endodontist',
    initials: 'SL',
    photoSlug: null,
    tagline: 'Board-certified endodontist trained at Columbia University, providing root canal therapy on staff at LA Dental Town.',
    hasBio: false,
    bioParagraphs: [],
    credentialsList: ['Board Certified Endodontist', 'Trained at Columbia University'],
    services: ['endodontics', 'root-canal'],
  },
  {
    slug: 'eugene-kim-dds',
    name: 'Dr. Eugene Kim, DDS',
    shortName: 'Dr. Kim',
    specialtyLine: 'Dental Implant Specialist',
    cardTitle: 'Dental Implant Specialist',
    initials: 'EK',
    photoSlug: null,
    tagline: 'Dental implant specialist on staff at LA Dental Town, providing permanent, natural-looking tooth replacement.',
    hasBio: false,
    bioParagraphs: [],
    credentialsList: [],
    services: ['dental-implants'],
  },
  {
    slug: 'angelica',
    name: 'Angelica',
    shortName: 'Angelica',
    specialtyLine: 'Registered Dental Hygienist',
    cardTitle: 'Registered Dental Hygienist',
    initials: 'A',
    photoSlug: null,
    tagline: 'Registered Dental Hygienist providing cleanings and preventive care at LA Dental Town.',
    hasBio: false,
    bioParagraphs: [],
    credentialsList: [],
    services: ['general-family-dentistry'],
  },
];

export function getProvider(slug: string): Provider | undefined {
  return PROVIDERS.find((p) => p.slug === slug);
}

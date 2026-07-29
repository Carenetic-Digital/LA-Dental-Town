// Provider roster and bio content for /provider/ and /provider/[slug]/ pages.
//
// Photo status (confirmed June 24 headshot shoot — see
// intake/ladentaltown-intake-summary.md and public/images/providers/):
//   - Real photos exist ONLY for margaret-wu, jennifer-wu, tiffany-tran.
//   - The other 4 providers have no photo on file anywhere (confirmed by
//     inspecting the live site's raw HTML on 2026-07-29 — no <img> tags with
//     src on their bio pages, not a fetch failure). photoSlug is null for
//     them; pages must render the initials placeholder, never a broken
//     <img> or an invented photo.
//
// Bio status (pulled verbatim from https://www.ladentaltown.com/provider/
// on 2026-07-29):
//   - All 7 providers now have approved narrative bios. The 2026-07-29 pull
//     added bios for nadia-hassan-dds, seong-lee-dds, eugene-kim-dds, and
//     angelica — previously these carried only facts confirmed in
//     reference/analysis.md's Provider Profiles table.
//   - NOTE: the live site lists this pediatric dentist as "Tiffany Wu, DDS"
//     (URL /provider/tiffany-wu-dds/), with bio text identical to what this
//     file already has under slug tiffany-tran-dds ("Dr. Tiff"/Boston
//     University/maltipoo Toby). Left as tiffany-tran-dds here pending
//     confirmation from the client on which surname is current — flag
//     before launch.

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
    hasBio: true,
    bioParagraphs: [
      "Dr. Nadia Hassan is a Southern California native and oral and maxillofacial surgeon on staff at LA Dental Town. She earned a bachelor's degree in biological science and neuroscience from the University of Southern California, graduating among the top of her class, before pursuing her dental degree at the UCLA School of Dentistry, where she again graduated among the top of her class and received honors in several categories along with awards for clinical excellence and patient care. She went on to complete UCLA's Oral and Maxillofacial Surgery program, earning a Medical Degree from the David Geffen School of Medicine at UCLA along with an internship certificate in general surgery and advanced training in temporomandibular joint disorders, maxillofacial trauma, benign tumor resection and reconstruction, and dental reconstruction with implants and allogeneic bone grafting.",
      "Dr. Hassan is committed to enhancing patient care by integrating her background in biology with her dental and surgical training, and hopes to pursue research in the field, though she considers patient care her first priority. Outside the practice, she enjoys traveling, skiing, reading, and spending time with family and friends.",
    ],
    credentialsIntro: "Dr. Hassan's combined medical and dental training reflects an unusually deep foundation in oral and maxillofacial surgery.",
    credentialsList: [
      'Doctor of Dental Surgery (DDS) — UCLA School of Dentistry',
      "Bachelor's degree in Biological Science/Neuroscience — University of Southern California",
      'Medical Degree (MD) — David Geffen School of Medicine at UCLA',
      'Certificate, Oral and Maxillofacial Surgery — UCLA',
      'Internship Certificate, General Surgery',
    ],
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
    hasBio: true,
    bioParagraphs: [
      "Dr. Seong Lee is a Board Certified endodontist on staff at LA Dental Town, specializing in root canal therapy. He earned a bachelor's degree in biology from the University of California, Irvine, and his dental degree from the University of Pennsylvania School of Dentistry. Before pursuing his specialty, Dr. Lee served three years as a general dentist in the U.S. Army, where he performed all facets of restorative dentistry. He then completed his endodontic residency at Columbia University.",
      "Dr. Lee helps patients dealing with a painful bite, high sensitivity to temperature, or swelling around a tooth, providing timely and responsive care designed to save natural teeth whenever possible. Outside the office, he enjoys spending time with his wife and two kids, traveling, hiking, and golf.",
    ],
    credentialsIntro: "Dr. Lee's military dental service and endodontic residency at Columbia give him deep experience across both general restorative and specialty root canal care.",
    credentialsList: [
      'Doctor of Dental Surgery (DDS) — University of Pennsylvania School of Dentistry',
      "Bachelor's degree in Biology — University of California, Irvine",
      'Endodontic Residency — Columbia University',
      'Board Certified Endodontist',
      'Former General Dentist, U.S. Army (3 years)',
    ],
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
    hasBio: true,
    bioParagraphs: [
      "Dr. Eugene Kim is a dental implant specialist on staff at LA Dental Town and one of dentistry's most respected clinicians and educators in implant surgery and prosthodontics. He earned his dental degree from the UCLA School of Dentistry and completed advanced specialty training in prosthodontics, also at UCLA, where he later served as a clinical instructor in the department of removable prosthodontics.",
      "Dr. Kim founded and directs the Pacific Implant Academy, where he currently serves as president, and maintains a private practice in Buena Park focused on implant surgery and prosthodontics. He is a member of the Academy of Osseointegration, the American College of Prosthodontists, and the American Dental Association, and his work has been recognized by organizations including the Filipino Dental Society, the Aesthetic Dental Institute, and the Contemporary Dental Institute. He remains active in teaching implant dentistry through lectures, seminars, and live surgical courses.",
    ],
    credentialsIntro: "Dr. Kim's advanced prosthodontics training and years directing the Pacific Implant Academy reflect a specialty focus on complex implant and restorative cases.",
    credentialsList: [
      'Doctor of Dental Surgery (DDS) — UCLA School of Dentistry',
      'Advanced Specialty Training in Prosthodontics — UCLA',
      'Founder & President, Pacific Implant Academy',
      'Former Clinical Instructor, Department of Removable Prosthodontics, UCLA School of Dentistry',
      'Member, Academy of Osseointegration',
      'Member, American College of Prosthodontists',
      'Member, American Dental Association',
    ],
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
    hasBio: true,
    bioParagraphs: [
      "Angelica is a Registered Dental Hygienist at LA Dental Town who earned her bachelor's degree in Dental Hygiene from the University of Southern California. She is happy to work hand in hand with the practice's team of compassionate doctors and assistants, and hopes to give every patient a positive dental experience while helping them maintain their best oral health. Patients value her gentle, thorough, and kind approach during routine and deep cleanings.",
      "Outside the office, Angelica enjoys working out, exploring California, and spending time with her dog, Ford.",
    ],
    credentialsList: [
      "Bachelor's degree in Dental Hygiene — University of Southern California",
      'Registered Dental Hygienist (RDH)',
    ],
    services: ['general-family-dentistry'],
  },
];

export function getProvider(slug: string): Provider | undefined {
  return PROVIDERS.find((p) => p.slug === slug);
}

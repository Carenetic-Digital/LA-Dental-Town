# LA Dental Town — Website Rebuild Intake Summary
**Client:** LA Dental Town  
**Client Contact:** Norma Adams  
**Agency:** Skyhook Interactive  
**Project Team:** Nathan Norberg, Carrie  
**Intake Call Date:** June 24, 2026  
**Current Site:** https://www.ladentaltown.com  

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Design Direction & Inspiration Sites](#design-direction--inspiration-sites)
3. [Global / Sitewide Requirements](#global--sitewide-requirements)
4. [Page-by-Page Build Notes](#page-by-page-build-notes)
5. [Content Migration](#content-migration)
6. [SEO Requirements](#seo-requirements)
7. [Integrations & Widgets](#integrations--widgets)
8. [Assets Checklist](#assets-checklist)
9. [Timeline & Next Steps](#timeline--next-steps)
10. [Open Items & Gaps](#open-items--gaps)

---

## Project Overview

LA Dental Town is rebuilding their website from the ground up. The primary goals are:

- Modernize the design and visual presentation (current site feels dated and stocky)
- Replace all stock imagery with real, organic photos and video from a June 24 photo/video shoot
- Better showcase the doctors' credentials and expertise
- Restructure the services architecture from a flat list into tiered categories
- Improve patient trust signals (reviews, ratings, before/after)
- Retain and protect existing SEO equity, especially around "East Los Angeles" keyword targeting
- Integrate a practice management booking widget throughout the site

The current site platform (PatientPop) is being migrated off. The new site will include Skyhook's inline CMS for lightweight post-launch edits.

---

## Design Direction & Inspiration Sites

The following sites were referenced during the call as design and UX inspiration. Each is cited below with what specifically to borrow.

### Primary Inspiration
**Bel Air Dental Arts** — Overall look, feel, and layout  
- Light color palette, elevated aesthetic
- Sticky "Book Now" CTA that follows the user on scroll
- Floating Google Reviews badge (lower-left corner, follows scroll)
- About/location/CTA structure on homepage
- Testimonials section style (curated, well-worded, not auto-pulled)

### Secondary Inspiration
| Site | What to Borrow |
|------|---------------|
| **Trusted Dental Group** (Hawthorne) | Hero section: ~20-second welcome/walk-in video above the fold |
| **Bedford Dental Group (BDFG / bhdentist.com)** | Services page: category dropdown navigation, real doctor photos; Meet the Doctors layout with credentials and education |
| **Children's Fun Zone / CDF Zone (cdfzone.com)** | Google rating badge in upper-left (e.g., "4.9 ★ on Google") — displayed prominently near navigation; service display as rounded bubbles/cards |

---

## Global / Sitewide Requirements

### Color Palette
Extracted from the client's marketing flyer and Meet the Doctors PDF. These are the confirmed brand colors — use as the definitive reference.

| Role | Color | Approx. Hex |
|------|-------|-------------|
| **Primary Dark Green** | Logo, footer bar, nav elements, badge backgrounds | `#1D4D2F` |
| **Medium Green** | Price text, brush stroke accents, CTA highlights | `#3A7D44` |
| **Gold / Warm Yellow** | Sparkle accents, heart icons, decorative dividers | `#C9A84C` |
| **Dark Teal** | Secondary dark panel (e.g., "Scan to Book" section) | `#163232` |
| **Cream / Off-White** | Page/section background | `#F8F4EC` |
| **White** | Card backgrounds, text on dark | `#FFFFFF` |
| **Near-Black** | Body text | `#1A1A1A` |

> **Notes:** Gold is present in the marketing materials as an accent only — Norma confirmed she doesn't love gold as a dominant color. Use it sparingly as a decorative accent (sparkles, dividers, icons) and let the greens lead. The cream background gives the design warmth without feeling clinical.

### Brand Tagline & Key Messaging
Pulled directly from the client's marketing materials — use these consistently across the site:

- **Primary tagline:** *"Healthy Smiles. Happy Lives."*
- **Sub-tagline:** *"Quality Care for the Whole Family"*
- **Practice intro (Meet the Doctors flyer):** *"Get to know the caring professionals behind your smiles!"*
- **Key practice differentiators (from flyer icons — feature these on the homepage and relevant pages):**
  - Walk-Ins Welcome
  - Se Habla Español
  - PPO & Medical Accepted
  - Convenient Appointments
  - Advanced Technology
  - Beautiful, Natural Results

> These differentiators should appear as an icon strip or feature bar on the homepage, similar to how they appear on the print flyer.

### Photography & Video
- **Replace all stock images** across every page with real photos from the June 24 shoot
- New photos include: office interior, staff, doctors' hands during procedures, patient smiles, pediatric moments (e.g., child brushing alligator's teeth — use for pediatric service page)
- New elevated office photos replace the current lower-quality photo gallery

### Typography & General Style
- Lighter, more modern aesthetic overall — reference Bel Air Dental Arts
- Doctor profile photos must be **uniform in crop, size, and aspect ratio** (current site has distorted/squished headshots due to a CSS height constraint — do not carry this forward)

### Navigation Structure (Revised)
Based on call decisions and site crawl, the proposed nav structure is:

```
Home
Appointments
About Us
  └─ Providers / Meet the Doctors
  └─ Our Office
Services
  └─ General & Family Dentistry
      └─ Dental Exams & Cleanings [new — inferred]
      └─ Crowns & Bridges
      └─ [others per Norma's confirmed list]
  └─ Cosmetic Dentistry
      └─ Veneers
      └─ Teeth Whitening
      └─ Invisalign
      └─ [others per Norma's confirmed list]
  └─ Dental Implants
      └─ Dental Implants
      └─ [e.g., All-on-4, implant-supported options — confirm]
  └─ Oral Surgery
      └─ Wisdom Teeth Removal
      └─ Tooth Extractions [new — inferred]
      └─ [others per Norma's confirmed list]
  └─ Endodontics
      └─ Root Canal
      └─ [others per Norma's confirmed list]
  └─ Pediatric Dentistry
      └─ Children's Dental Exams [new — inferred]
      └─ [others per Norma's confirmed list]
Patient Resources
  └─ First Visit
  └─ Financial & Insurance
  └─ Patient Forms
Before & After
Blog
Testimonials
Contact
```
> **⚠ NOTE:** "Comfort & Safety" is being removed from Patient Resources. Fold its content into a relevant Services page or an "Our Approach" section under About. Confirm placement with Nathan/Norma.  
> **⚠ NOTE:** The architecture above is a draft derived from the current site crawl + doctor specialty tags. Items marked [new — inferred] have not been confirmed by the client. Do not build until Norma's complete services list is received.

---

## Page-by-Page Build Notes

---

### 🏠 Homepage

#### Hero Section (Above the Fold)
- **Replace** the current static hero image with the ~20-second **welcome/walk-in video** shot June 24
- Reference: Trusted Dental Group (Hawthorne) hero video treatment
- Remove the phone number from its current hero placement
- Primary CTA above the fold: **"Book Now"** button that triggers the booking widget (see Integrations section)

#### Sticky / Floating Elements (Sitewide, set on Homepage)
- **Sticky "Book Now" button** — follows user on scroll down every page (reference: Bel Air Dental Arts)
- **Floating Google Reviews badge** — lower-left corner, follows scroll (reference: Bel Air Dental Arts)
- **Google Rating badge** — display "4.9 ★ Google Rating" prominently near the top of the page, potentially as a sub-bar beneath the main navigation (reference: CDF Zone upper-left treatment). LA Dental Town has a 4.9 Google rating.

#### "Top Rated Doctors" Call-Out
- Retain this messaging from the current site
- Exact placement can change, but must appear on the homepage
- Reference the Time Magazine advertorial recognition (Drs. Jennifer Wu & Margaret Wu selected as Top Rated Dentists in Los Angeles)

#### About / Practice Intro Section
- Include a "Who We Are" / practice philosophy section
- Emphasize: East Los Angeles community, family and cosmetic dentistry, patient comfort, advanced technology
- Highlight school credentials and specialty training of the doctors
- Pull from existing homepage copy where accurate; update tone/style to match new design

#### Services Section
- **Remove** the current awkward layout (two featured + 8 icon squares with stock images)
- **Replace** with a cleaner bubble/card-style grid (reference: CDF Zone service bubbles)
- Display top-level service categories on the homepage; each links to its Services sub-page
- Use real photos (doctor's hands, procedures, etc.) — not stock icons or generic imagery
- Reference: bhdentist.com services dropdown layout for structure inspiration

#### Office Tour Section
- **Replace** the current photo slideshow with the **office tour video** — this will be a separate cut from the hero video
- Use a placeholder video in the meantime; swap in final asset when delivered
- Supplement with select new office photos around the video if needed

#### Blog Preview Section
- Retain a blog preview section on the homepage (3 most recent posts)
- Migrate all existing blog content (14 posts confirmed)

#### Testimonials Section
- Display **curated** testimonials — do not auto-pull from Google (risk of short/weak reviews appearing)
- Style reference: bhdentist.com / Bel Air Dental Arts testimonial sections
- Source quotes from existing Yelp and Google reviews; select the best ones manually

#### Location / Contact Info
- Keep address, phone number, and map embed
- Add booking widget CTA here as well

---

### 👨‍⚕️ Providers / Meet the Doctors

This page needs a significant upgrade from the current "high school yearbook" style.

#### Layout & Style
- Reference: **Bedford Dental Group (BDFG)** Meet the Doctors page
- Each doctor gets a full, elevated profile — not just a headshot and name
- Profile elements to include:
  - Professional headshot (new, uniform crop/size from June 24 shoot)
  - Name and title
  - Education / schools attended (they attended top schools — emphasize this)
  - Specialty training and certifications
  - List of services/procedures they perform (links to relevant service pages)
  - Short bio paragraph

#### Full Provider Roster (Confirmed via site crawl — 7 providers)

| Name | Title | Specialty |
|------|-------|-----------|
| **Margaret Wu, DDS** | Doctor | Dentist / Cosmetic / Family |
| **Jennifer Wu, DDS** | Doctor | Dentist / Cosmetic / Family |
| **Tiffany Tran, DDS, MS** | Doctor | Pediatric Dentist |
| **Nadia Hassan, DDS** | Doctor | Oral Surgeon |
| **Seong Lee, DDS** | Doctor | Endodontist |
| **Eugene Kim, DDS** | Doctor | Dental Implant Specialist |
| **Angelica** | Staff | Registered Dental Hygienist |

> 🚨 **CRITICAL — NAME DISCREPANCY:** The Meet the Doctors flyer clearly shows the pediatric dentist as **Dr. Tiffany TRAN, DDS, MS**. The current website lists her as "Tiffany Wu, DDS." This must be corrected on both the current site and the new build. Confirm the correct legal name with Norma before publishing anything.

> **⚠ NOTE:** Confirm with Norma whether Angelica (hygienist) should get a full profile page or a simpler team listing entry.  
> **⚠ NOTE:** New headshots from the June 24 shoot are needed for all providers — confirm all 7 were photographed. The Meet the Doctors flyer includes updated headshots of the three Wu/Tran doctors that can serve as reference for the style/crop to match.

---

#### Doctor Bios (✅ Resolved — sourced from site + PDF flyer)

---

**DR. MARGARET WU, DDS**
*Co-Founder | General & Cosmetic Dentist*

- **College:** University of California, Berkeley — Molecular and Cellular Biology, Minor in Education
- **Dental School:** University of California, San Francisco, School of Dentistry
- **Certifications:** Board Certified General Dentist; Certified Invisalign® Premier Provider
- **Memberships:** American Dental Association, Chinese American Dental Association, San Gabriel Valley Dental Society
- **Awards:** "America's Top Dentist" — multiple years; selected as a Top Rated Dentist in Los Angeles (featured in Time Magazine advertorial)
- **Academic:** Volunteer faculty clinical instructor at UCLA; lectures at community organizations and local schools
- **Specialties:** Comprehensive and cosmetic dentistry, crowns, bridges, dentures, veneers, Invisalign, full-mouth makeovers

**Bio (from site — approved for use):**
> A co-founder of LA Dental Town, board-certified general dentist Margaret Wu, DDS, takes great pride in providing exceptional dental care to the East Los Angeles community through her private practice and in an academic capacity. Dr. Wu provides comprehensive dental care, including cosmetic dentistry makeovers, to patients of all ages in a relaxing, personalized atmosphere where patient comfort and satisfaction are top priorities. Dr. Wu graduated from the University of California, Berkeley, with a bachelor's degree in molecular and cellular biology and a minor in education. She then pursued her dental degree at the University of California, San Francisco, School of Dentistry. In addition to her board certification, Dr. Wu is a certified Invisalign® Premier Provider. She also maintains active memberships in the American Dental Association, the Chinese American Dental Association, and the San Gabriel Valley Dental Society. In addition to providing the highest standard of dental services to her patients in East Los Angeles and the surrounding communities, Dr. Wu served as a volunteer faculty clinical instructor at UCLA, and she lectures at community organizations and local schools. She excels in general, family, and cosmetic dentistry, including crowns, bridges, dentures, and veneers, and strives to stay abreast of the latest technology and cutting-edge dental techniques. She was awarded "America's Top Dentist" several years in a row. When not caring for patients at LA Dental Town, Dr. Wu enjoys cooking, eating at new restaurants, and spending time with her husband and children.

---

**DR. JENNIFER WU, DDS**
*Co-Founder | General & Cosmetic Dentist*

- **College:** University of California, Berkeley — Molecular and Cellular Biology, Minor in Education
- **Dental School:** University of the Pacific, Arthur A. Dugoni School of Dentistry
- **Certifications:** Board Certified General Dentist; Certified Invisalign Premier Provider
- **Memberships:** American Dental Association, California Dental Association, San Gabriel Valley Dental Society
- **Awards:** America's Top Dentist; Pasadena Top Dentist
- **Community:** Volunteers providing dental care to homeless locally and abroad
- **Specialties:** Family dentistry, cosmetic dentistry, smile transformations, Invisalign

**Bio (from site — approved for use):**
> Dr. Jennifer Wu is a co-founder of LA Dental Town. She is a Board Certified general dentist, a certified Invisalign Premier Provider, an active member of the American Dental Association, California Dental Association and San Gabriel Valley Dental Society. She was also awarded America's Top Dentist and Pasadena Top Dentist. As a certified Invisalign Premier Provider, Dr. Jen is your specialist for an alternative and rewarding option for treating misaligned teeth. She understands that regular braces may not be every patient's preferred choice to recover a straight smile. With Invisalign, patients can experience a more comfortable orthodontics treatment that allows them to continue with their regular day-to-day routines without interruption. She works tirelessly and without making any compromises in order to provide the most exceptional level of dental care. She is passionate about delivering a comprehensive and personalized level of service accompanied with a gentle and personable personality. She enjoys all aspects of family dentistry, but finds smile transformations and cosmetic dentistry to be especially rewarding. Outside of her private practice, Dr. Jen volunteers by providing dental care to the homeless locally and abroad. During her free time, Dr. Jen enjoys good food, relaxing evenings with her husband and beautiful hikes with family and friends.

---

**DR. TIFFANY TRAN, DDS, MS**
*Pediatric Dentist*
*(⚠ Listed as "Tiffany Wu" on current site — correct to "Tiffany Tran" on new site)*

- **Dental School:** University of the Pacific, Arthur A. Dugoni School of Dentistry
- **Specialty Training:** Boston University Henry M. Goldman School of Dentistry — Pediatric Dentistry
- **Certifications:** Board Certified Pediatric Dentist; Diplomate of the American Board of Pediatric Dentistry
- **Teaching:** Taught at Boston College of Dentistry
- **Memberships:** American Dental Society, American Academy of Pediatric Dentistry, California Dental Association, San Gabriel Valley Dental Society
- **Specialties:** Pediatric dentistry — infants through young adults; behavioral approach; working with anxious/fearful children

**Bio (from site — approved for use):**
> Dr. Tiff is a Board Certified pediatric dentist and a Diplomate of the American Board of Pediatric Dentistry. Throughout her career, she has been nothing less than dedicated to providing the highest quality oral health care to children ranging from infants to young adults. Having taught at Boston College of Dentistry, Dr. Tiff takes pride in her ability to nurture fearful children and turn them into happy patients. Her gentle and patient approach to treatment makes dental visits easy and comfortable. Each day, she is committed to her goal of ensuring that each child leaves L.A. Dental Town knowing that dental visits can be fun! Her expertise and behavioral approach to dentistry has gained traction not only among high-end dental offices, but also to children and families of low income background. Dr. Tiff is an active member of the American Dental Society, American Academy of Pediatric Dentistry, California Dental Association and San Gabriel Valley Dental Society. In her free time, Dr. Tiffany enjoys traveling, baking, staying active, and exploring the outdoors. You can find Dr. Tiff spending her free time with her family, friends and maltipoo Toby.

---

> **⚠ BIOS STILL NEEDED:** Bios for Dr. Nadia Hassan (Oral Surgeon), Dr. Seong Lee (Endodontist), Dr. Eugene Kim (Dental Implant Specialist), and Angelica (Hygienist) are not on the current site and were not in the flyer. These must be obtained from Norma before those provider pages can be built.

#### Profile Photo Fix (Current Site — Urgent)
- Current provider photos are distorted/squished due to a CSS height constraint on the current live site
- Nathan flagged this for a quick fix on the existing site before launch — dev team to investigate and resolve the image container styling

---

### 🦷 Services

#### Architecture
- Move from a flat list of 8 services to a **tiered category structure**
- Top-level categories (e.g., Cosmetic Dentistry, Oral Surgery, Restorative, Pediatric Dentistry, Endodontics) each get a landing page
- Sub-services listed under each category, each with their own dedicated page
- On each doctor's profile, list which services/specialties that doctor performs, linking to the relevant service pages

#### Services Page Layout
- Reference: **bhdentist.com** services section — dropdown by category, real photography
- Use actual photos from the shoot (doctor's hands, patient smiles, procedure shots) — not stock
- Each service card/bubble links to its dedicated sub-page

#### Services Architecture — Proposed (Based on Site Crawl + Doctor Specialties)

The following structure maps the existing 8 services into categories aligned with the doctors' specialties. Items marked [new] are inferred from doctor specialties and are not yet confirmed by Norma. **Do not build until Norma's complete list is received.**

| Category | Sub-Services | Doctor(s) |
|---|---|---|
| **General & Family Dentistry** | Dental Exams & Cleanings [new], Crowns & Bridges, [others TBD] | Dr. Margaret Wu, Dr. Jennifer Wu |
| **Cosmetic Dentistry** | Veneers, Teeth Whitening, Invisalign, [others TBD] | Dr. Margaret Wu, Dr. Jennifer Wu |
| **Dental Implants** | Dental Implants, [e.g., All-on-4 — confirm] | Dr. Eugene Kim |
| **Oral Surgery** | Wisdom Teeth Removal, Tooth Extractions [new], [others TBD] | Dr. Nadia Hassan |
| **Endodontics** | Root Canal, [others TBD] | Dr. Seong Lee |
| **Pediatric Dentistry** | Children's Dental Exams [new], First Visit, [others TBD] | Dr. Tiffany Tran |

> **⚠ NOTE:** Norma has a complete services list to send. Use her list to finalize all categories, confirm sub-services, and add any missing pages. The architecture above is a starting framework only.

---

### 📋 Patient Resources

#### First Visit
- Content is accurate — migrate existing copy
- "Your child's first visit" content is important and should be featured
- Update styling and layout only; wording is approved

#### Financial & Insurance
- Expand significantly from the current thin page
- Reference: **Bel Air Dental Arts** financing/insurance page layout
- Include:
  - Accepted insurance plans (list to be provided by Norma)
  - Note: "Most PPO insurances and Denti-Cal accepted" — retain this language
  - Financing options section with logos and direct application links for all three partners:

| Partner | Link | Notes |
|---|---|---|
| **Alphaeon Credit** | https://go.alphaeoncredit.com/credit-portal/apply/wizard?ref=pr-fi& | Logo pending from Norma |
| **CareCredit** | https://go.carecredit.com/consumer/payfone | Logo pending from Norma |
| **Cherry** | https://pay.withcherry.com/la-dental-town?utm_source=merchant&utm_medium=qr_code_sticker&utm_campaign=v1 | LA Dental Town-specific link |

  - Each financing partner should display as a logo card with a "Apply Now" or "Learn More" button linking to the URL above
  - Contact prompt to call the office for questions

> **⚠ GAP:** Full insurance accepted list and logos for Alphaeon, CareCredit, and Cherry pending from Norma.

#### Patient Forms
- Current forms page is outdated
- Norma to provide an updated link or downloadable forms
- Build the page to support embedded form links or PDF downloads

> **⚠ GAP:** New patient forms link/documents pending from Norma.

#### Comfort & Safety (Removed from Patient Resources)
- Remove "Comfort & Safety" from the Patient Resources navigation
- Fold content into a relevant Services page (e.g., Sedation Dentistry) or an "Our Approach" section under About
- Decision: confirm final placement with team

---

### 📸 Before & After

- Retain all existing before/after photos — there are a significant number of them
- Redesign the display/layout for a cleaner, more elevated presentation
- No new before/after content was mentioned — use existing library

---

### 📝 Blog

- Migrate all 14 existing blog posts to the new site
- Maintain blog as an active section; client posts regularly
- Display 3 most recent posts on the homepage
- Blog archive page to remain

---

### ⭐ Testimonials

- Curated testimonials page — manually selected quotes from Google and Yelp reviews
- Do not auto-pull dynamically from Google (risk of displaying short or weak reviews)
- Use clean, text-focused layout (reference Bel Air Dental Arts / bhdentist.com)

---

### 📞 Contact

- Keep all existing info: address, phone, email, map embed
- Add the **booking widget** prominently on this page
- Simple, clean layout — no major changes to content

---

## Content Migration

| Content Type | Status | Notes |
|---|---|---|
| Homepage copy | Migrate & update | Retain East LA language; refresh tone |
| Services copy (8 pages) | Migrate & restructure | Will expand to new tiered structure |
| Provider bios | Partial — needs update | Norma sending full bios for all doctors |
| Patient Resources copy | Migrate | First Visit copy approved; Financial to be expanded |
| Before & After photos | Migrate all | Redesign display |
| Blog posts (14) | Migrate all | No changes to content |
| Testimonials | Curate from existing | Select best from Google/Yelp manually |
| Office photos | Replace entirely | New photos from June 24 shoot |

---

## SEO Requirements

Preserving existing SEO equity is a stated priority. The site currently ranks well for East Los Angeles dental searches.

- **Retain all "East Los Angeles" references** throughout page copy — in headings, body text, meta descriptions, and page titles
- Include surrounding area references as appropriate
- Maintain existing URL structure where possible, or implement proper 301 redirects if URLs change
- Do not significantly alter existing on-page copy that is performing well — restructure layout/design around it
- Keep meta descriptions and title tags consistent with current best performers

> **⚠ NOTE:** Skyhook is not the SEO agency for this client, but copy and structure decisions on the site should be made with SEO preservation in mind. Flag any URL or content changes that could impact rankings.

---

## Integrations & Widgets

### Booking Widget (HIGH PRIORITY)
- Source: Client's practice management software (system not named in call — confirm with Norma)
- Behavior: Sticky "Book Now" button that follows the user as they scroll on every page
- Reference: Bel Air Dental Arts booking CTA behavior
- Must appear on: Homepage hero, Contact page, and as a sitewide sticky element
- **⚠ GAP:** Embed code/integration details for the booking widget not yet received. Confirm with Norma which practice management software is in use and obtain the widget embed code.

### Google Rating Display
- Display the practice's **4.9 Google rating** prominently
- Suggested placement: sub-bar beneath main navigation, or upper-left area of header
- Reference: CDF Zone upper-left rating treatment
- This is a static display element (hardcoded or lightly maintained), not necessarily a live API pull

### Floating Google Reviews Badge
- A small floating badge in the lower-left corner that links to Google reviews
- Follows the user on scroll (sitewide)
- Reference: Bel Air Dental Arts

### Testimonials (No Dynamic Pull)
- Testimonials are manually curated — no Google/Yelp API integration needed
- This was explicitly decided on the call (dynamic pull is risky — weak reviews could surface)

### Skyhook Inline CMS (Post-Launch)
- Skyhook's lightweight inline CMS will be available for client after launch
- Supports: copy changes, image swaps, office hours updates, doctor profile edits
- CMS training to be scheduled after site launch

---

## Assets Checklist

All of the following are to be delivered by **Norma Adams by Monday, June 30, 2026**.

| Asset | Status | Notes |
|---|---|---|
| Hero + Office Tour video (~20 sec) | ⏳ Being edited | **Same clip** for both hero and office tour. Still with videographer — delivery date TBD, may not be ready by June 30. |
| New office photos (elevated, full set) | ⏳ Pending | From June 24 photo shoot |
| Doctor headshots (new, uniform) | ⏳ Pending | From June 24 shoot — confirm all 7 providers were photographed |
| Brand flyer / color palette | ⏳ Pending | **🔴 Still a blocker** — Norma to send; use as definitive color reference |
| Doctor bios (all 7 providers) | ⏳ Pending | Has partial doc for 3 doctors; bios for remaining 4 still needed |
| Full services list (with categories) | ⏳ Pending | Norma has a list to send; draft architecture in doc is a starting framework only |
| Accepted insurance list | ⏳ Pending | For Financial & Insurance page |
| Alphaeon Credit logo | Pull from https://www.alphaeoncredit.com | Use official brand logo from their site |
| CareCredit logo | Pull from https://www.carecredit.com | Use official brand logo from their site |
| Cherry logo | Pull from https://www.withcherry.com | Use official brand logo from their site |
| Updated patient forms (link or PDFs) | ⏳ Pending | Current forms are outdated |
| Booking widget embed code | ⏳ Pending | **🔴 Still a blocker** — Norma to confirm which practice management software is in use and provide embed code |

---

## Timeline & Next Steps

| Date | Milestone |
|---|---|
| **June 24, 2026** | Intake call completed; photo/video shoot completed |
| **June 30, 2026 (Mon)** | Norma delivers all assets (videos, photos, bios, colors, services list, etc.) |
| **~July 4, 2026** | First design mock-up delivered to Norma for review (before she departs) |
| **July 1 – July 14** | Norma traveling / out of country; communication via email only |
| **July 15, 2026 (Wed)** | Norma returns |
| **July 17, 2026 (Fri)** | Follow-up review call — goal: most of site ready to review |
| **Post-launch** | Skyhook CMS training for client |

**Immediate action items for Skyhook team:**
1. Fix distorted doctor profile photos on the current live site (CSS height constraint issue)
2. Send Norma a meeting recap email with the content checklist above
3. Nathan and Carrie to align on project timeline (accounting for Nathan's time away) and send to Norma today
4. Confirm scope: is dynamic Google Reviews integration in scope or out? (Nathan flagged this as needing a scope check)

---

## Open Items & Gaps

The following require resolution before or during the build. Items marked **🔴 Blocker** cannot proceed until resolved.

| # | Item | Status | Owner | Priority |
|---|---|---|---|---|
| 1 | Full services list with categories and sub-services | ⚠️ Draft framework in doc — awaiting Norma's confirmed list | Norma | 🔴 Blocker — finalize before building services pages |
| 2 | Doctor bios — Wu sisters / Dr. Tran | ✅ Resolved — full bios in this doc (sourced from site + PDF flyer) | — | Done |
| 3 | Brand color palette | ✅ Resolved — hex codes extracted from marketing materials, documented above | — | Done |
| 4 | Photo and video assets from June 24 shoot | ⚠️ Being edited — delivery TBD; same clip for hero + office tour | Norma / Videographer | 🔴 Blocker — needed before pages can be fully designed |
| 5 | Booking widget embed code + practice management software name | ⏳ Not yet received | Norma | 🔴 Blocker — needed before widget can be integrated |
| 6 | Doctor bios — Hassan, Lee, Kim, Angelica | ⏳ Not on site or in flyer — must obtain from Norma | Norma | High — needed before those provider pages can be built |
| 7 | Accepted insurance list | ⏳ Pending | Norma | High |
| 8 | Logos for Alphaeon Credit, CareCredit, and Cherry | ✅ Pull from each company's website — no client assets needed | — | Done |
| 9 | Updated patient forms link or PDFs | ⏳ Pending | Norma | High |
| 10 | 🚨 Correct Dr. Tiffany Tran's name on current site (listed as "Tiffany Wu") | ⏳ Not yet fixed | Dev / Nathan | Urgent — fix on live site immediately |
| 11 | Confirm "Comfort & Safety" page final placement (Services vs. About) | ⏳ Open | Nathan/Norma | Medium |
| 12 | Full provider roster | ✅ Resolved — 7 providers confirmed | — | Done |
| 13 | Confirm whether dynamic Google Reviews API integration is in scope | ⏳ Open | Nathan (internal) | Medium |
| 14 | Hero video vs. office tour clip | ⏳ Two separate clips — both pending from videographer; placeholders in use during build | Norma / Videographer | High — needed before launch |
| 15 | 301 redirect plan for any URLs that change | ⏳ Open | Nathan/Dev | High — critical for SEO |
| 16 | Confirm exact Google rating to display (site shows 4.93) | ⏳ Open | Nathan | Low |
| 17 | Confirm whether Angelica (hygienist) gets a full profile page or simpler listing | ⏳ Open | Norma | Medium |
| 18 | Confirm all 7 providers were photographed in the June 24 shoot | ⏳ Open | Norma | High |

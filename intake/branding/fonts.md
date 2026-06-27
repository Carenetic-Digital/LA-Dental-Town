# Brand Typography — LA Dental Town

No direct font instruction from client. Selection follows dental industry best practice and aims to complement the elevated, warm aesthetic of their marketing materials (green/cream palette, Bel Air Dental Arts inspiration).

## Font Families

### Display Font (Headings)
**Font:** Playfair Display
**Weights:** 600 (Semibold), 700 (Bold)
**Google Fonts URL:** https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap

**Rationale:** Playfair Display is the standard for premium dental and medical practices. Its elegant serif style conveys trust, professionalism, and an elevated feel — consistent with the Bel Air Dental Arts reference and the cream/green palette.

### Body Font (Text)
**Font:** Lato
**Weights:** 400 (Regular), 500 (Medium), 700 (Bold — for labels, nav)
**Google Fonts URL:** https://fonts.googleapis.com/css2?family=Lato:wght@400;500;700&display=swap

**Rationale:** Lato is clean, highly readable, and approachable — balances Playfair Display's formality with warmth. Excellent legibility at all sizes including mobile.

## Type Scale Guidance

- **H1:** Playfair Display 700 — hero headings, page titles
- **H2:** Playfair Display 600 — section headings
- **H3:** Lato 700 or Playfair Display 600 — card titles, subsections
- **Body:** Lato 400, 1.6–1.75 line-height for readability
- **Labels / Nav / Buttons:** Lato 500–700, letter-spacing: 0.03–0.05em
- **Taglines / Sub-headings:** Lato 400 italic or Playfair Display 600 italic

## Font Loading Strategy

Load both families together via Google Fonts with `display=swap`:

```
https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@400;500;700&display=swap
```

## Fallback Stack

- Display: `'Playfair Display', Georgia, 'Times New Roman', serif`
- Body: `'Lato', 'Helvetica Neue', Arial, sans-serif`

---
name: Imaginnative
description: Warm-free monochrome editorial system. Type, whitespace, hairlines, and black/white splits carry it. Locality lives in the words, never a decorative skin.
colors:
  paper: "#ffffff"
  paper-2: "#f4f4f4"
  ink: "#131313"
  black: "#0c0c0c"
  gray-1: "#666666"
  gray-2: "#9b9b9b"
  line: "#e6e6e6"
  line-dark: "#333333"
typography:
  display:
    fontFamily: "Fredoka, sans-serif"
    fontSize: "clamp(2.8rem, 6.4vw, 5.2rem)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Fredoka, sans-serif"
    fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "1.06rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.2em"
  hand:
    fontFamily: "Caveat, cursive"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
rounded:
  none: "0px"
  xs: "4px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 4vw, 64px)"
  section-y: "84px"
  container: "1440px"
  rule-thick: "12px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-primary-inverse:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  link-cta:
    textColor: "{colors.ink}"
    padding: "0 0 3px 0"
  tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "5px 14px"
---

# Design System: Imaginnative

## Overview

**Creative North Star: "The Editorial Notebook"**

A confident, warm-free monochrome system for a digital studio in Sulawesi Utara that serves non-technical business owners. It looks like a well-set editorial spread, not a SaaS template: the work is carried by type, whitespace, hairline rules, thick framing rules, and full-bleed black/white split panels. There is no color, no gradient, no soft shadow, and no decorative card. Confidence comes from restraint. A studio this sure of itself does not need to shout in color.

Warmth and humanity come from three sources only: the rounded friendliness of the display face (Fredoka), sparing hand-drawn accents (a Caveat aside, a squiggle underline, a hand-circle, an arrow), and real full-color photography of actual people and work. The monochrome commitment governs the interface (type, layout, backgrounds, geometry, accents); content imagery keeps its natural color. The layout is deliberately asymmetric: uneven column grids, a right column dropped lower, magazine-style section indices (`01 /`, `02 /`) running down the page.

Locality is a message, never a costume. The site says Sulawesi Utara through its words (Manado, Bitung, the Seraya case, "balik modal") and through real local photography, not through batik, nautical, or heritage ornament. This is the deliberate rejection of both the generic AI agency hero and the heritage-skin gimmick.

**Key Characteristics:**
- Pure monochrome: `#ffffff` ground, near-black ink, neutral grays. No color, ever.
- Type-led: Fredoka display, Hanken Grotesk body, Caveat hand accents.
- Structure from hairlines (1px) and thick framing rules (12px), never boxes or shadows.
- Full-bleed black/white split panels as the signature layout device.
- Asymmetric, uneven column grids with running section indices.
- Hand-drawn line accents and real full-color photography for humanity.

## Colors

A strict neutral monochrome. There is no accent hue and none is to be added.

### Primary
- **Ink** (`#131313`): all primary text, the solid CTA fill, hairline and thick-rule strokes, hand-drawn accents.

### Neutral
- **Paper** (`#ffffff`): the page ground and the light side of every split. True white, no warm tint.
- **Black** (`#0c0c0c`): the dark side of split panels and the full-bleed final CTA.
- **Paper-2** (`#f4f4f4`): rare secondary fill (image placeholder, faint zone). Use sparingly.
- **Gray-1** (`#666666`): secondary/body-supporting text, descriptions, captions.
- **Gray-2** (`#9b9b9b`): faint labels, section indices, list numerals.
- **Line** (`#e6e6e6`): 1px hairline dividers and rules on light ground.
- **Line-dark** (`#333333`): 1px hairline dividers on black panels.

### Named Rules
**The No-Color Rule.** The *interface* is monochrome by commitment, not by omission: type, backgrounds, geometry, rules, and any decorative accent stay grayscale. Introducing a hue into the UI breaks the world; for emphasis use weight, scale, whitespace, or a black/white split, never color. **Content imagery is exempt.** Real photographs, client logos, and product/site screenshots keep their natural color; they are content, not chrome. Do not desaturate them.

## Typography

**Display Font:** Fredoka (with sans-serif fallback)
**Body Font:** Hanken Grotesk (with sans-serif fallback)
**Hand Accent Font:** Caveat (with cursive fallback)

**Character:** Fredoka's rounded geometry keeps the monochrome from turning cold or corporate. Hanken Grotesk is a clean, highly legible grotesque for non-technical readers. Caveat is the human hand, used only for small asides and drawn marks.

### Hierarchy
- **Display** (600, `clamp(2.8rem, 6.4vw, 5.2rem)`, tight): the hero headline only.
- **Headline** (600, `clamp(1.9rem, 3.2vw, 2.6rem)`): section and panel headings.
- **Title** (600, ~1.3 to 1.5rem): service rows, case-study and step titles.
- **Body** (400, ~1.06rem, 1.6): descriptions and paragraphs, usually in Gray-1, max ~52ch.
- **Label / Index** (600, 0.78rem, `0.2em`, uppercase): the `01 /` section indices and small labels, in Gray-2.
- **Hand** (Caveat 700): asides ("halo, dari Sulawesi Utara", "gratis, tanpa biaya") and drawn accents. Never for running copy.

### Named Rules
**The Hand-Sparingly Rule.** Caveat and hand-drawn marks appear at most once or twice per viewport. They are seasoning, not structure. Overuse turns confident into cute.

## Layout

Content is constrained to a 1440px container with a fluid gutter (`clamp(20px, 4vw, 64px)`), so the layout uses most of the screen on laptops and wide displays while staying bounded on ultrawide and tight on mobile. Full-bleed sections (hero, splits, final CTA) ignore the container and span the viewport. Vertical rhythm is ~84px per standard section. The grammar is deliberately asymmetric:

- **Hero:** uneven text/image split (`1.1fr .9fr`), text left, grayscale image right.
- **Split sections:** full-bleed 50/50 (`1fr 1fr`) black/white panels, content clustered toward the center line (right-aligned inner on the left half, left-aligned inner on the right half).
- **Lists:** editorial rows with uneven columns (number / title / description), separated by 1px hairlines, no boxes.
- **Process:** a three-up separated by vertical hairlines, no cards.
- **Section indices** (`01 /`, `02 /`) run down the left of each section like a magazine.

All grids collapse to a single column below 760 to 860px; splits stack, hairlines move from left borders to top borders.

## Elevation & Depth

**Flat by commitment. There are no shadows.** Depth and separation are expressed entirely through hairline rules (1px), thick framing rules (12px), and the black/white contrast of split panels. Never add a `box-shadow`, a blurred glow, glassmorphism, or an offset "sticker" shadow.

### Named Rules
**The Rule-Not-Shadow Rule.** Every separation is a drawn line, not a shadow. A 1px hairline divides peers; a 12px rule frames a zone; a black panel isolates a moment. If you reach for `box-shadow`, you have left the system.

## Shapes

Predominantly square. Corners are sharp (`0px`) on panels, images, and rules; the only rounded forms are the pill CTA and the pill tag (`999px`) and a 4px softening on the hero image. The signature form language is the **thick framing rule**: a 12px solid ink border on the top and bottom of every white split panel, on the bottom of the hero, and on the left edge of the hero image (desktop), giving the page a bracketed, editorial frame.

## Components

### Buttons
- **Primary (pill):** solid Ink fill, Paper text, `border-radius: 999px`, `padding: 14px 24px`, Fredoka 500. Hover drops opacity to ~0.85. Used for the WhatsApp action.
- **Inverse pill:** Paper fill, Ink text. Used on black grounds (the final CTA).
- **Link CTA:** Fredoka text with a 2px `currentColor` bottom border and a Caveat arrow that nudges right on hover. The quieter, more common action style.

### Tags / Chips
- **Style:** 1px Ink border, pill radius, Fredoka 500, no fill. Example: the "Balik modal" tag.

### Service Row (signature)
- Editorial row: `auto / 4fr / 7fr` grid (number, title, description), 1px top hairline, generous vertical padding, a subtle `padding-left` nudge on hover. No box, no shadow, no price.

### Black/White Split Panel (signature)
- Full-bleed `1fr 1fr`. One half `#0c0c0c` with white text; the other `#ffffff` with a **12px Ink border top and bottom**. Content max-width ~480px, clustered toward the center seam. Min-height ~78vh on desktop, stacks on mobile.

### Navigation
- Slim bar, 1px bottom hairline, wordmark left, muted links (Gray-1 to Ink on hover) right, a Link CTA for consultation. No background blur, no color.

### Inputs / Fields
- Not present on the homepage. When added (contact), use a 1px Ink underline or hairline box, sharp corners, focus shifts the border to full Ink. No glow.

## Do's and Don'ts

### Do:
- **Do** keep the palette strictly monochrome; express all emphasis through weight, scale, whitespace, and black/white contrast.
- **Do** separate with rules: 1px hairlines between peers, a 12px thick rule to frame the hero and the white side of splits.
- **Do** keep layouts asymmetric and uneven; lead sections with a running `01 /` index.
- **Do** use the black/white split as the signature moment, and **skip at least one section between two splits** (never back to back).
- **Do** let locality live in the copy and in real, full-color photography of local people and work.
- **Do** keep content imagery in natural color (photos, client logos, screenshots). The monochrome rule is for the interface, not the pictures.
- **Do** keep Caveat and hand-drawn marks rare, at most once or twice per viewport.
- **Do** preserve the strengths of the old build: `prefers-reduced-motion` gating on every animation, i18n structure, SEO schema, and sitemap.

### Don't:
- **Don't** introduce any color, gradient, aurora, or glow. (Anti-reference: the killed baseline.)
- **Don't** use `box-shadow`, glassmorphism, or offset "sticker" borders; those read as AI-trend and are banned here.
- **Don't** use boxed card grids for content; use editorial rows and hairlines instead.
- **Don't** use em-dashes or emoji anywhere in copy or UI. Use commas, slashes, hand-drawn marks, or SVG line accents.
- **Don't** show pricing in the design. The only real anchor is "landing page from Rp 3jt" and it stays out of the marketing layout (scope via WhatsApp).
- **Don't** revive Inter, Outfit, unDraw illustrations, floating icon chips, or heritage/decorative skins.
- **Don't** place two black/white split panels back to back.

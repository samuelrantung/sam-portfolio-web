# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: owners of small and medium businesses in North Sulawesi — Manado,
Bitung, and the surrounding region. Typically non-technical (resorts and
guesthouses, restaurants and cafés, clinics and professional practices, retail
and service shops, logistics/shipping firms). They are evaluating whether to get
found on Google, look more credible online, or digitize operations that are
still run by hand (orders in chat, records in notebooks). They decide and
communicate primarily over WhatsApp and value talking to a real person, not a
sales layer.

## Product Purpose

Imaginnative is a digital agency that helps North Sulawesi businesses go digital:
professional websites and landing pages, custom web/mobile apps, digital
operations (Google Business Profile, WhatsApp Business, POS, online payments),
and ongoing website care. Success means a client's business becomes findable,
credible, and operationally smoother — measured by real business outcomes (e.g. a
new customer arriving through the site), not vanity deliverables.

## Positioning

Big-company engineering practices, brought home to local businesses. The
differentiators a neighboring agency could not truthfully copy:

- **Straight to the engineer.** No account-manager layer — the client talks
  directly to the person building the product, from first consult to launch.
- **Engineer pedigree applied locally.** Founder spent ~6 years as a software
  engineer at large firms (incl. the multinational Prudential) and holds a
  master's in business management; that combination is deliberately aimed at the
  North Sulawesi SMB gap.
- **AI-augmented delivery.** AI is used throughout development for faster, more
  affordable delivery, with quality guarded by an experienced engineer.
- **Stays after launch.** Takes responsibility for what it builds, including care
  and continued development.

## Operating Context

- **Market scope: hyper-local.** North Sulawesi (Manado, Bitung, region) is the
  focus and the whole trust story — not a national or remote-first play.
- **WhatsApp is the primary channel** for consultation, quotes, and (for clients'
  own customers) ordering flows. Nearly every CTA routes to WhatsApp.
- **Language: bilingual in code (EN + ID); design focus is Bahasa Indonesia for
  now.** English content stays in the codebase for later but is out of scope for
  the current design work.
- Consultation happens over WhatsApp or in person; the business is based in
  Bitung and actively serves Manado and North Sulawesi.

## Capabilities and Constraints

- Services: Websites & Landing Pages · Custom Web & Mobile Apps · Digital
  Operations · Care & Growth (maintenance).
- **Pricing rule (binding):** the only publicly advertised price anchor is
  **landing page from Rp 3jt**. Everything else — company websites, custom apps,
  digital operations, and care — is **scoped through consultation**, not listed
  with a fixed number.
  - Known drift to reconcile in a redesign: current code still states "company
    websites from Rp 5 million" in places (homepage services grid and
    `layanan/website`). Per the owner, that anchor is not used; remove/replace it.
- Stack: Next.js 16 (App Router), React 19, Tailwind v4, TypeScript; i18n via
  `[lang]` route segment with EN/ID dictionaries. SEO schema (BreadcrumbList,
  FAQPage) and sitemap already implemented.

## Brand Commitments

- **Name:** Imaginnative — "imagine + innovative": picture what's possible, then
  build it.
- **Founder:** Samuel Rantung, Full Stack Developer, ~6 years experience
  (incl. Prudential), master's in business management. Based in Bitung.
- **Team reality:** currently solo (Samuel), but the brand deliberately speaks in
  the first-person plural ("kami"/"we") as a small studio for credibility. The
  founder-led, direct-to-engineer angle is a feature, not something to hide.
- **Contacts:** WhatsApp +6282187792052 · email samuelmrantung@gmail.com ·
  GitHub github.com/samuelrantung · site imaginnative.com.

## Evidence on Hand

- **PT Seraya Bahari Agensi — REAL client work (central proof).** Bitung shipping
  agency; built their landing page from zero. Result is real: a new customer
  contacted them after finding their details through the site, and the revenue
  covered the project cost ("balik modal"). Safe to feature as headline proof.
- **Pempek Bang Arie — FICTIONAL demo.** A self-built demo of a food-business
  site (open menu, frozen-goods cart, outlet map, WhatsApp ordering flow). Must
  always be labeled as a demo / fictional business — never presented as a paying
  client.
- **WhatsApp Campaign System with ML — proof of concept.** Self-built PoC (RFM
  scoring + churn prediction + WhatsApp dispatch simulation); code public on
  GitHub. Label as proof of concept, not a shipped client product.
- **Manado Post — real, UI contribution.** Implemented app UI for North
  Sulawesi's largest news outlet; app is live on Google Play.
- **Manado Adventist Hospital internal system — real, Lead Frontend.** Internal
  system in use at the hospital; interface not published (internal).
- Do not fabricate additional clients, testimonials, counts, or metrics beyond
  the above.

## Product Principles

1. **Proof, not promises** — lead with real outcomes; never fabricate clients,
   numbers, or claims to fill space.
2. **Straight to the engineer** — the direct, no-middle-layer relationship is the
   core promise and should be felt in the experience.
3. **Hyper-local trust** — North Sulawesi is the home advantage; the site should
   feel rooted there, not generic-global.
4. **Plain language for non-technical owners** — explain value in everyday terms;
   the visitor should never need to understand the tech to feel confident.
5. **Whole-journey ownership** — the relationship continues after launch; the
   design should reflect a partner, not a vendor.

## Accessibility & Inclusion

- Audience is non-technical business owners; copy and IA must stay in plain,
  jargon-free Bahasa Indonesia (current design focus).
- Bilingual support (EN/ID) is preserved in the codebase for future scope.

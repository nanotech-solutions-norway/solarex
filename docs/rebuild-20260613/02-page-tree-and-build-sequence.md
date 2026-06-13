# SolarEX Rebuild Page Tree and Build Sequence

Generated: 13.06.2026 Europe/Oslo

## Rebuild principle

The website will be rebuilt structure-first, not template-first. The sequence is:

1. structure;
2. text/content;
3. visual placeholders;
4. structure/content validation;
5. navigation;
6. footer/layout alignment;
7. approved visuals;
8. responsive behavior;
9. CTAs/forms/functions;
10. pre-live QA/debugging;
11. live test deployment;
12. live QA;
13. fix and revalidate.

## Primary page tree

| Priority | Route | Page title | Primary source authority | Build phase |
|---:|---|---|---|---|
| 1 | `/` | SolarEX PV Glass Surface Engineering | SolarEX-pres Home + SEO report | Phase 1 |
| 2 | `/technology/` | Quartz vs Titan for PV Glass | SolarEX-pres Technology + SEO report | Phase 2 |
| 3 | `/quartz/` | SolarEX Quartz SiO₂ PV Glass Coating | SolarEX-pres Quartz + Quartz technical files | Phase 3 |
| 4 | `/titan/` | SolarEX Titan TiO₂ PV Glass Coating | SolarEX-pres Titan + Titan study files | Phase 4 |
| 5 | `/proof-results/` | SolarEX Proof and Results | SolarEX-pres Projects/Proof + evidence sources | Phase 5 |
| 6 | `/documentation/` | SolarEX Documentation and Specs | SolarEX-pres Documentation + documentation register | Phase 6 |
| 7 | `/faq/` | SolarEX Technical FAQ | SolarEX-pres FAQ + FAQ source docs | Phase 7 |
| 8 | `/contact/` | Contact SolarEX / Technical Review | SolarEX-pres Contact + form-route register | Phase 8 |
| 9 | `/technical-review/` | Request a SolarEX Technical Review | Contact source + form-route register | Phase 8 |
| 10 | `/roi-calculator/` | SolarEX ROI Calculator | ROI repo + visual/style contract | Phase 9 |
| 11 | `/markets/` | SolarEX by Market and Region | SEO report + market source files | Phase 10 |
| 12 | `/markets/europe/` | SolarEX for European PV Operations | SEO report + Europe Quartz source | Phase 10 |
| 13 | `/markets/middle-east-gcc/` | SolarEX for GCC and Middle East Solar | SEO report + Middle East Quartz source | Phase 10 |
| 14 | `/markets/nordics/` | SolarEX for Nordic PV Operations | SEO report + Norway/Nordics sources | Phase 10 |
| 15 | `/partners/` | SolarEX Commercial Partners | SEO report + partner route requirements | Phase 11 |
| 16 | `/case-studies/` | SolarEX Evidence and Case Contexts | SEO report + proof/evidence sources | Phase 11 |
| 17 | `/case-studies/titan-rooftop-study/` | Titan Rooftop Study Context | Titan study | Phase 11 |
| 18 | `/case-studies/quartz-europe-context/` | Quartz Europe Context | Europe Quartz source | Phase 11 |
| 19 | `/case-studies/quartz-middle-east-context/` | Quartz Middle East Context | Middle East Quartz source | Phase 11 |
| 20 | `/applications/` | SolarEX Applications for PV Soiling | SEO report | Phase 12 |
| 21 | `/applications/desert-and-dust/` | Desert and Dust PV Glass Conditions | SEO report + ME source | Phase 12 |
| 22 | `/applications/coastal-and-salt/` | Coastal and Salt PV Glass Conditions | SEO report + Quartz source | Phase 12 |
| 23 | `/applications/commercial-rooftop/` | Commercial Rooftop PV Glass Coatings | SEO report | Phase 12 |
| 24 | `/applications/utility-scale/` | Utility-Scale PV Surface Engineering | SEO report | Phase 12 |
| 25 | `/pv-soiling-loss-mitigation/` | PV Soiling Loss Mitigation | SEO implementation plan | Phase 13 |
| 26 | `/anti-soiling-coating/` | SolarEX Anti-Soiling Coating | SEO implementation plan | Phase 13 |
| 27 | `/cleaning-cost-reduction/` | SolarEX Cleaning Cost Reduction | SEO implementation plan | Phase 13 |
| 28 | `/industries/solar-asset-owners/` | SolarEX for Solar Asset Owners | SEO report | Phase 14 |
| 29 | `/industries/epc-installers/` | SolarEX for EPCs and Installers | SEO report | Phase 14 |
| 30 | `/industries/om-teams/` | SolarEX for O&M Teams | SEO report | Phase 14 |

## First-page rebuild gate

The first implementation target is `/` only.

Before building page 2, page 1 must have:

- source brief;
- structure skeleton;
- text/content from source;
- visual placeholder register;
- design token draft;
- desktop screenshot;
- mobile screenshot;
- visual comparison against SolarEX-pres Home PNG references;
- link and menu route check;
- QA defect report.

## Menu model draft

Top navigation should expose primary commercial routes without repeating old defects:

- Technology
  - Quartz vs Titan
  - SolarEX Quartz SiO₂
  - SolarEX Titan TiO₂
- Applications
  - Desert and Dust
  - Coastal and Salt
  - Commercial Rooftop
  - Utility-Scale
- Markets
  - Europe
  - Middle East / GCC
  - Nordics
- Evidence
  - Proof and Results
  - Case Studies
  - Documentation
  - FAQ
- Partners
- Contact
- Primary CTA: Request Technical Review

`ROI Calculator` should not return as a duplicate top-level menu item. It may appear in body CTAs, Contact dropdown/context and footer.

## Footer model draft

Footer must include:

- SolarEX summary;
- Technology routes;
- Applications / Markets;
- Evidence / Documentation / FAQ;
- Contact / Technical Review;
- ROI Calculator;
- Admin login icon linking to `https://forms.nanotech-solutions.com/solarex_admin/` if approved for this rebuild;
- legal/privacy placeholders if legal pages are not yet built;
- language selector only when localization routes exist.

## Build freeze rule

No Wix rebuild, SQL execution, production-domain switch or final live publication may occur until the core primary pages pass the source/visual/content QA gates.

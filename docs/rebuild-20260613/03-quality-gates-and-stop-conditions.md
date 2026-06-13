# SolarEX Rebuild Quality Gates and Stop Conditions

Generated: 13.06.2026 Europe/Oslo

## Gate model

This rebuild cannot be approved by route existence, GitHub Pages deployment or metadata alone. A page passes only when visual, content, source, functional and responsive checks pass together.

## Page-level gates

| Gate | Required evidence | Fail condition |
|---|---|---|
| Source authority | Page source files, source classification and source authority listed in page brief | Page built from memory, old failed site or generic template |
| Structure | Route skeleton, block order and section IDs match page brief | Missing section, wrong order, unclear CTA flow |
| Text/content | Page-specific copy from source, SEO/AEO/GEO blocks and approved product terminology | Generic repeated text, missing key claims, wrong product distinction |
| Visual placeholders | Unique placeholder IDs for hero, diagrams, proof visuals, charts and animations | Random visual inserted before placeholder plan exists |
| Visual insertion | Approved asset mapped to each placeholder, with alt text and source reference | Missing or unsuitable visual silently replaced with filler |
| Visual parity | Desktop screenshot compared against reference PNG/PDF/PPTX | Page does not resemble visual reference |
| Mobile/tablet | Screenshots at mobile and tablet widths | Header, hero, menu, form or footer overflow or unreadable layout |
| Navigation/footer | All menu, dropdown, footer and CTA links resolve | Duplicate ROI top-menu item or broken routes |
| Product accuracy | Quartz SiO₂ and Titan TiO₂ are distinct in copy and visuals | Mechanisms blurred, reversed or merged |
| Claims | Every technical, ROI, warranty, cleaning or performance claim references approved source | Unapproved claim or unsupported absolute |
| Forms/functions | Form UI, public endpoint reference, no-confidential notice, calculator, downloads and animation tested | Broken critical function or unsafe public data collection |
| SEO/AEO/GEO | Unique title/meta/H1, answer block, schema candidate, internal links | Missing metadata, unsupported schema or duplicate page intent |
| Public-safety/privacy | Public artifacts contain only approved public material | Private backend material or private customer/admin data appears in public website |
| Live validation | Live test URL checked after deploy | Test URL differs materially from approved local/staging result |

## Defect severity

| Severity | Meaning | Action |
|---|---|---|
| Critical | Blocks publication or creates security, claim, legal or core function failure | Fix immediately; no further page build until resolved |
| Major | Breaks visual reference, page purpose, mobile use, menu/form/link behavior or approved structure | Fix before moving to next page |
| Minor | Cosmetic or wording issue that does not block current gate | Log and fix before release batch |
| Backlog | Enhancement outside current approved scope | Log for later; do not use to delay core rebuild |

## SolarEX-specific non-negotiables

- Always write `SiO₂` and `TiO₂`.
- SolarEX Quartz = passive SiO₂, UV-independent hydrophobic/oleophobic easy-clean route.
- SolarEX Titan = active TiO₂, UV-dependent photocatalytic hydrophilic/superhydrophilic route.
- Do not merge Quartz and Titan functions.
- Do not use defensive disclaimer blocks that weaken validated empirical results.
- Do not exaggerate performance or publish universal ROI/yield/warranty claims.
- Do not reintroduce a duplicate `ROI Calculator` top-level menu item.
- Do not publish private backend configuration or customer/admin material in the public site.
- SQL phase remains after frontend, forms UI and route validation.

## Live-site completion definition

A test site is not complete because it is online. Completion requires:

1. all primary routes live;
2. screenshots captured for desktop/tablet/mobile;
3. each page compared against its source brief/reference;
4. links/forms/downloads/calculator/animation tested;
5. metadata/schema/sitemap/robots checked;
6. critical and major defects fixed;
7. revalidation completed;
8. release evidence logged;
9. user approval or explicit release decision.

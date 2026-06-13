# Home Structure and Content Validation — Phase 1

Generated: 13.06.2026 Europe/Oslo
Branch: `rebuild/solarex-v5-from-source-20260613`
Route: `/`
Status: `PHASE_1_STRUCTURE_CONTENT_PLACEHOLDERS_COMPLETE`

## Scope completed

| Item | Result |
|---|---:|
| Source authority reviewed | PASS |
| Home page brief exists | PASS |
| Home route structure rebuilt | PASS |
| Approved Home text inserted | PASS |
| Visual placeholders created | PASS |
| Final visuals intentionally withheld | PASS |
| Top menu rebuilt according to route model | PASS |
| Footer rebuilt according to route model | PASS |
| Quartz/Titan distinction checked | PASS |
| SEO metadata drafted in page | PASS |
| Live publication | NOT STARTED |
| Desktop/mobile screenshots | PENDING next QA step |
| Final visual parity check | PENDING next QA step |

## Source alignment

The Home page was rebuilt from the approved Home page brief and the extracted SolarEX-pres Home/PV Glass source content. It follows the required block order:

1. Header / navigation
2. Hero with planned cinematic PV-glass background placeholder
3. Proof/trust chip strip
4. Why Surface Engineering Matters
5. Two Pathways: Quartz SiO₂ and Titan TiO₂
6. Validated Technical Parameters
7. Pathway Fit by Operating Environment
8. Validated Evidence and Commercial Value
9. Documentation Available for Technical Review
10. From Site Assessment to Evidence Review
11. Technical Questions — Short Answers
12. Start a SolarEX Technical Review
13. Footer

## Visual placeholder validation

| Placeholder | Status |
|---|---:|
| `VIS-HOME-HERO-001` | inserted |
| `VIS-HOME-SURFACE-001` | inserted |
| `VIS-HOME-PATHWAYS-001` | inserted |
| `VIS-HOME-PARAMETERS-001` | inserted |
| `VIS-HOME-FIT-MATRIX-001` | inserted |
| `VIS-HOME-EVIDENCE-001` | inserted |
| `VIS-HOME-PROCESS-001` | inserted |
| `VIS-HOME-FAQ-001` | inserted |

Final visual assets were not inserted during this step because the updated playbook requires structure, text and placeholders to be validated before final visuals.

## Navigation validation

Implemented top-level menu:

- Technology
- Applications
- Markets
- Evidence
- Partners
- Contact
- Request Technical Review CTA

`ROI Calculator` was not added as a duplicate top-level menu item. It appears in footer/body routing only.

## Footer validation

Footer now includes:

- SolarEX summary;
- Technology routes;
- Applications / Markets;
- Evidence / Documentation / FAQ;
- Contact / Technical Review;
- ROI Calculator;
- Admin login link;
- production-status warning text.

## Product-function validation

| Product | Required meaning | Result |
|---|---|---:|
| SolarEX Quartz SiO₂ | Passive, UV-independent hydrophobic/oleophobic easy-clean route | PASS |
| SolarEX Titan TiO₂ | Active, UV-dependent photocatalytic hydrophilic route | PASS |

No Quartz/Titan merge or reversal was introduced.

## Claim-control validation

The page uses evidence-aware wording:

- Titan +5.15% value remains tied to monitored study context.
- Quartz ROI language remains tied to base-case scenario assumptions.
- Cleaning language states reduced cleaning burden and does not claim cleaning elimination.
- Universal payback, guaranteed yield and permanent-effect wording avoided.

## Known open items

| Item | Status | Required next action |
|---|---:|---|
| Desktop visual screenshot | PENDING | Render branch locally or via preview and compare to Home reference PNG. |
| Mobile screenshot | PENDING | Validate hero, menu, CTA visibility, matrix stacking and footer. |
| Route stubs for linked pages | PENDING | Create route skeletons before strict link validation. |
| Final Home visuals | PENDING | Insert only after structure/content validation is accepted. |
| Animation | PENDING_REVIEW | Do not use as hero until approved version is validated. |
| Live test deployment | NOT STARTED | Only after local/pre-live QA passes. |

## Decision

Phase 1 Home structure, source content and placeholder setup is complete. The next required step is **Home pre-visual QA**: render the branch, capture desktop/mobile screenshots, compare against SolarEX-pres reference screenshots, then correct layout defects before inserting final assets.

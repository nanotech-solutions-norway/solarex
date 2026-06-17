# Validation Log - Case Studies Mobile Screenshot and Visual Insertion Plan

Generated: 17.06.2026 Europe/Oslo
Branch: main
Route: /case-studies/
Status: CASE_STUDIES_MOBILE_GATE_PASS_VISUAL_INSERTION_PLANNED

## Screenshot review

The user-provided Case Studies mobile screenshot confirms that the route is live and the source-led evidence-context structure is readable on mobile.

## Pass items

- Correct `/case-studies/` page is live.
- Hero text and CTA area are readable.
- Case studies are framed as evidence contexts before commercial scale.
- Quartz SiO₂ case contexts remain tied to passive, UV-independent hydrophobic/oleophobic easy-clean behavior.
- Titan TiO₂ case contexts remain tied to active, UV-dependent photocatalytic hydrophilic/superhydrophilic behavior.
- Route-to-route evidence transfer remains blocked.
- ROI scenarios, field observations and monitored study evidence remain contextualized.
- Placeholder IDs remain visible for audit.
- Menu and footer are consistent with Home, Technology, Quartz, Titan, Proof / Results and Projects.

## Remaining expected limitations

- Final binary visuals are still missing.
- Page remains long on mobile, which is acceptable for the structure stage.
- Placeholder tags are intentionally visible until image insertion.
- Visual rhythm should be improved after approved image upload and page-breaker insertion.

## Source scan summary

Case Studies source authority remains the SolarEX Projects/Evidence/Pilot Review source set, Documentation source set, SEO/AEO/GEO case-study architecture and supporting Quartz/Titan evidence files.

Relevant sources:

- Future Website Creation Playbook and Blueprint
- SolarEX International SEO and Marketing Strategy Report
- SolarEX SEO/AEO/GEO GitHub Pages Website Implementation Plan
- SolarEX-Projects-or-Coating-Evidence-and-Pilot-Review folder
- SolarEX-Projects-or-Coating-Evidence-and-Pilot-Review.pptx
- SolarEX-Projects-or-Coating-Evidence-and-Pilot-Review.pdf
- SolarEX-Documentation-or-Technical-Files-and-Studies folder/PPTX/PDF
- SolarEX - Quartz - InterCos PV plant material
- SolarEX - Titan - PV3 Experts - Solar Module Study.pdf

## Connector limitation

The current GitHub connector is used for text-file writes and is not being used for binary visual upload.

Decision:

- Do not fake final visuals.
- Do not replace placeholders with unapproved stock graphics.
- Keep all Case Studies placeholders active.
- Add manual asset tags to each Case Studies placeholder.
- Add a structured visual insertion plan for later binary upload/manual insertion.

## Files added

| File | Purpose |
|---|---|
| assets/js/case-studies-visual-insertion-tags.js | Injects manual asset tags into Case Studies placeholders. |
| content/rebuild/case-studies-visual-insertion-plan.json | Structured placeholder-to-source mapping. |
| docs/rebuild-20260613/validation/17-case-studies-mobile-screenshot-and-visual-plan.md | This validation log. |

## Existing file changed

| File | Change |
|---|---|
| assets/js/navigation.js | Loads Case Studies manual asset tag script. |

## Placeholder mapping

| Placeholder | Manual asset tag | Target |
|---|---|---|
| VIS-CASE-HERO-001 | MANUAL-ASSET-CASE-HERO-001 | assets/img/case-studies/case-hero-evidence-contexts.webp |
| VIS-CASE-PRINCIPLE-001 | MANUAL-ASSET-CASE-PRINCIPLE-001 | assets/img/case-studies/case-principle.webp |
| VIS-CASE-LIBRARY-001 | MANUAL-ASSET-CASE-LIBRARY-001 | assets/img/case-studies/case-library.webp |
| VIS-CASE-MATRIX-001 | MANUAL-ASSET-CASE-MATRIX-001 | assets/img/case-studies/case-matrix.webp |
| VIS-CASE-TITAN-001 | MANUAL-ASSET-CASE-TITAN-001 | assets/img/case-studies/case-titan-study.webp |
| VIS-CASE-QUARTZ-001 | MANUAL-ASSET-CASE-QUARTZ-001 | assets/img/case-studies/case-quartz-regional.webp |
| VIS-CASE-PILOT-METHOD-001 | MANUAL-ASSET-CASE-PILOT-METHOD-001 | assets/img/case-studies/case-pilot-method.webp |
| VIS-CASE-CONVERSION-001 | MANUAL-ASSET-CASE-CONVERSION-001 | assets/img/case-studies/case-conversion-paths.webp |
| VIS-CASE-FAQ-001 | MANUAL-ASSET-CASE-FAQ-001 | assets/img/case-studies/case-faq.webp |

## Gate status

| Gate | Status |
|---|---:|
| Case Studies source authority confirmed | PASS |
| Case Studies mobile structure review | PASS |
| Quartz SiO₂ case-context separation | PASS |
| Titan TiO₂ case-context separation | PASS |
| Evidence/context claim boundaries | PASS |
| Visual binary insertion | PENDING_MANUAL_UPLOAD |
| Manual asset tags added | PASS |
| Case Studies visual insertion plan created | PASS |
| Ready for next page structure build | YES |

## Next route

Proceed to `/documentation/` structure build after this deployment cycle, unless the user asks to pause for manual Case Studies image upload.

## Test URL after deploy

https://nanotech-solutions-norway.github.io/solarex/case-studies/?v=20260617-case-visualtags

# Validation Log - FAQ Desktop Screenshot and Visual Insertion Plan

Generated: 18.06.2026 Europe/Oslo
Branch: main
Route: /faq/
Status: FAQ_DESKTOP_GATE_PASS_VISUAL_INSERTION_PLANNED

## Screenshot review

The user-provided FAQ desktop screenshot confirms that the route is live and the source-led FAQ structure is readable on desktop.

## Pass items

- Correct `/faq/` page is live.
- Hero text and CTA area are readable.
- FAQ groups are readable and organized by pathway and decision context.
- Quartz SiO₂ remains tied to passive, UV-independent hydrophobic/oleophobic easy-clean behavior.
- Titan TiO₂ remains tied to active, UV-dependent photocatalytic hydrophilic/superhydrophilic behavior.
- Mixed or unclear cases route to technical review before product selection.
- ROI, proof and case-study answers remain contextualized.
- Menu and footer are consistent with completed pages.

## Remaining expected limitations

- Final binary visuals are still missing.
- Placeholder/audit markers are intentionally visible until final visual insertion or audit-mode removal.
- Visual assets remain pending manual upload.

## Source scan summary

FAQ source authority remains the SolarEX FAQ source set, Technology source set and supporting Quartz/Titan application instructions.

Relevant sources:

- SolarEX-FAQ-or-Quartz-vs-Titan-Solar-Coating-Questions folder
- SolarEX-FAQ-or-Quartz-vs-Titan-Solar-Coating-Questions.pptx
- SolarEX-FAQ-or-Quartz-vs-Titan-Solar-Coating-Questions.pdf
- SolarEX-Technology-or-SolarEX-Quartz-and-Titan folder/PPTX/PDF
- SolarEX Quartz Edition - Application Instructions v2.7
- SolarEX Titan Edition - Application Instructions v2.8

## Files added

| File | Purpose |
|---|---|
| assets/js/faq-visual-insertion-tags.js | Manual asset tag script for FAQ placeholders. |
| content/rebuild/faq-visual-insertion-plan.json | Structured placeholder-to-source mapping. |
| docs/rebuild-20260613/validation/27-faq-desktop-screenshot-and-visual-plan.md | This validation log. |

## Loader status

The FAQ tag script and insertion plan exist in the repository. Loader connection is pending if `assets/js/navigation.js` has not yet been updated to call `faq-visual-insertion-tags.js`.

## Placeholder mapping

| Placeholder | Manual asset tag | Target |
|---|---|---|
| VIS-FAQ-HERO-001 | MANUAL-ASSET-FAQ-HERO-001 | assets/img/faq/faq-hero-questions.webp |
| VIS-FAQ-PRINCIPLE-001 | MANUAL-ASSET-FAQ-PRINCIPLE-001 | assets/img/faq/faq-principle.webp |
| VIS-FAQ-QUICK-ANSWERS-001 | MANUAL-ASSET-FAQ-QUICK-ANSWERS-001 | assets/img/faq/faq-quick-answers.webp |
| VIS-FAQ-QUARTZ-001 | MANUAL-ASSET-FAQ-QUARTZ-001 | assets/img/faq/faq-quartz.webp |
| VIS-FAQ-TITAN-001 | MANUAL-ASSET-FAQ-TITAN-001 | assets/img/faq/faq-titan.webp |
| VIS-FAQ-EVIDENCE-001 | MANUAL-ASSET-FAQ-EVIDENCE-001 | assets/img/faq/faq-evidence.webp |
| VIS-FAQ-APPLICATION-001 | MANUAL-ASSET-FAQ-APPLICATION-001 | assets/img/faq/faq-application.webp |
| VIS-FAQ-COMMERCIAL-001 | MANUAL-ASSET-FAQ-COMMERCIAL-001 | assets/img/faq/faq-commercial.webp |

## Gate status

| Gate | Status |
|---|---:|
| FAQ source authority confirmed | PASS |
| FAQ desktop structure review | PASS |
| Quartz SiO₂ route separation | PASS |
| Titan TiO₂ route separation | PASS |
| Evidence and ROI claim boundaries | PASS |
| Visual binary insertion | PENDING_MANUAL_UPLOAD |
| FAQ visual insertion plan created | PASS |
| Ready for next page structure build | YES |

## Next route

Proceed to `/contact/` or `/technical-review/` structure build after this deployment cycle, depending on preferred commercial sequence.

## Test URL after deploy

https://nanotech-solutions-norway.github.io/solarex/faq/?v=20260618-faq-visualplan

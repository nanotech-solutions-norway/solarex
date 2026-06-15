# Validation Log - Home Visual Insertion Plan

Generated: 15.06.2026 Europe/Oslo
Branch: main
Route: /
Status: VISUAL_INSERTION_PLANNED_WITH_MANUAL_ASSET_TAGS

## Source scan summary

Visual/layout authority remains the SolarEX-pres Home/PV Glass source set and the matching Drive visual/reference folder.

Relevant Home visual sources:

- SolarEX-pres/SolarEX-PV-Glass-Coatings-or-SiO-and-TiO-Surface-Engineering/1_SolarEX-Surface-Engineering-for-PV-Glass.png
- SolarEX-pres/SolarEX-PV-Glass-Coatings-or-SiO-and-TiO-Surface-Engineering/2_Why-Surface-Engineering-Matters.png
- SolarEX-pres/SolarEX-PV-Glass-Coatings-or-SiO-and-TiO-Surface-Engineering.pdf
- SolarEX-pres/SolarEX-PV-Glass-Coatings-or-SiO-and-TiO-Surface-Engineering.pptx

## Connector limitation

The current GitHub connector can safely create and update text files. It cannot upload binary PNG/PPTX/PDF visual assets into the repository as image files through the available text-file action.

Decision:

- Do not fake final visuals.
- Do not replace placeholders with unapproved stock graphics.
- Keep all Home placeholders active.
- Add manual asset tags to each placeholder.
- Add a structured visual insertion plan for later binary upload/manual insertion.

## Files added

| File | Purpose |
|---|---|
| assets/css/home-visual-insertion-tags.css | Styles manual asset tags attached to each Home placeholder. |
| assets/js/home-visual-insertion-tags.js | Injects manual asset tags into existing Home placeholders. |
| content/rebuild/home-visual-insertion-plan.json | Structured placeholder-to-source mapping. |
| docs/rebuild-20260613/validation/03-home-visual-insertion-plan.md | Validation log for this step. |

## Existing file changed

| File | Change |
|---|---|
| assets/js/navigation.js | Loads the visual insertion tag CSS and JS after mobile CSS layers. |

## Placeholder mapping

| Placeholder | Manual asset tag | Source |
|---|---|---|
| VIS-HOME-HERO-001 | MANUAL-ASSET-HOME-HERO-001 | Home slide image 1, SolarEX Surface Engineering for PV Glass |
| VIS-HOME-SURFACE-001 | MANUAL-ASSET-HOME-SURFACE-001 | Home long reference image, Why Surface Engineering Matters section |
| VIS-HOME-PATHWAYS-001 | MANUAL-ASSET-HOME-PATHWAYS-001 | Home long reference image, Two Pathways section |
| VIS-HOME-PARAMETERS-001 | MANUAL-ASSET-HOME-PARAMETERS-001 | Home long reference image, Validated Technical Parameters section |
| VIS-HOME-FIT-MATRIX-001 | MANUAL-ASSET-HOME-FIT-MATRIX-001 | Home long reference image, Pathway Fit section |
| VIS-HOME-EVIDENCE-001 | MANUAL-ASSET-HOME-EVIDENCE-001 | Home long reference image, Evidence and Commercial Value section |
| VIS-HOME-PROCESS-001 | MANUAL-ASSET-HOME-PROCESS-001 | Home PPTX workflow/source section |
| VIS-HOME-FAQ-001 | MANUAL-ASSET-HOME-FAQ-001 | Home PPTX technical questions/source section |

## Gate status

| Gate | Status |
|---|---:|
| Source authority confirmed | PASS |
| Visual binary insertion | NOT_AVAILABLE_THROUGH_TEXT_CONNECTOR |
| Placeholder IDs retained | PASS |
| Manual asset tags added | PASS |
| Home visual insertion plan created | PASS |
| Ready for manual binary upload or connector with binary support | YES |
| Ready for Technology page | NO - Home visual asset workflow must be approved first |

## Next action

Review the live Home page using:

https://nanotech-solutions-norway.github.io/solarex/?v=20260615-visualtags

Confirm whether the manual tags are acceptable for the current stage. If approved, upload the Home visual assets manually to the target paths or provide a connector/action that supports binary image upload.

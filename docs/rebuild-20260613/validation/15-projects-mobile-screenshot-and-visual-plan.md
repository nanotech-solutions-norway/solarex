# Validation Log - Projects Mobile Screenshot and Visual Insertion Plan

Generated: 17.06.2026 Europe/Oslo
Branch: main
Route: /projects/
Status: PROJECTS_MOBILE_GATE_PASS_VISUAL_INSERTION_PLANNED

## Screenshot review

The user-provided Projects mobile screenshot confirms that the route is live and the source-led project route structure is readable on mobile.

## Pass items

- Correct `/projects/` page is live.
- Hero text and CTA area are readable.
- Page explains route selection before product assumption.
- Quartz SiO₂ remains tied to passive, UV-independent hydrophobic/oleophobic easy-clean project routing.
- Titan TiO₂ remains tied to active, UV-dependent photocatalytic hydrophilic/superhydrophilic project routing.
- Mixed or unclear site cases are routed to technical review before product selection.
- Evidence and ROI language remains project-specific and contextualized.
- Placeholder IDs remain visible for audit.
- Menu and footer are consistent with Home, Technology, Quartz, Titan and Proof / Results.

## Remaining expected limitations

- Final binary visuals are still missing.
- Page remains long on mobile, which is acceptable for the structure stage.
- Placeholder tags are intentionally visible until image insertion.
- Visual rhythm should be improved after approved image upload and page-breaker insertion.

## Source scan summary

Projects visual/layout authority remains the SolarEX Projects/Evidence/Pilot Review and Documentation source set, plus supporting Quartz/Titan evidence files.

Relevant sources:

- Future Website Creation Playbook and Blueprint
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
- Keep all Projects placeholders active.
- Add manual asset tags to each Projects placeholder.
- Add a structured visual insertion plan for later binary upload/manual insertion.

## Files added

| File | Purpose |
|---|---|
| assets/js/projects-visual-insertion-tags.js | Injects manual asset tags into Projects placeholders. |
| content/rebuild/projects-visual-insertion-plan.json | Structured placeholder-to-source mapping. |
| docs/rebuild-20260613/validation/15-projects-mobile-screenshot-and-visual-plan.md | This validation log. |

## Existing file changed

| File | Change |
|---|---|
| assets/js/navigation.js | Loads Projects manual asset tag script. |

## Placeholder mapping

| Placeholder | Manual asset tag | Target |
|---|---|---|
| VIS-PROJECTS-HERO-001 | MANUAL-ASSET-PROJECTS-HERO-001 | assets/img/projects/projects-hero-pilot-review.webp |
| VIS-PROJECTS-PRINCIPLE-001 | MANUAL-ASSET-PROJECTS-PRINCIPLE-001 | assets/img/projects/projects-principle.webp |
| VIS-PROJECTS-ROUTES-001 | MANUAL-ASSET-PROJECTS-ROUTES-001 | assets/img/projects/projects-routes.webp |
| VIS-PROJECTS-WORKFLOW-001 | MANUAL-ASSET-PROJECTS-WORKFLOW-001 | assets/img/projects/projects-workflow.webp |
| VIS-PROJECTS-PATHWAY-TABLE-001 | MANUAL-ASSET-PROJECTS-PATHWAY-TABLE-001 | assets/img/projects/projects-pathway-table.webp |
| VIS-PROJECTS-PILOT-DESIGN-001 | MANUAL-ASSET-PROJECTS-PILOT-DESIGN-001 | assets/img/projects/projects-pilot-design.webp |
| VIS-PROJECTS-EVIDENCE-001 | MANUAL-ASSET-PROJECTS-EVIDENCE-001 | assets/img/projects/projects-evidence.webp |
| VIS-PROJECTS-DELIVERABLES-001 | MANUAL-ASSET-PROJECTS-DELIVERABLES-001 | assets/img/projects/projects-deliverables.webp |
| VIS-PROJECTS-FAQ-001 | MANUAL-ASSET-PROJECTS-FAQ-001 | assets/img/projects/projects-faq.webp |

## Gate status

| Gate | Status |
|---|---:|
| Projects source authority confirmed | PASS |
| Projects mobile structure review | PASS |
| Quartz SiO₂ project-route separation | PASS |
| Titan TiO₂ project-route separation | PASS |
| Mixed/unclear route to technical review | PASS |
| Evidence and ROI claim boundaries | PASS |
| Visual binary insertion | PENDING_MANUAL_UPLOAD |
| Manual asset tags added | PASS |
| Projects visual insertion plan created | PASS |
| Ready for next page structure build | YES |

## Next route

Proceed to `/case-studies/` structure build after this deployment cycle, unless the user asks to pause for manual Projects image upload.

## Test URL after deploy

https://nanotech-solutions-norway.github.io/solarex/projects/?v=20260617-projects-visualtags

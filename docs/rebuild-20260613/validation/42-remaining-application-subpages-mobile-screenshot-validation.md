# Validation Log - Remaining Application Subpages Mobile Screenshots

Generated: 03:08, 20.06.2026 Europe/Oslo
Status: MOBILE_SCREENSHOTS_PROVISIONAL_PASS_DESKTOP_AND_CTA_PENDING

## Routes and evidence

| Route | Evidence file | Screenshot dimensions |
|---|---|---|
| `/applications/utility-scale/` | `Screenshot_20260620_030536_Chrome.jpg` | 111 x 1536 px |
| `/applications/commercial-rooftop/` | `Screenshot_20260620_030449_Chrome.jpg` | 111 x 1536 px |
| `/applications/coastal-and-salt/` | `Screenshot_20260620_030408_Chrome.jpg` | 108 x 1536 px |

## Screenshot scope

The uploaded mobile screenshots are full-page captures of the three remaining application subpages. The stored images are very narrow, so this validation is limited to route loading, major mobile layout structure, section sequence, CTA visibility, card stacking, footer presence and obvious overflow or broken rendering. The screenshots are not used as fine-text proof.

## Validation summary

| Area | Utility-Scale | Commercial Rooftop | Coastal and Salt | Notes |
|---|---|---|---|---|
| Route load | PASS | PASS | PASS | Each route displays its intended page. |
| Header / menu area | PASS | PASS | PASS | Header appears compact at mobile width. |
| Hero | PASS | PASS | PASS | H1, lead and hero CTAs are visible. |
| CTA visibility | PASS | PASS | PASS | Primary Technical Review CTA and secondary route CTAs are visible. |
| Section order | PASS | PASS | PASS | Sections follow expected route principle, review factors, pathway/pilot and final CTA sequence. |
| Card stacking | PASS | PASS | PASS | Cards stack vertically without obvious major breakage. |
| Quartz/Titan separation | PASS | PASS | PASS | Separate Quartz SiO₂ and Titan TiO₂ route logic is preserved. |
| Footer | PASS | PASS | PASS | Footer appears at the end with stacked navigation groups. |
| Horizontal overflow | PASS_WITH_LIMITED_EVIDENCE | PASS_WITH_LIMITED_EVIDENCE | PASS_WITH_LIMITED_EVIDENCE | No obvious side overflow visible in narrow captures. |
| Fine typography | NOT_FULLY_VERIFIED | NOT_FULLY_VERIFIED | NOT_FULLY_VERIFIED | Screenshot width is too narrow for reliable fine-text and line-break validation. |
| CTA click function | PENDING | PENDING | PENDING | User has not yet confirmed CTA click behavior for these routes. |
| Desktop | PENDING | PENDING | PENDING | Desktop screenshots unavailable. |

## Decisions

- Treat all three remaining application subpage mobile layouts as provisionally passed.
- No immediate CSS or HTML correction is required from these screenshots.
- Keep desktop validation pending.
- Keep CTA click validation pending until user confirms.
- Do not insert binary visuals yet.
- Do not change backend, SQL or form endpoints.

## Source scan and classification

Current activity used:

- Latest uploaded screenshots as rendered mobile evidence.
- Google Drive visual/reference folder scan.
- Google Drive core SolarEX folder scan.
- Google Drive secondary SolarEX folder scan.
- GitHub repository `nanotech-solutions-norway/solarex`.

| Source/material | Classification | Use |
|---|---|---|
| Uploaded screenshots | PUBLIC_APPROVED validation evidence | Mobile layout validation. |
| Current GitHub route implementation | PUBLIC_APPROVED implementation baseline | Validated against screenshots. |
| Drive product/source folders | PUBLIC_APPROVED source orientation | No new claims added. |
| Backend/admin/SQL material | INTERNAL_ONLY | Not used. |
| Binary visual assets | PENDING_REVIEW | Not inserted. |

## Safety status

No files were changed except this validation log. No credentials, SQL connection details, admin passwords, private form tokens, customer submissions, confidential project data, protected supplier files, backend endpoints, unsupported performance guarantees, or binary visuals were committed.

## Open items

- CTA click validation remains required for `/applications/coastal-and-salt/`, `/applications/commercial-rooftop/`, and `/applications/utility-scale/`.
- `/applications/` CTA confirmation remains pending.
- `/applications/desert-and-dust/` CTA confirmation remains pending.
- Desktop screenshot validation remains required when available.
- Normal-resolution browser/device inspection is recommended before visual insertion.

## Next step

If the user accepts provisional mobile validation, proceed to the next missing navigation branch or run a link/CTA consolidation pass across the Applications branch.

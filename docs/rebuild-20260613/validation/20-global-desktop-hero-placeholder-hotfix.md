# Validation Log - Global Desktop Hero Placeholder Hotfix

Generated: 17.06.2026 Europe/Oslo
Branch: main
Status: GLOBAL_DESKTOP_HERO_PLACEHOLDER_HOTFIX_APPLIED_AFTER_DOCUMENTATION_PILOT_PASS

## Trigger

The user uploaded a corrected Documentation desktop screenshot after the one-page pilot hotfix. The screenshot confirms that the oversized right-side desktop hero placeholder capsule was removed on Documentation while the hero text, CTA group, summary panel, page structure and non-hero placeholders remain usable.

## Validation result for pilot page

| Page | Result |
|---|---:|
| Documentation desktop after pilot hotfix | PASS |

## Repeated issue confirmed in screenshot series

| Page | Repeated hero issue before global fix |
|---|---:|
| Home | YES |
| Technology | YES |
| Quartz SiO₂ | YES |
| Titan TiO₂ | YES |
| Proof / Results | YES |
| Projects | YES |
| Case Studies | YES |
| Documentation | FIXED IN PILOT |

## Applied correction

The Documentation correction pattern was generalized into a shared desktop-scoped stylesheet.

## Files added

| File | Purpose |
|---|---|
| assets/css/desktop-hero-placeholder-hotfix.css | Removes oversized desktop hero placeholder capsules across completed routes while preserving non-hero placeholder audit tags. |
| docs/rebuild-20260613/validation/20-global-desktop-hero-placeholder-hotfix.md | This validation log. |

## Files changed

| File | Change |
|---|---|
| assets/js/navigation.js | Loads the global desktop hero placeholder hotfix stylesheet after the Documentation pilot hotfix. |

## Scope of CSS correction

The shared correction applies to desktop hero placeholder elements only on the completed routes:

- Home
- Technology
- Quartz SiO₂
- Titan TiO₂
- Proof / Results
- Projects
- Case Studies
- Documentation

## What the correction does

- Removes the oversized hero placeholder outline/capsule on desktop.
- Hides hero placeholder labels/manual tags in the hero area only.
- Keeps non-hero placeholder cards and manual asset tags visible for later image insertion tracking.
- Keeps page structure, public copy, CTA layout, menu, footer and product distinctions unchanged.
- Keeps the correction desktop-scoped; mobile validation is not intentionally changed.

## Product and claim safety check

| Area | Status |
|---|---:|
| Quartz SiO₂ passive / UV-independent wording unchanged | PASS |
| Titan TiO₂ active / UV-dependent wording unchanged | PASS |
| Evidence/ROI claim boundaries unchanged | PASS |
| No binary visuals inserted | PASS |
| No SQL/backend changes made | PASS |
| No Wix production changes made | PASS |

## Post-deploy validation request

After GitHub Pages deploys, review the following desktop pages with cache-busting query values:

- https://nanotech-solutions-norway.github.io/solarex/?v=20260617-global-hero-hotfix
- https://nanotech-solutions-norway.github.io/solarex/technology/?v=20260617-global-hero-hotfix
- https://nanotech-solutions-norway.github.io/solarex/quartz/?v=20260617-global-hero-hotfix
- https://nanotech-solutions-norway.github.io/solarex/titan/?v=20260617-global-hero-hotfix
- https://nanotech-solutions-norway.github.io/solarex/proof-results/?v=20260617-global-hero-hotfix
- https://nanotech-solutions-norway.github.io/solarex/projects/?v=20260617-global-hero-hotfix
- https://nanotech-solutions-norway.github.io/solarex/case-studies/?v=20260617-global-hero-hotfix
- https://nanotech-solutions-norway.github.io/solarex/documentation/?v=20260617-global-hero-hotfix

Validation focus:

1. Confirm oversized desktop hero placeholder capsule is removed on all completed routes.
2. Confirm hero text, CTA group and right-side summary panels are still aligned.
3. Confirm non-hero placeholders remain visible for manual asset insertion tracking.
4. Confirm no new desktop overflow is introduced.
5. Confirm mobile pages are not materially changed by the desktop-scoped fix.

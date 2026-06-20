# Validation Log - ROI Canonical Handoff Correction

Generated: 13:31, 20.06.2026 Europe/Oslo
Branch: main
Status: ROI_CANONICAL_HANDOFF_COMMITTED_PENDING_LIVE_REDIRECT_TEST
Labels: ROI, LINK, CTA, USER_CORRECTION

## User correction

User clarified that the correct ROI Calculator page is:

`https://nanotech-solutions-norway.github.io/SolarEX-ROI-Calculator/`

## Decision

The standalone ROI Calculator is now treated as the canonical approved implementation. The SolarEX v5 `/roi-calculator/` route should not maintain a separate reconstructed calculator because that creates divergence risk.

## Action

Replaced the v5 `/roi-calculator/index.html` page with a canonical handoff route that redirects to:

`https://nanotech-solutions-norway.github.io/SolarEX-ROI-Calculator/`

The page also includes a visible fallback card with an `Open SolarEX ROI Calculator` button if automatic redirect does not run.

## Sources checked

- Google Drive `SolarEX-ROI-Calculator` folder.
- Google Drive `SolarEX-ROI-Calculator-Package` folder.
- GitHub repository `nanotech-solutions-norway/SolarEX-ROI-Calculator`.
- GitHub repository `nanotech-solutions-norway/solarex`.
- Project memory ROI modification notes.
- User-provided canonical ROI Calculator URL.

## Files changed

| File | Purpose |
|---|---|
| `roi-calculator/index.html` | Canonical redirect/handoff to the approved standalone ROI Calculator. |
| `docs/rebuild-20260613/validation/49-roi-canonical-handoff-correction.md` | This correction log. |

## Validation performed

- Confirmed the canonical standalone ROI Calculator repository is accessible.
- Confirmed the v5 ROI route now uses the standalone ROI Calculator as canonical target.
- Confirmed the v5 route no longer contains the reconstructed calculator version.
- Confirmed a manual fallback button is present.

## Pending validation

- Open `https://nanotech-solutions-norway.github.io/solarex/roi-calculator/` and confirm it redirects to the standalone ROI Calculator.
- Check the standalone ROI Calculator against remembered requested enhancements before editing the ROI repository itself.

## Next step

Validate the redirect, then decide whether to update the canonical standalone ROI repository with any missing remembered enhancements.
